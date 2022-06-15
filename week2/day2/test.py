import time

def fauxType(string):
    for char in string:
        print(char, end = "", flush = True)
        time.sleep(0.025)
    print("")

def red(string):
    print(f"\033[0;31m { string } \033[0;37m")

def dim(string):
    print("\033[2;37m")
    string
    print("\033[0;37m")

def bold(string):
    print("\033[1;37m")
    string
    print("\033[0;37m")
    
red(fauxType("Hello, World"))
dim(fauxType("Hello, World"))
bold(fauxType("Hello, World"))