import time

class Player:
    def __init__(self):
        self.name = None
        self.difficulty = None
        self.score = 0
        self.choices = []

    def setDifficulty(self, choice):
        self.difficulty = choice

    def updateScore(self, points):
        self.score += points

    def addChoice(self, choice):
        self.choices.append(choice)

def fauxType(string, enter = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.03125)
    if enter: print("")

def handleChoice(options: list):
    print("Select an option below:")
    print("")
    for index, option in enumerate(options):
        print(f"{ index }. { option }")
    print("")
    print(">>", end = " ", flush = True)
    choice = input("")
    try:
        choice = int(choice)
        if choice < len(options):
            for i in range(len(options) + 4):
                print("\033[A\033[A")
            for i in range(len("Select an option below:")):
                print(" ", end = "", flush = True)
            print("\033[A\033[A")
            print(f">> { options[choice] }")
            player.addChoice(options[choice])
            return options[choice]
    except:
        if choice in options:
            for i in range(len(options) + 4):
                print("\033[A\033[A")
            for i in range(len("Select an option below:")):
                print(" ", end = "", flush = True)
            print("\033[A\033[A")
            print(f">> { choice }")
            player.addChoice(options[choice])
            return options[choice]
        else:
            print("\033[A\033[A")
            print("   ", end = "", flush = True)
            for char in choice:
                print(" ", end = "", flush = True)
            print("\033[A")
            handleChoice(options)

player = Player()

print("")
fauxType("Welcome to findJoe.py")
print("")
fauxType("Oh, no! Our instructor Joe has gone missing...")
fauxType("Will you help find him?")
print("")
if handleChoice(["Exit", "Continue"]) == "Exit": 
    print("Thanks for playing!")
player.name = input("")
player.difficulty = handleChoice(["Easy", "Hard"])
