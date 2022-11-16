import requests
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
import logging

response = requests.get("http:",
    headers={
        "Authorization": "Basic YW5hbHl6ZTppZGRxZGlka2Zh"
    }
)
parametrs = response.json()
eventcode_arr = []
for ar in parametrs['data']['result']:
    try:
        response_code = requests.post("https:",
                                      data={"uid": "14745", "api_key": "",
                                            "event_id": ar['metric']['eventid']})
        param_code = response_code.json()
        driver = webdriver.Chrome(ChromeDriverManager().install())
        driver.get("https:" + param_code['code'] + "?muted=1&autorun=1")
        time.sleep(6)
        dictionary = {
            'level': "info",
            'message': "test passed. stream without acsess",
            'eventcode': param_code['code'],
            'current_time': driver.execute_script("return document.getElementsByTagName('video')[0].currentTime"),
            'duration': driver.execute_script("return document.getElementsByTagName('video')[0].duration")}
        if dictionary.current_time == 0 or dictionary.duration == 0:
            logging.info("трансляция не работает")
        else:
            logging.info(repr(dictionary))
        eventcode_arr.append(param_code['code'])
        driver.quit()

    except:
        logging.warning('Трансляция с доступом')
        response_code_1 = requests.post("https:",
                                      data={"uid": "14745", "api_key": "N42tZO89OP8X36jwjm711vlauReYpRL2",
                                            "event_id": ar['metric']['eventid']})
        param_code_1 = response_code_1.json()
        channel_id_code = param_code_1['channel_id']
        time.sleep(6)
        admin_key = requests.get("http:)
        param_code_key = admin_key.json()
        driver.quit()
        param_code_key_a = param_code_key['admin_key']
        driver_key = webdriver.Chrome(ChromeDriverManager().install())
        driver_key.get("https:" + param_code_1['code'] + "?key=" + param_code_key_a + "&muted=1&autorun=1")
        time.sleep(3)
        dictionary1 = {
                'level': "info",
                'message': "test passed. stream without acsess",
                'eventcode': param_code_1['code'],
                'current_time': driver_key.execute_script("return document.getElementsByTagName('video')[0].currentTime"),
                'duration': driver_key.execute_script("return document.getElementsByTagName('video')[0].duration")}
        if dictionary1.current_time == 0 or dictionary1.duration == 0:
            logging.info("трансляция не работает")
        else:
            logging.info(repr(dictionary1))
        eventcode_arr.append(param_code['code'])
        print(repr(dictionary1))
        driver.quit()

    finally:
        logging.info('Тест пройден')




