# start부터 end 까지의 합을 구하고 반환

def total(start,end):
    sum = 0
    for i in range(start,end+1):
        sum = sum + i
    return sum

#num1과 num2의 사칙연산의 결과를 반환
def calc(num1,num2):
    return num1+num2, num1-num2 , num1*num2, num1/num2

'''
__name__
- 파이썬이 내부적으로 사용하는 특별한 변수 이름
- .py 파일이 직접 실행될 경우 __name 변수에 __main 값이 자동으로 저장됨
- 다른 파이썬 모듈에서 import하여 .py 파일을 사용할 경우 __name__에 모듈 이름 값이 저장됨
'''

if __name__ == '__main__':
    print(total(1,100))
    print(calc(10,3))