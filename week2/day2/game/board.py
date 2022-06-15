import time
import random

class Player:
    def __init__(self):
        self.name = "West"
        self.difficulty = "Easy"
        self.chances = 5
        self.guesses = []
    def addGuess(self, guess):
        self.guesses.append(guess)
    def incrementChances(self):
        self.chances += 1
    def decrementChances(self):
        self.chances -= 1

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

board = f"""\033[F
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[F"""

reference = f"""
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [ a ] [ b ] [ c ] [ d ] [ e ]
[ B ] [ f ] [ g ] [ h ] [ i ] [ j ]
[ C ] [ x ] [ l ] [ m ] [ n ] [ o ]
[ D ] [ p ] [ q ] [ r ] [ s ] [ t ]
[ E ] [ u ] [ v ] [ w ] [ x ] [ y ]
"""
# print([*reference].index("a"))
columns = ["A", "B", "C", "D", "E"]
rows = ["1", "2", "3", "4", "5", ]
coordinates = []
joes = []
rayleighs = []
for column in columns:
    for row in rows:
        coordinates.append(f"{column}{row}")
match player.difficulty:
    case "Easy":
        for i in range(5):
            joes.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))
        rayleighs.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))
    case "Normal":
        for i in range(3):
            joes.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))
        if random.randint(0, 1): 
            rayleighs.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))
    case "Hard":
        joes.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))
        if random.randint(0, 1) and randint(0, 1): 
            rayleighs.append(coordinates.pop(random.randint(0, len(coordinates) - 1)))

while player.chances > 0:
    print(f"{ player.name }, you have { player.chances } chances remaining!")
    print("=" * 35)
    print(board)
    print("=" * 35)
    board = [*board]
    guess = input("» ").upper()
    formatInput(guess)
    player.addGuess(guess)
    if guess in joes or guess[::-1] in joes:
        print("Great job! You found Joe!\n")
        break
    if guess in rayleighs or guess[::-1] in rayleighs:
        print("Nice! You found Rayleigh! [+1] chance(s) awarded!")
        print("")
        player.incrementChances()
    if guess in coordinates or guess[::-1] in coordinates:
        print("Sorry, Joe isn't in that room\n")
    board = "".join(board)
    player.decrementChances()

# if player.chances == 0:
#     print(f"{ player.name }, you have { player.chances } chances remaining!")
#     print("=" * 35)
#     print(board)
#     print("=" * 35)
#     print("")
#     print("Uh, oh! Joe has left the Zoom call")
#     print("You did not find him in time...")
#     print("")
#     print({ player.guesses })
#     print("Would you like to try again?")
# else:
#     print("Results:")
#     if len(player.guesses) == 1:
#         print(f"It only took you { len(player.guesses) } guess!")
#         print("Your list of guess(es):")
#     else:
#         print(f"It took you { len(player.guesses) } guesses!")
#         print("Your list of guesses:")
#     print(player.guesses)
#     print("")
#     print("Would you like to play again?")
