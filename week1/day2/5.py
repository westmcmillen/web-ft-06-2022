days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

def workSleep():
  day = int(input("Day (0-6)? "))
  print(days[day])
  
workSleep()