import json
import redis


def push_start_url_form_data(db, request_obj):
    """
    :param db:
    :param request_obj: {'url': url, 'form_data': form_data, 'meta': meta}
    :return:
    """
    db.lpush('jc:start_urls', request_obj)


if __name__ == '__main__':
    redis_client = redis.Redis(host='192.168.52.129', port=6379, db=0)
    for page in range(1, 21):
        # 需要将表单中的数字类型强转为字符串类型
        form_data = {
            "column": "szse_latest",
            "pageNum": str(page),
            "pageSize": "30",
            "sortName": "",
            "sortType": "",
            "clusterFlag": "true"
        }

        # 不能直接回傳 form_data ，因為外面是一個大字典，這是一個字典嵌套
        # request_obj: {'url': url, 'form_data': form_data, 'meta': meta}
        request_data = {
            'form_data': form_data
        }
        # 把 request_data 變成字節上傳
        push_start_url_form_data(redis_client, json.dumps(request_data))
    redis_client.close()