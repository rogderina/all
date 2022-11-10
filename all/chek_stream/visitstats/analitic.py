import requests
import json
import random

newHeaders = {'Content-type': 'application/json'}
time_reg = '2022-10-13T05:29:33.931Z'
first = random.randint(0, 400)
second = random.randint(0, 400)
event_id = '102824'
event_code = '452ngt'
isLIVE = False
if first < second:
    start_reg = first
    end_reg = second
else:
    start_reg = second
    end_reg = first
data_s = [{"time": time_reg,
                                            "type": "analytics",
                                            "trigger": "PLAYER_PLAY",
                                            "viewer_id": "00ca55ac-b044-e1ca-92bb-804c42d751e1",
                                            "visit_id": "e753be4f-2de3-feec-88a0-122bb5e67978",
                                            "event_id": event_id,
                                            "event_code": event_code,
                                            "password": "123",
                                            "start": start_reg,
                                            "end": end_reg,
                                            "is_live": "false"

                                            }]
data_ser = json.dumps(data_s)
print(start_reg)
print(end_reg)


futur_position = start_reg // 60
futur_position_1 = end_reg // 60

positions = []
while futur_position <= futur_position_1:
    positions.append(futur_position)
    futur_position = futur_position + 1




regist = requests.post("http://collector.facecast.net:8021/v1/register_visit_events",
                                      data=data_ser,
                                      headers=newHeaders,
                                      )
registed = regist.json()
print(registed)

visit_h = requests.get("http://dwh.facecast.net:9021/v2/visit_histogram/102824")

visited_h = visit_h.json()

print(visited_h)

i = 0
for i in visited_h[0]['histogram']:
    dictionary_pos = {
        'level': "info",
        'message': "test passed. list position is good"}

    dictionary_pos1 = {
        'level': "warning",
        'message': "test NOT passed. ;list position is wrong"}
    success = False
    k = 0
    print(i['views'])
    if i['views'] != None:

        for k in range(len(positions)):
            if i['position'] == positions[k]:
             success = True

        if success:
            print(repr(dictionary_pos))
        else:
            print(repr(dictionary_pos1))
    else:
        print({"views null"})



        dictionary_is_live = {
            'level': "info",
            'message': "test passed. is_live is good"}

        dictionary_is_live1 = {
            'level': "warning",
            'message': "test NOT passed. is_live is wrong"}
        if i['views'][0]['is_live'] == isLIVE:
            print(repr(dictionary_is_live))
        else:
            print(repr(dictionary_is_live1))




