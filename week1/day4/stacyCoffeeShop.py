orders = []

def getSize():
  sizes = ["Tall", "Grande", "Venti"]
  choice =  input(f"""

Choose a size:

{
    "".join(f"{index}. {size} " for index, size in enumerate(sizes) )
}

What size would you like? """)
  print("\033[A\033[A")
  print(f"What size would you like? {sizes[int(choice)]}")
  if choice not in ("0", "1", "2"):
    print("That's not a size. Please try again!")
    getSize()
  if choice.lower() == "tall": choice = 0
  if choice.lower() == "grande": choice = 1
  if choice.lower() == "venti": choice = 2
  return int(choice)

def getRoast():
  roasts = ["Blonde", "House", "French"]
  choice =  input(f"""

Choose a roast:

{
    "".join(f"{index}. {roast} " for index, roast in enumerate(roasts) )
}

What roast would you like? """)
  print("\033[A\033[A")
  print(f"What roast would you like? {roasts[int(choice)]}")
  if choice not in ("0", "1", "2"):
    print("That's not a roast. Please try again!")
    getRoast()
  if choice.lower() == "small": choice = 0
  if choice.lower() == "medium": choice = 1
  if choice.lower() == "large": choice = 2
  return int(choice)

# The function getGrams(size, roast) should contain if statements
# comparing all possible combinations. It takes in two arguments
# that are stored in a tuple. It is then compared to a tuple
# of each possible combination

def getGrams(size, roast):
  if (size, roast) == (0, 0): return 22 * 15
  if (size, roast) == (2, 1): return 30 * 16

def takeOrder():
  size, roast = getSize(), getRoast()
  orders.append({
    "size": size,
    "roast": roast,
    "grams": getGrams(size, roast)
  })

while input(f"""
{"Welcome to Stacy's Coffee Shop!" if not len(orders) else "Got it..."}

Choose an action: 

0. No
1. Yes

Would you like to {"place an" if not len(orders) else "add to your"} order? """).lower() in ("y", "yes", "1"):
  print("\033[A\033[A")
  print(f"""Would you like to {"place an" if not len(orders) else "add to your"} order? Yes""")
  takeOrder()

if len(orders):
  print(orders)
else:
  print("\n")
  print("Thanks anyway!")