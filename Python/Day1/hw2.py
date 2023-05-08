# 2-1

'''
import random as r

while True:

  ju = int(input('주사위의 값을 입력하세요'))
  an = r.randint(1,6)

  if an == ju:
    print(f'주사위의 값: {an}, 맞았습니다.')
    break
  else:
    print(f'주사위의 값: {an}, 틀렸습니다.')

'''

#2-2

'''
import random as r

li = ['가위','바위','보']
while True:

  ju = input('가위바위보 하나를 선택하세요: ')
  an = r.choice(li)

  if an == ju: # 가위
    print(f'컴퓨터 값: {an}, 비겼습니다.')

  elif (an == '가위' and ju == '바위') or (an == '보' and ju == '가위') or (an == '바위' and ju == '보'): 
    print(f'컴퓨터 값: {an}, 이겼습니다.')
    break
  elif (an == '가위' and ju == '보') or (an == '바위' and ju == '가위') or (an == '보' and ju == '바위'): 
    print(f'컴퓨터 값: {an}, 졌습니다.')

  else:
    print('가위 바위 보 중 한개를 입력해 주세요')
        
'''

#2-3
'''
import random as r

li = []

while len(li) != 6:
  lotto = r.randint(1,45)
  while lotto in li: # lotto 값이 li 에 있으면 참이여서 lotto를 다시 지정
    lotto = r.randint(1,45)
  li.append(lotto)
li.sort()
print(li)

'''
'''
import random as r

li = []

while len(li) != 6:
  lotto = r.randint(1,45)
  li.append(lotto)
  li = set(li)
  print(li)
  li = list(li)
li.sort()
print(li)
'''

#2-4
'''
li1 = [2,3,4,5,6,7,8,9,2,3,4,5]
sum = 0
ju = input('주민번호를 - 빼고 입력하시오: ')
juli = ju[:12]
list(juli)
for i in range(len(juli)):
  sum = sum + int(li1[i]) * int(juli[i])
mak = 11 - (sum%11)
if mak == 0 or mak == 11:
  mak = mak % 10
if mak == int(ju[12]):
  print('맞는 주민등록번호 입니다.')
else:
  print('잘못된 주민등록 번호')
'''

a = list(map(int,input()))
print(type(a[0]))

