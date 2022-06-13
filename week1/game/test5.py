import time

def fauxType(string: str, enter: bool = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    if enter: print("")

def getPlayerInput(string: str, choices: list, freeze = False):
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
    getPlayerInput(string, choices, True)

getPlayerInput(
    "This is the getPlayerInput function.",
    ["Back", "Continue"]
)