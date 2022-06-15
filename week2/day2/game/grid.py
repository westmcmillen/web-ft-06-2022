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

player = Player()

board = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
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
print(joes)
print(rayleighs)
while player.chances > 0:
    print(board)
    board = [*board]
    guess = input("» ").upper()