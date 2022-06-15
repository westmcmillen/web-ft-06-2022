import time
import random

columns = ["A", "B", "C", "D", "E"]
rows = ["1", "2", "3", "4", "5", ]
board = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
coordinates = []
locations = []
joes = []
rayleighs = []

class Player:
    def __init__(self):
        self.name = ""
        self.difficulty = ""
        self.score = 0
        self.chances = 5
        self.guesses = []
    def incrementChances(self):
        self.chances += 1
    def decrementChances(self):
        self.chances -= 1
    def appendGuesses(self, guess):
        self.guesses.append(guess)
    def __str__(self):
        return f"""
Name: { self.name }
Difficulty: { self.difficulty }
Score: { self.score }
Chances: { self.chances }
Guesses: { self.guesses }
        """

def fauxType(string):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    print("")

def printList(array):
    for index, item in enumerate(array):
        print(f"{ index + 1 }. { item }")

def printInput(item):
    print("\033[A\033[2K", end = "", flush = True)
    print(f"» { item }")

def handleInput(array):
    choice = input("» ").lower().capitalize()
    try:
        choice = int(choice) - 1
        if choice >= 0 and choice < len(array):
            printInput(array[choice])
            return array[choice]
        else:
            print("\033[A\033[2K", end = "", flush = True)
            handleInput(array)
    except:
        if choice in array:
            printInput(choice)
            return choice
        else:
            print("\033[A\033[2K", end = "", flush = True)
            handleInput(array)

def getPlayerChoice(array):
    printList(array)
    print("")
    return handleInput(array)

def printIntro():
    print("")
    print("\033[0;31m", end = "", flush = True)
    fauxType("Welcome to findJoe.py")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("Oh, no! Our instructor Joe has gone missing...")
    fauxType("Will you help find him?")
    print("\033[0;37m", end = "", flush = True)

def initSettings():
    print("")
    print("\033[0;37m", end = "", flush = True)
    print("\033[1;37m", end = "", flush = True)
    fauxType("Enter Name:")
    print("\033[0;37m", end = "", flush = True)
    print("")
    player.name = input("» ").lower().capitalize()
    printInput(player.name)
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType(f"Hi, { player.name }")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print("\033[1;37m", end = "", flush = True)
    fauxType("Select Difficulty:")
    print("\033[0;37m", end = "", flush = True)
    print("")
    player.difficulty = getPlayerChoice(["Easy", "Normal", "Hard"])
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType(f"{ player.name }, you have selected { player.difficulty }. Do you wish to continue?")
    print("\033[0;37m", end = "", flush = True)
    print("")
    if getPlayerChoice(["Back", "Continue"]) == "Back":
        print("")
        initSettings()
    for column in columns:
        for row in rows:
            coordinates.append(f"{column}{row}")
            locations.append(f"{column}{row}")
    match player.difficulty:
        case "Easy":
            for i in range(5):
                joes.append(locations.pop(random.randint(0, len(locations) - 1)))
        case "Normal":
            for i in range(3):
                joes.append(locations.pop(random.randint(0, len(locations) - 1)))
        case "Hard":
            joes.append(locations.pop(random.randint(0, len(locations) - 1)))
    rayleighs.append(locations.pop(random.randint(0, len(locations) - 1)))

def printDirections():
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("Where in Zoom is Joe?")
    print("")
    fauxType("He was last seen in a breakout room assigning unsolvable algorithms...")
    fauxType("Type in the coordinates to check a breakout room")
    print("\033[0;37m", end = "", flush = True)

def printBoard():
    print("")
    print("\033[0;31m", end = "", flush = True)
    print("Example: A1, B2, Etc")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print("\033[0;33m", end = "", flush = True)
    print(f"{ player.name }, you have { player.chances } chances remaining")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print(board)
    print("")

def appendBoard(guess, char = "x"):
    try:
        if int(guess[0]):
            guess = guess[::-1]
    except:
        pass
    finally:
        for column in columns:
            match guess[0]:
                case column:
                    board[48 + (columns.index(guess[0]) * 36) + (rows.index(guess[1]) * 6)] = char
                    break

def handleGuess():
    guess = input("» ").upper()
    printInput(guess)
    if guess in coordinates or guess[::-1] in coordinates:
        player.appendGuesses(guess)
        if guess in joes or guess[::-1] in joes:
            appendBoard(guess, "J")
        elif guess in rayleighs or guess[::-1] in rayleighs:
            appendBoard(guess, "r")
        else:
            appendBoard(guess)
    else:
        print("\033[A\033[2K", end = "", flush = True)
        handleGuess()

def getPlayerGuess():
    return handleGuess()

def printJoeFound():
    fauxType(f"Congratulations, { player.name }! You found Joe!")
    if len(player.guesses) <= 2:
        fauxType(f"Wow, it only took you { len(player.guesses) } guess")
    else:
        fauxType(f"It took you { len(player.guesses) } guesses")

player = Player()

printIntro()
initSettings()
printDirections()
printBoard()
while player.chances > 0:
    board = [*board]
    guess = getPlayerGuess()
    board = "".join(board)
    for i in range(15):
        print("\033[A\033[2K", end = "", flush = True)
    printBoard()
    if player.guesses[-1] in joes:
        printJoeFound()
        break
    if player.guesses[-1] in rayleighs:
        print("Nice! you found Rayleigh! Bonus [+1] chance!")
        player.incrementChances()
    player.decrementChances()
print("")

