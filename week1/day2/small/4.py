day = int(input("Day (0-6)? "))
days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

if day <= 6:
  print(days[day])
else:
  print("That's outside of the range. Please try again.")