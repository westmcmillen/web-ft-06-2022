import time

class Player:
    def __init__(self):
        self.name = None
        self.difficulty = None
        self.score = 0
        self.choices = []
    def setName(self, name):
        self.name = name
    def setDifficulty(self, difficulty):
        self.difficulty = difficulty
    def updateScore(self, points):
        self.score = points
    def updateChoices(self, choice):
        self.choices.append(choice)

def fauxType(string, enter = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.03125)
    if enter: print("")

print("")
fauxType("Welcome to findJoe.py")
print("")
fauxType("Oh, no! Our instructor Joe has gone missing...")
fauxType("Can you help find him?")
print("")
player = Player()
fauxType("Enter your name:")
print("")
print(">>", end = " ", flush = True)
player.setName(input(""))
print("")
fauxType("Select difficulty:")
print("")
print("0. Easy")
print("1. Hard")
print("")
print(">>", end = " ", flush = True)
player.setDifficulty(int(input("")))
print("")
fauxType(f"{ player.name }, you have selected { player.difficulty }. Are you sure?")
print("")
print("0. Back")
print("1. Continue")
print("")
print(">>", end = " ", flush = True)