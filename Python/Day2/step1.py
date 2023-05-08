# import random as r

# li = ['서승수','백지명','탁성대','송태인','박현식','이현준','전장훈']
# a = r.randint(0,6)
# b = r.randint(2,21)

# if b != 17 or b != 9 or b != 10 or b !=11 or b !=14 or b !=20:
#     print('보낼사람? ',li[a],'받는사 람',b)

wallpaper = [".#...", "..#..", "...#."]

answer = []

rdy = 0 # 끝점 y
rdx = 0 # 끝점 x
lux = 0 # 시작점 x 
luy = 0 # 시작점 y

for i in range(0,len(wallpaper)):
    for j in range(0,len(wallpaper[i])):
        if wallpaper[i][j] == '#':
            if rdy < j:
                rdy = j
                print(rdy)
            if lux > j:
                lux = j
                print(lux)
answer.append(lux)
answer.append(rdy)

print(answer)
    


