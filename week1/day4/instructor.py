print("Welcome to instructor.py")
name = input("What is your name? ")
print("\n")
print(f"Hello, {name}")
print("You are the instructor of this cohort")
print("You have many students...")

actions = [
  "Tell them 'Great job!'",
  "Tell them 'You're awesome!'",
  "Tell them 'This code is a masterpiece!'",
  "Tell them 'You get 100 gold stars!'"
]

def choose():
  choices = actions
  while len(choices) > 0:
    choice = choices[input("What would you like to do? ")]
    choices.remove(choice)
  print(choices)

def printActions():
  print("-" * 50)
  for action in actions:
    print(action)
  print("-" * 50)

def play():
    print("One of your student's just sent you some code to review!")
    print("\n")
    print("Choose a response")
    printActions()
    choose()

def playAgain():
    print("Another one of your student's just sent you some code to review!")
    print("\n")
    print("Choose a response")
    printActions()
    choose()
play()

while input("Would you like to review another student's code? (Y/N)").lower() == "y":
  playAgain()

print(f"Thanks for playing {name}! No one can defeat you!")