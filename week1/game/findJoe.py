import time

player = {}

def fauxType(string, enter = False):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.03125)
    if enter: print("")

def getPlayerName():
    fauxType("Enter your name:", True)
    print("")
    print(">>", end = " ", flush = True)
    player["name"] = input("").lower().capitalize()
    formatChoice(">>", player["name"])
    return player["name"]

def getDiffLevel():
    choices = ["Easy", "Normal", "Hard"]
    fauxType("Choose a difficulty level:", True)
    printChoices(choices)
    print(">>", end = " ", flush = True)
    choice = getChoice(choices, int(input("")))
    formatChoice(">>", choice)
    return choice

def printChoices(choices):
    print("")
    for index, option in enumerate(choices):
        print(f"{index}. {option}")
    print("")

def getChoice(choices, choice, freeze = False):
    if type(choice) is int and choice < len(choices): return choices[choice]
    if freeze:
        print("\033[A\033[A")
    else:
        print("\033[A\033[A")
        print("Please, try again.")
        print("")
    for char in str(choice):
        print(" ", end = "", flush = True)
    print(">>", end = " ", flush = True)
    return getChoice(choices, int(input("")), True)

def formatChoice(string, choice):
    print("\033[A\033[A")
    print(string, choice)

def initPlayer():
    choices = ["Retry", "Continue"]
    playerName = getPlayerName()
    if playerName == "Joe": joeDetected()
    print("")
    diffLevel = getDiffLevel()
    print("")
    fauxType(f"{playerName}, you selected {diffLevel}. Would you like to continue?", True)
    printChoices(choices)
    print(">>", end = " ", flush = True)
    choice = getChoice(choices, int(input("")))
    formatChoice(">>", choice)
    print("")
    if choice == "Retry": initPlayer()

print("")
fauxType("Welcome to findJoe.py", True)
print("")
fauxType("A special message or introduction goes here...", True)
print("")
initPlayer()