import pymongo

mongo_client = pymongo.MongoClient(host='localhost', port=27017, username='admin', password='root')
# print(mongo_client)

collection = mongo_client['students']['stu_info']

# student = {'id': '20170101', 'name': 'Jordan', 'age': 20, 'gender': 'male'}
# result = collection.insert_one(student)
# print(result)

student_1 = {'id': '20170101', 'name': 'Jordan', 'age': 20, 'gender': 'male'}
student_2 = {'id': '20170202', 'name': 'Mike', 'age': 21, 'gender': 'male'}
result = collection.insert_many([student_1, student_2])
print(result)