redShirtSpeeds = [5, 5, 3, 9, 2]
blueShirtSpeeds = [3, 6, 7, 2, 1]
fastest = True

# # Order
# # [2][3][5][5][9]
# # [7][6][3][2][1]

# # Pairs
# # [2][3][5][5][9]
# # [7][6][3][2][1]

def getMaxSpeed(person1, person2, fastest):
  speed =[]
  person1.sort()
  person2.sort()
  if fastest: person2 = person2[::-1]
  for index, value in enumerate(person1):
    if person1[index] > person2[index]: speed.append(person1[index])
    if person1[index] < person2[index]: speed.append(person2[index])
    if person1[index] == person2[index]: speed.append(person1[index])
  return sum(speed)

print(getMaxSpeed(redShirtSpeeds, blueShirtSpeeds, True))