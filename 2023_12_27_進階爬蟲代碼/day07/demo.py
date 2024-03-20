def aa():
    abc = '123'

    def bb():
        print(abc)
    abc = '234'
    bb()


aa()
