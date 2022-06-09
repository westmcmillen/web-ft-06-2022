array = [12, 3, 1, 2, -6, 5, -8, 6]
target = 0

def getThreeSum(array, target):
  threeSum = []
  array.sort()
  for index, value in enumerate(array):
    a, z = index + 1, len(array) - 1
    while a < z:
      if array[a] + value + array[z] == target: threeSum.append([array[a], value, array[z]])
      if array[a] + value + array[z] > target: z -= 1
      else: a += 1
  return threeSum

print(getThreeSum(array, target))