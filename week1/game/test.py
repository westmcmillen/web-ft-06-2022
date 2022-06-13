import time
import random

player = {}

def fauxType(string: str, enter: bool = False):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    if enter: print("")

def printChoices(choices):
    print("")
    for index, option in enumerate(choices):
        print(f"{index}. {option}")
    print("")

def getChoice(choices: list, choice: int, freeze: bool = False):
    if type(choice) is int and choice < len(choices): return choices[choice]
    if not freeze: 
        print("\033[A\033[A")
        print("Please, try again.")
        print("")
    else: print("\033[A\033[A")
    print(">>", end = " ", flush = True)
    return getChoice(choices, int(input("")), True)

def formatChoice(choice: str):
    print("\033[A\033[A")
    print(">>", choice)

def promptChoice(choices):
    print(">>", end = " ", flush = True)
    choice = getChoice(choices, int(input("")))
    formatChoice(choice)
    return choice

def getPlayerName():
    fauxType("Enter your name:", True)
    print(">>", end = " ", flush = True)
    player["name"] = input("").lower().capitalize()
    formatChoice(player["name"])

def getDiffLevel():
    choices = ["Easy", "Normal", "Hard"]
    fauxType("How difficult is it to find Joe?")
    print("")
    printChoices(choices)
    fauxType("Choose a difficulty level:", True)
    player["diffLevel"] = promptChoice(choices)

def initPlayer():
    choices = ["Retry", "Continue"]
    getPlayerName()
    print("")
    getDiffLevel()
    print("")
    fauxType(f"""{player["name"]}, you have selected {player["diffLevel"]}. Would like to continue?""", True)
    choice = promptChoice(choices)

print("")
fauxType("Welcome to findJoe.py", True)
print("")
initPlayer()