import time

player = {}

def fauxType(string: str, enter: bool = True):
    for char in string: 
        print(char, end = "", flush = True)
        time.sleep(0.05)
    if enter: print("")

def printChoices(choices):
    for index, choice in enumerate(choices): print(f"{index}. {choice}")

def getChoice(choices: list, choice: int, freeze: bool = False):
    if type(choice) is int and choice < len(choices): return choices[choice]
    if not freeze: 
        print("\033[A\033[A")
        print("Please, try again.")
    else: print("\033[A\033[A")
    promptPlayer(choices, True)

def formatChoice(choice: str):
    print("\033[A\033[A")
    print(f">> {choice}")

def getName():
    fauxType("Enter your name:")
    print(">>", end = " ", flush = True)
    player["name"] = input("").lower().capitalize()
    formatChoice(player["name"])

def getDiffLevel():
    choices = ["Easy", "Normal", "Hard"]
    fauxType("Select a difficulty level")
    printChoices(choices)
    print(">>", end = " ", flush = True)
    player["diffLevel"] = formatChoice(getChoice(choices, int(input(""))))

def initPlayer():
    choices = ["Back", "Continue"]
    getName()
    getDiffLevel()
    fauxType(f"""{player["name"]}, you have selected {player["diffLevel"]}. Would you like to continue?""")
    printChoices(choices)
    print(">>", end = " ", flush = True)
    formatChoice(getChoice(choices, int(input("")), freeze))

def quitGame():
    choices = ["Quit", "Continue"]
    printChoices(choices)
    print(">>", end = " ", flush = True)
    formatChoice(getChoice(choices, int(input("")), freeze))

#Start

fauxType("Welcome to findJoe.py", True)

initPlayer()

fauxType("Oh, no! Our instructor Joe has gone missing!", True)
fauxType("He was last seen in a breakout room assigning his students an unsolvable algorithm...", True)
fauxType("Will you help find Joe?", True)

quitGame()