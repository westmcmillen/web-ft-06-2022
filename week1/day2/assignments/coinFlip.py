import random

def flipCoin():
  print("You flipped a coin!")
  if random.randint(0, 1) == 1:
    print("It is heads!")
  else:
    print("It is tails!")

flipCoin()