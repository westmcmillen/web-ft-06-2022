def getFactors(number):
  for i in range(1, number):
    if number % i == 0:
      print(i)

getFactors(int(input("Enter a number: ")))