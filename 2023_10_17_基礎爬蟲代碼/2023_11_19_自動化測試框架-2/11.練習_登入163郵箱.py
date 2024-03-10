import time
from selenium import webdriver
from selenium.webdriver.common.by import By


class LoginEmail:
    def __init__(self):
        self.browser = webdriver.Chrome()

    def open_mail(self, url):
        self.browser.get(url)
        time.sleep(1)

    def login_email(self, email, password):
        iframe = self.browser.find_element(By.XPATH, '//div[@id="loginDiv"]/iframe[@scrolling = "no"]')

        # 登录表单为一个子页面, 需要切入到当前这个子页面中，得看網頁判斷，有些不是
        # 如果有 iframe 就要切入到子頁面
        self.browser.switch_to.frame(iframe)

        self.browser.find_element(By.XPATH, '//input[@name="email"]').send_keys(email)
        self.browser.find_element(By.XPATH, 'div[@class="u-input box"//input[@name="password"]').send_keys(password)

        self.browser.find_element(By.XPATH, './/*[@id="dologin"]').click()

    # __del__ 用魔術方法也可以
    def close(self):
        time.sleep(10)
        self.browser.quit()


if __name__ == '__main__':
    email = LoginEmail()
    email.open_mail('https://mail.163.com')
    email.login_email('wt_poppies@163.com', 'wt199486')
    email.close()