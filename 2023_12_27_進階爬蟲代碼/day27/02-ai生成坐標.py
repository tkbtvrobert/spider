"""

真实值:x,y (14, 10)  生成值: x,y(427, 312)
真实值:x,y (156, 9)  生成值: x,y(4686, 282)
真实值:x,y (279, 200)  生成值: x,y(8376, 6011)
真实值:x,y (68, 267)  生成值: x,y(2046, 8021)
真实值:x,y (280, 278)  生成值: x,y(8406, 8351)  帮我根据这个对应关系 生成一个python函数

"""


from sklearn.linear_model import LinearRegression

def generate_values_from_real(x_real, y_real):
    # 提供的数据
    real_values = [(68, 267), (280, 278), (14, 10), (156, 9), (279, 200)]
    generated_values = [(2046, 8021), (8406, 8351), (427, 312), (4686, 282), (8376, 6011)]

    # 训练线性回归模型
    model_x = LinearRegression()
    model_y = LinearRegression()

    real_x = [real[0] for real in real_values]
    real_y = [real[1] for real in real_values]
    model_x.fit([[x] for x in real_x], [gen[0] for gen in generated_values])
    model_y.fit([[y] for y in real_y], [gen[1] for gen in generated_values])

    # 预测生成值
    x_generated = int(model_x.predict([[x_real]])[0])
    y_generated = int(model_y.predict([[y_real]])[0])

    return x_generated, y_generated

# 测试
real_values = [(68, 267), (280, 278), (14, 10), (156, 9), (279, 200)]

for x_real, y_real in real_values:
    x_generated, y_generated = generate_values_from_real(x_real, y_real)
    print(f"真实值:x,y ({x_real}, {y_real})  生成值: x,y({x_generated}, {y_generated})")
