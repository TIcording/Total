# 문제 1
"""
n = int(input())
li1 = []
for i in range(n):
    li = int(input())
    li1.append(li)
li1.sort()
print("예제 출력")
for i in range(len(li1)):
    print(li1[i])
"""

# 문제 2
"""
answer = input("예제 입력 :")
if len(answer) == 8:
    if answer == '12345678':
        print('ascending')
    elif answer == '87654321':
        print('descending')
    else :
        print('mixed')
else:
    print('8자리의 숫자를 입력해주세요')
"""

# 문제 3
'''
n = int(input('점의 개수 : '))
li1 = []
for i in range(n):
    x, y = input().split()
    li1.append([x,y])
li1.sort()
print()
for i in li1:
    for j in i:
        print(j,end=' ')
    print()
'''

# 문제 4
'''
n = input()
nli = list(n)
nli.sort(reverse=True)
for i in range(len(nli)):
    print(nli[i],end='')
'''