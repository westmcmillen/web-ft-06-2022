import time

class Player:
    def __init__(self):
        self.name = None
        self.difficulty = None
        self.score = 0
    def setName(self):
        fauxType("Enter your name:")
        print(">>", end = " ", flush = True)
        self.name = input("").lower().capitalize()
        print("\033[A\033[A")
        print(f">> { self.name }")
    def setDifficulty(self):
        self.difficulty = self.getUserInput("Choose a difficulty:", ["Easy", "Hard"])
    def getUserInput(self, string, options):
        fauxType(string)
        fauxType("Select an option from the list below:")
        print("-" * 37)
        for index, option in enumerate(options):
            print(f"{ index }. { option }")
        print("-" * 37)
        while True:
            print(">>", end = " ", flush = True)
            userInput = input("")
            try:
                userInput = int(userInput)
                if userInput < len(options):
                    print("\033[A\033[A")
                    print(f">> { options[userInput] }")
                    return options[userInput]
                else:
                    print("\033[A\033[A")
            except:
                userInput = userInput.lower().capitalize()
                if userInput in options:
                    print("\033[A\033[A")
                    print(f">> { userInput }")
                    return userInput
                else:
                    print("\033[A\033[A")

def fauxType(string, complete = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.0125)
    if complete:
        print("")
    
player = Player()
fauxType("Welcome to findJoe.py")
fauxType("Oh, no! Our instructor Joe has gone missing...")
fauxType("Will you help us find him?")
player.setName()
player.setDifficulty()
while player.getUserInput(f"{ player.name }, you have selected { player.difficulty }. Is that correct?", ["Back", "Confirm"]) == "Back":
    player.setName()
    player.setDifficulty()
fauxType("Hmm...")
fauxType("Where in the Zoom is Joe?")
fauxType("He was last seen in a breakout room assigning unsolvable algorithms...")
fauxType("Enter the coordinates to check a room")

print("""
[ _ ][ A ][ B ][ C ][ D ][ E ]
[ 1 ][   ][   ][   ][   ][   ]
[ 2 ][   ][   ][   ][   ][   ]
[ 3 ][   ][   ][   ][   ][   ]
[ 4 ][   ][   ][   ][   ][   ]
[ 5 ][   ][   ][   ][   ][   ]
[ 6 ][   ][   ][   ][   ][   ]
""")

player.getUserInput("Do you want to try again?", ["Quit", "Retry"])