import time

class Instrctor:
    def __init__(self):
        self.responses = [
            "That's one way of doing it...",
            "There is some truthiness in there"
        ]
    def reset(self):
        self.responses = [
            "That's one way of doing it...",
            "There is some truthiness in there"
        ]

joe = Instrctor()

def fauxType( string ):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    print( "" )

def printList( array ):
    for index, item in enumerate( array ):
        print( f"{ index + 1 }. { item }" )

def clearLastLine(repeat = 1):
    print(f"\033[{ repeat }A\033[0J", end = "", flush = True)

def rePrintInput( value ):
    clearLastLine()
    print( f"» { value }" )

def handleChoice( array ):
    choice = input( "» " ).lower().capitalize()
    try:
        choice = int( choice ) - 1
        if choice >= 0 and choice < len( array ):
            rePrintInput( array[ choice ] )
            return array[ choice ]
        else:
            clearLastLine()
            handleChoice( array )
    except:
        if choice in array:
            rePrintInput( choice )
            return choice
        else:
            clearLastLine()
            handleChoice( array )

def getChoice( array ):
    printList( array )
    print( "" )
    choice = handleChoice( array )
    return choice

print("")
print("* * * * * ACCESS DENIED * * * * *")
print("")
print("\033[2;37m", end = "", flush = True)
print("\033[3;37m", end = "", flush = True)
print("This game is not meant for you...")
print("Please wait while you are redirected")
print("\033[0;37m", end = "", flush = True)
print("")
for i in range(1):
    for char in "Loading, please wait...":
        print(char, end = "", flush = True)
        time.sleep(0.1)
    print("")
    time.sleep(0.25)
    clearLastLine(1)
    time.sleep(0.25)

print("\033[0;31m", end = "", flush = True)
fauxType("Welcome to instructor.py")
print("\033[0;37m", end = "", flush = True)
print("")
print("\033[2;37m", end = "", flush = True)
print("\033[3;37m", end = "", flush = True)
fauxType("You are the instrctor of this cohort")
fauxType("You have many students...")
print( "\033[0;37m", end = "", flush = True )

while True:
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("One of your student has sent you their code to review!")
    fauxType("Would you like to review it now?")
    print("\033[0;37m", end = "", flush = True)

    print("")
    choice = getChoice(["Continue", "Quit"])
    if choice == "Quit":
        break
    print("\033[2;37m", end = "", flush = True)
    print("")
    print("\033[3;37m", end = "", flush = True)
    fauxType("Great! Get ready to be impressed...")
    print("\033[0;37m", end = "", flush = True)
    print("\033[2;37m", end = "", flush = True)
    fauxType("""
    def isPalindrome(word):
        return word.lower == "".join([*word[::-1]])
    """)
    print("\033[0;37m", end = "", flush = True)
    print("\033[1;37m", end = "", flush = True)
    print("Select Response")
    print("\033[0;37m", end = "", flush = True)
    print("")
    choice = getChoice(joe.responses)
    joe.responses.pop(joe.responses.index(choice))

    print("")
    print("\033[0;33m", end = "", flush = True)
    fauxType("Nice one!")
    print("\033[0;37m", end = "", flush = True)

    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("Another student has sent you their code to review!")
    fauxType("Would you like to review it now?")
    print("\033[0;37m", end = "", flush = True)

    print("")
    choice = getChoice(["Continue", "Quit"])
    if choice == "Quit":
        break
    print("\033[2;37m", end = "", flush = True)
    print("")
    print("\033[3;37m", end = "", flush = True)
    fauxType("Great! Get ready to be impressed...")
    print("\033[0;37m", end = "", flush = True)
    print("\033[2;37m", end = "", flush = True)
    fauxType("""
    def getFactorial(n):
    if n == 0: return 1
    return n * getFactorialn(n - 1)
    """)
    print("\033[0;37m", end = "", flush = True)
    print("\033[1;37m", end = "", flush = True)
    print("Select Response")
    print("\033[0;37m", end = "", flush = True)
    print("")
    choice = getChoice(joe.responses)
    joe.responses.pop(joe.responses.index(choice))

    print("")
    print("\033[0;33m", end = "", flush = True)
    fauxType("Great response!")
    print("\033[0;37m", end = "", flush = True)

    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("Are you ready to assign an alorithm?")
    print("\033[0;37m", end = "", flush = True)

    print("")
    print("\033[1;37m", end = "", flush = True)
    print("Select Response")
    print("\033[0;37m", end = "", flush = True)
    print("")
    choice = getChoice(["Assign Algorithm"])

    print("")
    print("\033[0;33m", end = "", flush = True)
    print("Congratulations! You win!")
    print("You have successfully broke your student's code!")
    print("\033[0;37m", end = "", flush = True)

    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    print(f"""
    Traceback (most recent call last):
    File "/Users/Student/web-ft-06-2022/instructor.py", line every-line, in <module>
    all-modules("You have successfully broke your student's code!)
    NameError: name 'JoeLoses' is not defined
    """)
    print("\033[0;37m", end = "", flush = True)

    choice = getChoice(["Play Again", "Quit"])
    if choice == "Quit":
        break
    joe.reset()

print("")
fauxType("Thanks for playing!")