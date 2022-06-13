discOrders = []
def newDiscOrder():
    discOrders.append({
        "name": input("What is the name? "),
        "speed": input("What is the speed? "),
        "glide": input("What is the glide? "),
        "turn": input("What is the turn? "),
        "fade": input("What is the fade? ")
    })
newDiscOrder()
print(discOrders)
# discOrders = []

# def prepDiscRef ():
#     name = input('What is the name?\n')
#     speed = int(input("What do you want the disc speed to be?\n"))
#     glide = int(input("What do you want the disc speed to be?\n"))
#     turn = int(input("What do you want the disc speed to be?\n"))
#     fade = int(input("What do you want the disc speed to be?\n"))
    


#     name = [speed,glide,turn,fade]
#     discOrders.append(name)
#     print(discOrders)

# prepDiscRef() 