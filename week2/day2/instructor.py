import time

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

def handleChoice( array, loop = False):
    while loop:
        choice = input( "» " ).lower().capitalize()
        try:
            choice = int( choice ) - 1
            if choice >= 0 and choice < len( array ):
                rePrintInput( array[ choice ] )
                return array.pop(choice)
            else:
                clearLastLine()
                handleChoice( array )
        except:
            if choice in array:
                rePrintInput( choice )
                return array.pop(array.index(choice))
            else:
                clearLastLine()
                handleChoice( array )
        if len(array) == 0:
            break

def getChoice( array, loop = False ):
    printList( array )
    print( "" )
    choice = handleChoice( array, loop )
    return choice

def printIntro():
    print("")
    print("\033[0;31m", end = "", flush = True)
    fauxType("Welcome to instructor.py")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("You are the instrctor of this cohort")
    fauxType("You have many students...")
    print( "\033[0;37m", end = "", flush = True )
    
def printContinue():
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("A student has sent you their code to review!")
    fauxType("Would you like to review it now?")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print( "\033[1;37m", end = "", flush = True )
    fauxType( "Enter Choice:" )
    print( "\033[0;37m", end = "", flush = True )
    print("")
    choice = getChoice(["Continue", "Quit"])
    return choice

def printCode():
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("Great! Get ready to be impressed...")
    print("\033[0;37m", end = "", flush = True)
    print("\033[2;37m", end = "", flush = True)
    print("""
    def isPalindrome(word):
        return word.lower == "".join([*word[::-1]])
    """)
    print("\033[0;37m", end = "", flush = True)

def reviewCode():
    print("")
    print("\033[2;37m", end = "", flush = True)
    print("\033[3;37m", end = "", flush = True)
    fauxType("How would you like to respond?")
    print("\033[0;37m", end = "", flush = True)
    print("")
    print( "\033[1;37m", end = "", flush = True )
    fauxType( "Enter Response:" )
    print( "\033[0;37m", end = "", flush = True )
    print("")
    choice = getChoice(["That's one way to do it", "There's some truthyness in there"], True)
    return choice

while True:
    printIntro()
    if printContinue() == "Quit":
        print("")
        print("\033[2;37m", end = "", flush = True)
        print("\033[3;37m", end = "", flush = True)
        fauxType("Thanks for playing Joe!")
        print("\033[0;37m", end = "", flush = True)
        print("")
        break
    printCode()
    reviewCode()
    
    
    
    