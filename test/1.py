result_list = []  # 결과를 저장할 빈 리스트

for item in data['tbLnOpendataRentV']['row']:
    if item['SGG_NM'] == '강남구':
        if item['BUBN'] != "0000":
            result = item['SGG_NM'] + ' ' + item['BJDONG_NM'] + ' ' + item['BOBN'] + ' ' + item['BUBN'] + ' ' + item['BLDG_NM']
            result_list.append(result)

# 결과 출력
for result in result_list:
    print(result)