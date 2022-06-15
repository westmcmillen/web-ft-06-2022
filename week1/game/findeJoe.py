import time

class Player:
    def __init__(self):
        self.name = None
        self.level = None

class Choice:
    def __init__(self, choices: list):
        self.choices = choices
    def printChoices(self):
        for index, choice in enumerate(self.choices):
            print(f"{ index }. { choice }")
    def getChoice(self):
        print(">>", end = " ", flush = True)
        userChoice = input("")
        if type(int(userChoice)) is int and int(userChoice) < len(self.choices):
            for i in range(len(self.choices)):
                print("\033[A\033[A")
            print("\033[A\033[A")
            print(f">> { self.choices[int(userChoice)] }")
            return userChoice
        else:
            print("\033[A\033[A")
            for char in range(50):
                print(" ", end = "", flush = True)
            print("\033[A\033[A")
            self.getChoice()

def fauxType(string: str, enter: bool = True):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    if enter:
        print("")

def initPlayer():
    player = Player()
    fauxType("Enter your name:")
    print(">>", end = " ", flush = True)
    player.name = input("")
    fauxType("Select a difficulty level:")
    player.level = Choice(["Easy", "Normal", "Hard"]).getChoice()
    
initPlayer()