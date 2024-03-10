import redis

redis_client = redis.Redis(host='192.168.52.129', port=6379, db=0)
redis_client.lpush('dd_book:start_url', 'http://search.dangdang.com/?key=python&act=input&page_index=1')
redis_client.close()