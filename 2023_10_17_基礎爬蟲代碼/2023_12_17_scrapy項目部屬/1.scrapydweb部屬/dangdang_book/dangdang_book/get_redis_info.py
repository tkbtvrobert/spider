import json
import redis

redis_client = redis.Redis(host='192.168.52.129', port=6379, db=0)

for temp in redis_client.lrange('book:items', 0, -1):
    print(json.loads(temp))

redis_client.close()