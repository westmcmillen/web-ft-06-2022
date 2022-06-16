import time
import random

class Player:
    def __init__( self ):
        self.name = ""
        self.difficulty = "Easy"
        self.score = 0
        self.chances = 5
        self.guesses = []
    def handleChoice( self, array ):
        choice = input( "» " ).lower().capitalize()
        try:
            choice = int( choice ) - 1
            if choice >= 0 and choice < len( array ):
                rePrintInput( array[ choice ] )
                return array[ choice ]
            else:
                clearLastLine()
                self.handleChoice( array )
        except:
            if choice in array:
                rePrintInput( choice )
                return choice
            else:
                clearLastLine()
                self.handleChoice( array )
    def getChoice( self, array ):
        printList( array )
        print( "" )
        choice = self.handleChoice( array )
        return choice
    def handleGuess( self, coordinates, joeRooms, rayleighRooms, function ):
        guess = input( "» " ).upper()
        if guess in coordinates or guess[ ::-1 ] in coordinates:
            player.appendGuesses( guess )
            if guess in joeRooms:
                function( guess, "J" )
                return guess
            if guess in rayleighRooms:
                function( guess, "R" )
                return guess
            function( guess, "X" )
        else:
            clearLastLine()
            self.getGuess()
    def getGuess( self, coordinates, joeRooms, rayleighRooms, function ):
        guess = self.handleGuess( coordinates, joeRooms, rayleighRooms, function )
        rePrintInput( guess )
        return guess
    def incrementChances( self ):
        self.chances += 1
    def decrementChances( self ):
        self.chances -= 1
    def appendGuesses( self, guess ):
        self.guesses.append( guess )
    def clearGuesses( self ):
        self.guesses = []
    def __str__( self ):
        return f"""
Name: { self.name }
Difficulty: { self.difficulty }
Score: { self.score }
Chances: { self.chances }
Guesses: { self.guesses }
        """

player = Player()

class Board:
    def __init__(self):
        self.template = f"""\033[A
[ * ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
[ A ] [   ] [   ] [   ] [   ] [   ]
[ B ] [   ] [   ] [   ] [   ] [   ]
[ C ] [   ] [   ] [   ] [   ] [   ]
[ D ] [   ] [   ] [   ] [   ] [   ]
[ E ] [   ] [   ] [   ] [   ] [   ]
\033[A"""
        self.rows = ["A", "B", "C", "D", "E"]
        self.columns = ["1", "2", "3", "4", "5", ]
        self.coordinates = []
        self.roomList = []
        self.joeRooms = []
        self.rayleighRooms = []
    def getCoordinates(self):
        for self.row in self.rows:
            for self.column in self.columns:
                self.coordinates.append( f"{ self.row }{ self.column }" )
    def getRoomList(self):
        for self.row in self.rows:
            for self.column in self.columns:
                self.roomList.append( f"{ self.row }{ self.column }" )
    def setRooms(self):
        match player.difficulty:
            case "Easy":
                for i in range( 5 ):
                    self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
            case "Normal":
                for i in range( 3 ):
                    self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1) ) )
            case "Hard":
                self.joeRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
        self.rayleighRooms.append( self.roomList.pop( random.randint( 0, len( self.roomList ) - 1 ) ) )
    def setTemplate(self, string):
        self.template = string
    def appendTemplate( self, guess, char = "X" ):
        spreadBoard = [*self.template]
        try:
            if int( guess[ 0 ] ):
                guess = guess[ ::-1 ]
        except:
            pass
        finally:
            for row in self.rows:
                match guess[ 0 ]:
                    case row:
                        spreadBoard[ 48 + ( self.rows.index( guess[ 0 ] ) * 36 ) + ( self.columns.index( guess[ 1 ] ) * 6 ) ] = char
        self.setTemplate("".join(spreadBoard))
    def reset(self):
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
    def __str__(self):
        return f"{ self.template }"

board = Board()

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

board.getCoordinates()
board.getRoomList()
board.setRooms()
guess = player.getGuess(board.coordinates, board.joeRooms, board.rayleighRooms, board.appendTemplate)
# board.appendTemplate(guess)
print(board)