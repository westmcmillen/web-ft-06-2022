import math

def getFactorialShort(number):
  return math.factorial(number)

print(getFactorialShort(5))

def getFactorialLong(number):
  factorial = 1
  for i in range(1, number + 1):
    factorial = factorial * i
  return factorial

print(getFactorialLong(5))

def getFactorialRecursion(n):
  if n == 0: return 1
  return n * getFactorialRecursion(n-1)

print(getFactorialRecursion(5))