import redis

redis_client = redis.Redis(host='127.0.0.1', port=6379)
redis_client.lpush('top250:start_urls', 'https://movie.douban.com/top250?start=0&filter=')
print('插入完成...')
redis_client.close()