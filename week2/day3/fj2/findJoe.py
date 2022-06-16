import time
import random

rows = ["A", "B", "C", "D", "E"]
columns = ["1", "2", "3", "4", "5", ]
coordinates = []
board = ""
emptyLocations = []
joeLocations = []
rayleighLocations = []

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
    def clearGuesses(self):
        self.guesses = []
    def __str__(self):
        return f"""
Name: { self.name }
Difficulty: { self.difficulty }
Score: { self.score }
Chances: { self.chances }
Guesses: { self.guesses }
        """

player = Player()

def initBoard():
    board = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
    return board

def fauxType( string ):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    print( "" )

def printList( array ):
    for index, item in enumerate( array ):
        print( f"{ index + 1 }. { item }" )

def clearLastLine():
    print("\033[A\033[2K", end = "", flush = True)

def rePrintInput( value ):
    clearLastLine()
    print( f"» { value }" )

def handlePlayerChoice( array ):
    playerChoice = input( "» " ).lower().capitalize()
    try:
        playerChoice = int( playerChoice ) - 1
        if playerChoice >= 0 and playerChoice < len( array ):
            rePrintInput( array[ playerChoice ] )
            return array[ playerChoice ]
        else:
            clearLastLine()
            handlePlayerChoice( array )
    except:
        if playerChoice in array:
            rePrintInput( playerChoice )
            return playerChoice
        else:
            clearLastLine()
            handlePlayerChoice( array )

def getPlayerChoice( array ):
    printList( array )
    print( "" )
    playerChoice = handlePlayerChoice( array )
    return playerChoice

def initCoordinates():
    for row in rows:
        for column in columns:
            coordinates.append( f"{ row }{ column }" )
            emptyLocations.append( f"{ row }{ column }" )
    match player.difficulty:
        case "Easy":
            for i in range( 5 ):
                joeLocations.append( emptyLocations.pop( random.randint( 0, len( emptyLocations ) - 1 ) ) )
        case "Normal":
            for i in range( 3 ):
                joeLocations.append( emptyLocations.pop( random.randint( 0, len( emptyLocations ) - 1) ) )
        case "Hard":
            joeLocations.append( emptyLocations.pop( random.randint( 0, len( emptyLocations ) - 1 ) ) )
    rayleighLocations.append( emptyLocations.pop( random.randint( 0, len( emptyLocations ) - 1 ) ) )

def initSettings():
    print( "" )
    print( "\033[0;37m", end = "", flush = True )
    print( "\033[1;37m", end = "", flush = True )
    fauxType( "Enter Name:" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    player.name = input( "» " ).lower( ).capitalize( )
    rePrintInput( player.name )
    print( "" )
    print( "\033[2;37m", end = "", flush = True )
    print( "\033[3;37m", end = "", flush = True )
    fauxType( f"Hi, { player.name }" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    print( "\033[1;37m", end = "", flush = True )
    fauxType( "Select Difficulty:" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    player.difficulty = getPlayerChoice(["Easy", "Normal", "Hard"] )
    print( "" )
    print( "\033[2;37m", end = "", flush = True )
    print( "\033[3;37m", end = "", flush = True )
    fauxType( f"{ player.name }, you have selected { player.difficulty }. Do you wish to continue?" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    initCoordinates()
    playerChoice = getPlayerChoice( [ "Continue", "Back" ] )
    if playerChoice == "Back":
        initSettings()

def printDirections():
    print( "" )
    print( "\033[2;37m", end = "", flush = True )
    print( "\033[3;37m", end = "", flush = True )
    fauxType( "Where in Zoom is Joe?" )
    print( "" )
    fauxType( "He was last seen in a breakout room assigning unsolvable algorithms...") 
    fauxType( "Type in the coordinates to check a breakout room" )
    print( "" )
    print( "\033[0;37m", end = "", flush = True )
    print( "\033[3;31m", end = "", flush = True )
    print( "Example: A1, B2, Etc" )
    print( "\033[0;37m", end = "", flush = True )

def appendSpreadBoard( spreadBoard, playerGuess, char = "X" ):
    try:
        if int( playerGuess[ 0 ] ):
            playerGuess = playerGuess[ ::-1 ]
    except:
        pass
    finally:
        for row in rows:
            match playerGuess[ 0 ]:
                case row:
                    spreadBoard[ 48 + ( rows.index( playerGuess[ 0 ] ) * 36 ) + ( columns.index( playerGuess[ 1 ] ) * 6 ) ] = char

def handlePlayerGuess( spreadBoard, playerGuess ):
    if playerGuess in coordinates or playerGuess[ ::-1 ] in coordinates:
        player.appendGuesses( playerGuess )
        if playerGuess in joeLocations:
            appendSpreadBoard( spreadBoard, playerGuess, "J" )
            return playerGuess
        if playerGuess in rayleighLocations:
            appendSpreadBoard( spreadBoard, playerGuess, "R" )
            return playerGuess
        appendSpreadBoard( spreadBoard, playerGuess, "X" )
    else:
        clearLastLine()
        getPlayerGuess()

def getPlayerGuess(spreadBoard):
    playerGuess = input( "» " ).upper()
    rePrintInput( playerGuess )
    playerGuess = handlePlayerGuess( spreadBoard, playerGuess )
    return playerGuess

def playerFoundJoe():
    pass 

def playerFoundRayleigh():
    pass 

def getFeedback():
    pass

def printGUI(board):
    print( "\033[0;31m", end = "", flush = True )
    print( f"{ player.name }, you have { player.chances } chances remaining" )
    print( "\033[0;37m", end = "", flush = True )
    print("")
    print( board )

def clearGUI():
    for i in range( 10 ):
        clearLastLine()

def play(board):
    print( "" )
    while player.chances > 0:
        printGUI(board)
        spreadBoard = [ *board ]
        print( "" )
        playerGuess = getPlayerGuess(spreadBoard)
        player.decrementChances()
        board = "".join(spreadBoard)
        clearGUI()
    print( "" )
    printGUI( board )
    # Put this in a seperate function and write a clearing function
    playerChoice = getPlayerChoice( [ "Play Again", "New Game", "Quit" ] )
    match playerChoice:
        case "Play Again":
            player.clearGuesses()
            initCoordinates()
            clearGUI()
            initBoard()
            play(board)
        case "New Game":
            exec(board)
        case "Quit":
            fauxType( f"Thanks for playing, { player.name }!" )

def exec(board):
    initSettings()
    printDirections()
    play( board )

exec( board )

