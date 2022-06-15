import time
import random

# define player class
class Player:
    def __init__(self):
        self.name = None
        self.difficulty = None
        self.guesses = []
        self.score = 5
    def subtractScore(self):
        self.score -= 1
    def addGuess(self, guess):
        self.guesses.append(guess)

# emulate typing
def fauxType(string, done = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.0125)
    if done:
        print("")

# format the console after a user enter their input
def formatInput(value):
    print("\033[A\033[A")
    print(f"» { value }")
    print(" ")

# print the given options
def printOptions(options):
    print(" ")
    for index, option in enumerate(options):
        print(f"{ index + 1 }. { option }")
    print(" ")

# get the correct option from the user's input or handle error
def getChoice(options):
    choice = input("» ").lower().capitalize()
    try:
        choice = int(choice) - 1
        if choice >= 0 and choice < len(options):
            formatInput(options[choice])
            return options[choice]
        else:
            print("\033[A\033[A")
            getChoice(options)
    except:
        try:
            options.index(choice)
            formatInput(choice)
            return choice
        except:
            print("\033[A\033[A")
            getChoice(options)

# print the directions and promt the user for their input
def promptInput(options):
    printOptions(options)
    return getChoice(options)

# inittialize the player's settings
def initSettings():
    fauxType("Enter your name:")
    player.name = input("» ").lower().capitalize()
    formatInput(player.name)
    fauxType(f"Hi, { player.name }. Please select a difficulty:")
    player.difficulty = promptInput(["Easy", "Hard"])
    fauxType(f"{ player.name }, you have selected { player.difficulty }. Do you wish to continue?")
    if promptInput(["Back", "Continue"]) == "Back":
        initSettings()

# print the directions
def printDirections():
    fauxType("Where in the Zoom is Joe?")
    print("")
    fauxType("He was last seen in a breakout room assigning unsolvable algorithms...")
    fauxType("Enter the coordinates to check a breakout room. Example: A1, 2B, etc")
    print("")

# =========================================================
# GAME START
# =========================================================
print(" ")
fauxType("Welcome to findJoe.py")
print(" ")
fauxType("Oh, no! Our instructor Joe has gone missing...")
fauxType("Will you help find him?")
print(" ")
player = Player()
initSettings()
printDirections()
# =========================================================
# GAME END
# =========================================================

# print("=" * 47)
# print(f"[ Guesses Remaining: { 5 } ] | [ Hint: { 'Guess More' } ]")
# print("=" * 47)
board = f"""
[   ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ]
[ A ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ F ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
[ G ] [   ] [   ] [   ] [   ] [   ] [   ] [   ]
"""
letters = ["A", "B", "C", "D", "E", "F", "G", ]
numbers = ["1", "2", "3", "4", "5", "6", "7", ]
coordinates = []
for letter in letters:
    for number in numbers:
        string = f"{ letter }{ number }"
        coordinates.append(string)
joeCoordinates = coordinates[random.randint(0, len(coordinates) - 1)]
print(joeCoordinates)
while player.score > 0:
    print(board)
    board = [*board]
    guess = input("» ").upper()
    formatInput(guess)
    print(joeCoordinates)
    if guess in coordinates:
        if guess == joeCoordinates:
            for index, letter in enumerate(letters):
                match guess[0]:
                    case "A":
                        board[57 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "B":
                        board[63 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "C":
                        board[69 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "D":
                        board[75 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "E":
                        board[81 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "F":
                        board[87 + (coordinates.index(guess) * 6)] = "J"
                        break
                    case "G":
                        board[93 + (coordinates.index(guess) * 6)] = "J"
                        break
            break
        else:
            for index, letter in enumerate(letters):
                match guess[0]:
                    case "A":
                        board[57 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "B":
                        board[63 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "C":
                        board[69 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "D":
                        board[75 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "E":
                        board[81 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "F":
                        board[87 + (coordinates.index(guess) * 6)] = "x"
                        break
                    case "G":
                        board[93 + (coordinates.index(guess) * 6)] = "x"
                        break
    board = "".join(board)
    player.subtractScore()

if player.score > 0:
    print("HOORAY! YOU FOUND JOE!")
    print("Unfortunatley, Joe has assigned you an alorithm too")
    print("You lose...")
print(f"Joe: 1 | { player.name }: 0")
else:
    print("YOU LOSE!")
    print(f"You had {player.score } chances remaining. Your score is { player.score * 100 }")
    print("Joe has closed the chat...")