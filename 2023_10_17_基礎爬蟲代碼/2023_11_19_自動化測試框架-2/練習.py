import time
from selenium import webdriver
from selenium.webdriver.common.by import By


class LoginEmail:
    def __init__(self):
        self.browser = webdriver.Chrome()

    def open_yahoo(self, url):
        self.browser.get(url)
        time.sleep(1)

    def login_btn(self):
        self.browser.find_element(By.XPATH, '//*[@id="header-signin-link"]').click()
        time.sleep(5)

    def login_email(self, email, password):
        self.browser.find_element(By.XPATH, '//*[@id="login-username"]').send_keys(email)
        self.browser.find_element(By.XPATH, '//*[@id="login-signin"]').click()
        time.sleep(5)
        self.browser.find_element(By.XPATH, '//*[@id="login-passwd"]').send_keys(password)
        self.browser.find_element(By.XPATH, '//*[@id="login-signin"]').click()
        time.sleep(5)

    def close(self):
        time.sleep(5)
        self.browser.quit()


if __name__ == '__main__':
    email = LoginEmail()
    email.open_yahoo('https://tw.yahoo.com/')
    email.login_btn()
    email.login_email('zz50717tw', 'xxxxxxxxxx')
    email.close()
