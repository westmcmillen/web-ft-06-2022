# import time

# def fauxType(string, delay = 0.03125):
#   for letter in string:
#     time.sleep(delay)
#     print(letter, end = "", flush = True)

# def newLine():
#   print("")

# fauxType("Welcome to instructor.py")
# newLine()
# fauxType("Enter your name: ")
# playerName = input("").lower().capitalize()
# newLine()
# fauxType(f"Hi, {playerName}. You are the instructor of this cohort.")
# newLine()
# fauxType("You have many students...")
# newLine()
# fauxType("One student has sent you their code to review. ")
# newLine()
# fauxType("Would you like to review their code? ")

# play = input("").lower()
# if play != "yes": fauxType("Let's review it anyways...")
# else: fauxType("Great! Get ready to be impressed...")
# newLine()
# print("""
# def isPalindrome(word):
#   return word.lower == "".join([*word[::-1]])
# """)
# fauxType("Choose a response: ")
# newLine()
# newLine()
# responses = [
#   "You're awesome!",
#   "Great job!",
#   "You get 100 gold stars"
# ]
# for index, response in enumerate(responses):
#   print(f"{index}. {response}")
# newLine()

# fauxType("What is your response? ")
# response = int(input(""))

# responses.remove(responses[response])
# print("\033[A\033[A")
# print("What is your response? ", end = "", flush = True)
# fauxType("BREAK THEIR CODE! ", 0.1875)
# fauxType("MU-HA-HA-HA!!!", 0.0625)
# newLine()
# print(f"""
# Traceback (most recent call last):
# File "/Users/{playerName}/web-ft-06-2022/instructor.py", line every-line, in <module>
# all-modules("You have successfully destoyed your student's code!)
# NameError: name '{playerName}Loses' is not defined
# """)

import time

playerName = "Joe"
responses = [
  "You're awesome!",
  "Great job!",
  "You get 100 gold stars"
]
studentsRemaining = len(responses)
count = 0

def fauxType(string, delay = 0.03125):
  for letter in string:
    time.sleep(delay)
    print(letter, end = "", flush = True)

def newLine():
  print("")

def welcome():
  fauxType("Welcome to instructor.py")
  newLine()
  fauxType(f"Hi, {playerName}. You are the instructor of this cohort.")
  newLine()
  fauxType("You have many students...")
  newLine()

def play():
  if count == 0: fauxType("One student has sent you their code to review. ")
  else: fauxType("Another student has sent you their code to review. ")
  newLine()
  fauxType("Would you like to review their code? ")
  play = input("").lower()
  if play != "yes": fauxType("Let's review it anyways...")
  else: fauxType("Great! Get ready to be impressed...")
  newLine()
  print("""
  def isPalindrome(word):
    return word.lower == "".join([*word[::-1]])
  """)
  count = count + 1

def respond():
  fauxType("Choose a response: ")
  newLine()
  newLine()
  for index, response in enumerate(responses):
    print(f"{index}. {response}")
  newLine()
  fauxType("What is your response? ")
  response = int(input(""))
  responses.remove(responses[response])
  print("\033[A\033[A")
  print("What is your response? ", end = "", flush = True)
  fauxType("BREAK THEIR CODE! ", 0.1875)
  fauxType("MU-HA-HA-HA!!!", 0.0625)
  newLine()
  print(f"""
  Traceback (most recent call last):
  File "/Users/{playerName}/web-ft-06-2022/instructor.py", line every-line, in <module>
  all-modules("You have successfully destoyed your student's code!)
  NameError: name '{playerName}Loses' is not defined
  """)

while len(responses) > 0:
  if count == 0:
    welcome()
    play()
    respond()
  play()
  respond()

fauxType(f"Congradulations {playerName}. You have defeated all your students!")