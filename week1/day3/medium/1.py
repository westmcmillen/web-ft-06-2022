array1 = [2, 4, 5]
array2 = [2, 3, 6]
array3 = []

i = 0
while i < len(array1):
  array3.append(array1[i] * array2[i])
  i += 1

print(array3)