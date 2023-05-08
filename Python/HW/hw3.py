while True:
  print('''
  1. 단어 입력(단어, 뜻 ,레벨)
  2. 단어 출력
  3. 단어 저장(.txt에 저장)
  4. 프로그램 종료
  ''')
  a = input('실행 번호를 선택하세요: ')
  if a == '1':
    file = open('./data/word.txt','at')
    word, kor, level = input('단어를 입력하세요: ').split()
    file.write(word+'('+kor+','+ level+')\n')
    file.close()
  elif a == '2':
    try:
      file = open('./data/word.txt','rt')
      data = file.read()
      print(data)
    except:
      print('읽을 파일이 없습니다.')
  elif a == '3':
    file = open('./data/word.txt','r')
    lines = file.readlines()
    print('저장되었습니다')
  elif a == '4':
    print('프로그램 종료')
    break
  else:
    print('1~4까지의 숫자를 입력해주세요')
