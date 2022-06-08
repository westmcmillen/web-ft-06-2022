# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]

for number in numbers:
  print(number * number)

# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]

for item in list1:
  if item == "": list1.remove(item)
print(list1)

# Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]

list2[2][2].append(7000)
print(list2)

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]

list3[list3.index(20)] = 200
print(list3)

# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]

for item in list4:
  if item == 20: list4.remove(item)
print(list4)
