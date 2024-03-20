# import requests
#
# url = 'https://turing.captcha.qcloud.com/cap_union_new_getcapbysig?aid=2079047974&sess=s0EfIiKc29PI6-f5aKzdMkI8ArmdA8VxX9n_tQI-OElpLfTWrmIrQquq3aJb0Esqtf8CFPmiQ3DznBMANpe6BgBeniR5vnv_nE61IMdRFdm1Tt0deNPgKk04QkcMq7p8loJl3-yO-pc3Ru4HBwd7j5p__LpKVhMldOloWKSkE18KTxNt-yS5vs0V3KOM3pZb9v0MHF3bVcAXvx8gWHLtKJ_VanBJ9v-enjRyz2q3gcCEXOINgF6byjLxMqrPyoJmMDm4VEDey6ksOwt43477YncfhK6RjcWyROEGoZLukkUxLGGf_hSYq3LTobgGK_JrujcBqStbrXPyx_rSqb3qGd2g**&sid=7173661540242722816&img_index=2&subsid=12'
# res = requests.get(url)
# open('full.png', 'wb').write(res.content)
#
# url = 'https://turing.captcha.qcloud.com/cap_union_new_getcapbysig?aid=2079047974&sess=s0EfIiKc29PI6-f5aKzdMkI8ArmdA8VxX9n_tQI-OElpLfTWrmIrQquq3aJb0Esqtf8CFPmiQ3DznBMANpe6BgBeniR5vnv_nE61IMdRFdm1Tt0deNPgKk04QkcMq7p8loJl3-yO-pc3Ru4HBwd7j5p__LpKVhMldOloWKSkE18KTxNt-yS5vs0V3KOM3pZb9v0MHF3bVcAXvx8gWHLtKJ_VanBJ9v-enjRyz2q3gcCEXOINgF6byjLxMqrPyoJmMDm4VEDey6ksOwt43477YncfhK6RjcWyROEGoZLukkUxLGGf_hSYq3LTobgGK_JrujcBqStbrXPyx_rSqb3qGd2g**&sid=7173661540242722816&img_index=1&subsid=11'
# res = requests.get(url)
# open('bg.png', 'wb').write(res.content)



import requests

url = 'https://static.geetest.com/captcha_v3/batch/v3/55187/2023-12-08T14/word/75b4ac5bc2be4634bbf8be3f90aeedf2.jpg?challenge=15a05a89c1389e1c933b7292518e3479'
res = requests.get(url)
open('click.png', 'wb').write(res.content)