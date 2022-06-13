import time
import random

player = {}

def fauxType(string, enter = False, delay = 0.03125):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(delay)
    if enter: print("")

def getPlayerName():
    fauxType("ENTER YOUR NAME: ")
    player["name"] = input("").lower().capitalize()
    print("\033[A\033[A")
    print(f"""ENTER YOUR NAME: {player["name"]}""")

def joeDetected():
    print("")
    print("* * * ACCESS DENIED * * *")
    print("")
    fauxType("Joe, you cannot find yourself!", True)
    fauxType("This game is not meant for you.", True)
    print("")
    fauxType("You're being re-directed to a breakout room...", True)
    print("")
    for i in range(2):
        fauxType("Loading... Please Wait...", False, 0.0625)
        print("")
        print("\033[A\033[A")
        for char in "LOADING... PLEASE WAIT...":
            print(" ", end = "", flush = True)
        print("")
        print("\033[A\033[A")
    return exec(open("instructor.py").read())

def getChoice(options, choice):
    if choice < len(options): return options[choice]
    print("TRY AGAIN: ", end = "", flush = True)
    return getChoice(options, int(input("")))

def getPlayerLevel():
    options = ["Easy", "Normal", "Hard"]
    for index, option in enumerate(options):
        print(f"{index}. {option}")
    print("")
    fauxType("SELECT A LEVEL: ")
    player["level"] = getChoice(options, int(input("")))
    print("\033[A\033[A")
    print(f"""SELECT A LEVEL: {player["level"]}""")

def initPlayer():
    options = ["Try Again", "Continue"]
    print("")
    getPlayerName()
    if player["name"] == "Joe": return joeDetected()
    print("")
    getPlayerLevel()
    print("")
    fauxType(f"""{player["name"]}, you have selected {player["level"]}. Would you like to continue? """, True)
    print("")
    for index, option in enumerate(options):
        print(f"{index}. {option}")
    print("")
    fauxType("SELECT AN ACTION: ")
    choice = getChoice(options, int(input("")))
    if choice == "Try Again": initPlayer()

def createRow(level, Joe):
    row = []
    match level:
        case "2": level = 30
        case "1": level = 20
        case "0": level = 10

print("")
fauxType("Welcome to findJoe.py.", True)
initPlayer()