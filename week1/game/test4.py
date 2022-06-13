import time

player = {}

def fauxType(string: str, enter: bool = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    if enter: print("")

def getPlayerChoice(string: str, choices: list, freeze = False):
    fauxType(string)
    print("")
    for index, choice in enumerate(choices):
        print(f"{index}. {choice}")
    print("")
    print(">>", end = " ", flush = False)
    choice = int(input(""))
    if type(choice) is int and choice < len(choices): 
        print("\033[A\033[A")
        print(">>", choices[choice])
        return choices[choice]
    if freeze: print("\033[A\033[A")    
    else: 
        print("\033[A\033[A")
        print("Please, try again.")
    getPlayerChoice(string, choices, True)

def setPlayerName():
    fauxType("ENTER YOUR NAME:")
    print("")
    print(">>", end = " ", flush = True)
    player["name"] = input("").lower().capitalize()
    print("\033[A\033[A")
    print(">>", player["name"])

def setDiffLevel():
    player["diffLevel"] = getPlayerChoice("SELECT DIFFICULTY:", ["Easy", "Medium", "Hard"])

def initPlayer():
    setPlayerName()
    print("")
    setDiffLevel()
    print("")
    getPlayerChoice(f"""{player["name"]}, you have selected {player["diffLevel"]}. Do you want to continue?""", ["Back", "Continue"])


getPlayerChoice(
    "This is a choice function", 
    [
        "choice 1",
        "choice 2"
    ]
)

# print("")
# fauxType("Welcome to findJoe.py")
# print("")
# initPlayer()