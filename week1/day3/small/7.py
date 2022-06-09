numbers = [1, 2, 3, 4, 5]
factoredNumbers = []

def factorNumbers(array, factor):
  for item in array:
    factoredNumbers.append(item * factor)
factorNumbers(numbers, 10)
print(factoredNumbers)