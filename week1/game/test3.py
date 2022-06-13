import time

player = {}

def fauxType(string: str, enter: bool = True):
    for char in string: 
        print(char, end = "", flush = True)
        time.sleep(0.05)
    if enter: print("")

def printChoices(choices):
    for index, choice in enumerate(choices): print(f"{index}. {choice}")

def getChoice(choices: list, freeze: bool = False):
    print(">>", end = " ", flush = True)
    choice = int(input(""))
    if type(choice) is int and choice < len(choices): return choices[choice]
    if freeze: print("\033[A\033[A")    
    else: 
        print("\033[A\033[A")
        print("Please, try again.")
    getChoice(choices, True)

def formatInput(choice):
    print("\033[A\033[A")
    print(">>", choice)

def getName():
    fauxType("ENTER PLAYER NAME:")
    print(">>", end = " ", flush = True)
    player["name"] = input("").lower().capitalize()
    return player["name"]

def getDiffLevel():
    choices = ["Easy", "Normal", "Hard"]
    fauxType("SELECT DIFFICULTY LEVEL:")
    printChoices(choices)
    player["diffLevel"] = getChoice(choices)
    formatInput(player["diffLevel"])

def initPlayer():
    choices = ["Back", "Confirm"]
    formatInput(getName())
    formatInput(getDiffLevel())
    fauxType(f"""{player["name"]}, you have selected {player["diffLevel"]}. Are you sure?""")
    printChoices(choices)
    formatInput(getChoice(choices))

def loading():
    for char in "LOADING... PLEASE WAIT.":
        print(char, end = "", flush = True)
        time.sleep(0.075)
    print("")
    print("\033[A\033[A")
    for char in "LOADING... PLEASE WAIT.":
        print(" ", end = "", flush = True)
        time.sleep(0.025)
    print("")
    print("\033[A\033[A")

def leaveGame():
    choices = ["Quit", "Continue"]
    printChoices(choices)
    formatInput(getChoice(choices))

def tryAgain():
    choices = ["No", "Yes"]
    fauxType("Would you like to play again?")
    printChoices(choices)
    formatInput(getChoice(choices))

fauxType("Welcome to findJoe.py")
initPlayer()
loading()
fauxType("Oh, no! Our instructor Joe has gone missing!")
fauxType("He was last seen in a breakout room assigning his students an unsolvable algorithm...")
fauxType("Will you help find Joe?")
leaveGame()
tryAgain()