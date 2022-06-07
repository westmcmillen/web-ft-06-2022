import random
def play():
  number = random.randint(1, 10)
  chances = 5
  while chances > 0:
    guess = int(input("What's the number? "))
    if guess == number:
      print("You win!")
      break
    elif guess > number:
      print(f"{guess} is too high.")
      chances -= 1
      print(f"You have {chances} guesses left.")
    elif guess < number:
      print(f"{guess} is too low.")
      chances -= 1
      print(f"You have {chances} guesses left.")
play()

if input("Would you like to play again? (Y/N) ").lower() == "y":
  play()
else:
  print("Better luck next time!")