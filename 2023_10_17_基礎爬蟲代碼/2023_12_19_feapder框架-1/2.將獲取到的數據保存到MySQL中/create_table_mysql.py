from feapder.db.mysqldb import MysqlDB

# 在feapder框架连接mysql时, 只需要创建连接对象, 无需创建游标
db = MysqlDB(ip='localhost', port=3306, user_name='root', user_pass='root', db='py_spider')

create_table = """
    create table if not exists douban_feapder(
        id int primary key auto_increment,
        title varchar(255) not null,
        score varchar(10) not null,
        detail_url varchar(255) not null,
        detail_text text
    );
"""

db.execute(create_table)