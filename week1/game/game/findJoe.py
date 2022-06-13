import time

class Player:
    def __init__(self):
        self.name = ""
        self.diffLevel = 0
        self.score = []
    def updateName(self, name):
        self.name = name
    def updateDiffLevel(self, diffLevel):
        self.diffLevel = diffLevel
    def updateScore(self, score):
        self.score.append(score)

player = Player()

def fauxType(string: str, enter: bool = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.05)
    if enter: print("")

def getChoice(choices: list, freezePrint: bool = False):
    print("Select an action from the list below")
    print("")
    for index, choice in enumerate(choices):
        print(f"{index}. {choice}")
    print("")
    print(">>", end = " ", flush = True)
    choice = int(input(""))
    if type(choice) is int and choice < len(choices):
        print("\033[A\033[A")
        print(">>", choices[choice])
        print("")
        return choices[choice]
    if not freezePrint:
        print("\033[A\033[A")
    else:
        print("\033[A\033[A")
        fauxType("Please, try again")
    getChoice(choices, True)

def newGame():
    print("")
    fauxType("Welcome to findJoe.py")
    print("")
    fauxType("Oh, no! Our instructor Joe has gone missig!")
    fauxType("Can you help find him?")
    print("")
    getChoice(["Quit", "Continue"])


newGame()