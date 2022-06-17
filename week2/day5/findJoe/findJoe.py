import time
import random
import sys

# Latest Version

class Player:
    def __init__( self ):
        self.name = ""
        self.difficulty = ""
        self.score = 0
        self.chances = 5
        self.guesses = []
        self.status = ""
    
    def incrementChances( self ):
        self.chances += 1
    
    def decrementChances( self ):
        self.chances -= 1
    
    def appendGuesses( self, guess ):
        self.guesses.append( guess )
    
    def reset( self ):
        self.score = 0
        self.chances = 5
        self.guesses = []
    
    def __str__( self ):
        return f"""
Name: { self.name }
Difficulty: { self.difficulty }
Score: { self.score }
Status: { self.status }
        """

player = Player()

class Board:
    def __init__( self ):
        self.template = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
        self.rows = [ "A", "B", "C", "D", "E"]
        self.columns = [ "1", "2", "3", "4", "5", ]
        self.coordinates = []
        self.roomList = []
        self.joeRooms = []
        self.rayleighRooms = []
    
    def getCoordinates( self ):
        for row in self.rows:
            for column in self.columns:
                self.coordinates.append( f"{ row }{ column }" )
    
    def getRoomList( self ):
        for row in self.rows:
            for column in self.columns:
                self.roomList.append( f"{ row }{ column }" )
    
    def setRooms( self, difficulty ):
        match difficulty:
            case "Easy":
                for i in range( 5 ):
                    self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
            case "Normal":
                for i in range( 3 ):
                    self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1) ) )
            case "Hard":
                self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
        self.rayleighRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
    
    def setTemplate( self, string ):
        self.template = string

    def reset( self ):
        self.template = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
        self.roomList = []
        self.joeRooms = []
        self.rayleighRooms = []
    def __str__( self ):
        return f"{ self.template }"

board = Board()

class Break( Exception ):
    pass

def fauxType( string ):
    for char in string:
        print( char, end = "", flush = True )
        time.sleep( 0.025 )
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

def handleGuess():
    guess = input( "» " ).upper()
    if guess not in player.guesses:
        if guess in board.coordinates or guess[ ::-1 ] in board.coordinates:
            player.appendGuesses( guess )
            if guess in board.joeRooms or guess[ ::-1 ] in board.joeRooms:
                setTemplate( guess, "J" )
                return guess
            if guess in board.rayleighRooms or guess[ ::-1 ] in board.rayleighRooms:
                setTemplate( guess, "R" )
                return guess
            setTemplate( guess, "X" )
            return guess
        else:
            clearLastLine()
            getGuess()
    else:
        clearLastLine()
        getGuess()

def getGuess():
    guess = handleGuess()
    rePrintInput( guess )
    return guess

def setTemplate( guess, char = "X" ):
    spreadBoard = [ *board.template ]
    try:
        if int( guess[ 0 ] ):
            for row in board.rows:
                match guess[ 1 ]:
                    case row:
                        spreadBoard[ 48 + ( board.rows.index( guess[ 1 ] ) * 36 ) + ( board.columns.index( guess[ 0 ] ) * 6 ) ] = char
    except:
        for row in board.rows:
            match guess[ 0 ]:
                case row:
                    spreadBoard[ 48 + ( board.rows.index( guess[ 0 ] ) * 36 ) + ( board.columns.index( guess[ 1 ] ) * 6 ) ] = char
    board.setTemplate( "".join( spreadBoard ) )

def initBoard():
    board.getCoordinates()
    board.getRoomList()
    board.setRooms( player.difficulty )

def printIntro():
    print( "" )
    print( "\033[0;31m", end = "", flush = True )
    fauxType("Welcome to findJoe.py")
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    print( "\033[2;37m", end = "", flush = True )
    print( "\033[3;37m", end = "", flush = True )
    fauxType( "Oh, no! Our instructor Joe has gone missing..." )
    fauxType( "Will you help find him?" )
    print( "\033[0;37m", end = "", flush = True )

def initSettings():
    print( "" )
    print( "\033[0;37m", end = "", flush = True )
    print( "\033[1;37m", end = "", flush = True )
    fauxType( "Enter Name:" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    player.name = input( "» " ).lower( ).capitalize( )
    rePrintInput( player.name )
    if player.name == "Joe":
        exec( open( "instructor.py" ).read() )
        sys.exit()
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
    player.difficulty = getChoice( [ "Easy", "Normal", "Hard"] )
    print( "" )
    print( "\033[2;37m", end = "", flush = True )
    print( "\033[3;37m", end = "", flush = True )
    fauxType( f"{ player.name }, you have selected { player.difficulty }. Do you wish to continue?" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    playerChoice = getChoice( [ "Continue", "Back" ] )
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

def printGUI():
    print( "" )
    print( "\033[0;33m", end = "", flush = True )
    print( f"{ player.name }, you have { player.chances } chances remaining" )
    print( "\033[0;37m", end = "", flush = True )
    print( "" )
    print( board )
    print( "" )
    if player.guesses:
        if player.guesses[ -1 ] in board.joeRooms:
            print( f"Congratulations { player.name }! You found Joe!" )
        elif player.guesses[ -1 ] in board.rayleighRooms:
            print( f"Nice! You found Rayleigh! Bonus [+1] chance added" )
        else:
            if player.chances > 0:
                print( f"Hmm... Joe isn't there. Try again!" )
            else:
                print("Bummer! You're all out of chances...")

    else:
        print( f"Hint: Enter a coordinate" )

    print( "" )

def play():
    while player.chances > 0:
        printGUI()
        print( "\n\n\n" )
        clearLastLine( 4 )
        guess = getGuess()
        clearLastLine( 13 )
        try:
            if guess in board.joeRooms or guess[ ::-1 ] in board.joeRooms:
                player.score += player.chances * 100
                raise Break
            if guess in board.rayleighRooms or guess[ ::-1 ] in board.rayleighRooms:
                player.score += 250
                player.incrementChances()
        except Break:
            break
        except TypeError:
            pass
        player.decrementChances()
    printGUI()
    for guess in player.guesses:
        if guess in board.joeRooms:
            player.status = "Winner"
        else:
            player.status = "Loser"

def newGame():
    printIntro()
    initSettings()
    initBoard()
    printDirections()
    play()

newGame()

while True:
    clearLastLine( 1 )
    print( player )
    choice = getChoice( [ "Retry", "Change Player", "Quit" ] )
    match choice:
        case "Retry":
            clearLastLine( 22 )
            player.reset()
            board.reset()
            initBoard()
            play()
        case "Change Player":
            player.reset()
            board.reset()
            newGame()
        case "Quit":
            print( "" )
            fauxType( f"Thanks for playing { player.name }!" )
            print( "" )
            break
        case None:
            clearLastLine( 10 )