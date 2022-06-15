import time

def printOptions(options: list):
    for index, option in enumerate(options):
        print(f"{ index }. { option }")

def clearOptions(options: list):
    for index, option in enumerate(options):
        print("\033[A\033[A")

def getChoice(options: list):
    print(">>", end = " ", flush = True)
    choice = input("")
    handleChoice(choice, options)
    print("\033[A\033[A")
    print(f">> { choice }")

def handleChoice(choice, options):
    try:
        choice = int(choice)
        return choice
    except:
        if choice in options:
            return options.index(choice)
        else:
            print("\033[A\033[A")
            print("   ", end = "", flush = True)
            for char in choice:
                print(" ", end = "", flush = True)
            print("\033[A")
            getChoice(options)


def exitGame():
    options = ["Exit", "Continue"]
    printOptions(options)
    getChoice(options)

exitGame()