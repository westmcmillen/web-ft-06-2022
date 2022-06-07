number = int(input("How big is the square? "))

for i in range(number):
  if i == 0:
    print("*" * number)
  else:
    print(f"* {' ' * (number - 2)} *")