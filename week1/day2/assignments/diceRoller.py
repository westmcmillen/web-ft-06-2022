import random

print("Let's roll a die!")

def rollDie():
  sides = int(input("How many sides should it have? (2-20): "))
  if sides < 2 or sides > 20:
    print("Sorry. Please enter a number between 2 and 20.")
    rollDie()
  else:
    print("It's rolling...")
    print(f"You have rolled a {random.randint(1, sides)}")

rollDie()