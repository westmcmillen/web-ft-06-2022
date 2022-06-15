class Choice:
    def __init__(self, options):
        self.options = options
    def printOptions(self):
        for index, option in enumerate(self.options):
            print(f"{ index }. { option }")
    def eraseOptions(self):
        for index, option in enumerate(self.options):
            print("\033[A\033[A")
        print("\033[A\033[A")
    def getChoice(self):
        print(">>", end = " ", flush = True)
        choice = input("")
        try:
            choice = int(choice)
            self.eraseOptions()
            return choice
        except:
            if choice in self.options:
                self.eraseOptions()
                return self.options.index(choice)
            else:
                print("\033[A\033[A")
                print("   ", end = "", flush = True)
                for char in choice:
                    print(" ", end = "", flush = True)
                print("\033[A")
                self.getChoice()

def initPlayer():
    choice = Choice(["Exit", "Continue"])
    choice.printOptions()
    choice.getChoice()

initPlayer()