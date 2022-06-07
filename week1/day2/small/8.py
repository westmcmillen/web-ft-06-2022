start = int(input("Starting Number: "))
end = int(input("Starting Number: "))

if start > end:
  print("That is an invalid range. Please try again.")
else:
  for i in range(start, end + 1):
    print(i)