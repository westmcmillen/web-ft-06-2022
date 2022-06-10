# // Write a function that takes in a string of lowercase letters
# // and returns the index of the string's first non-repeating character.
# // If the input string does not have any non-repeating characters,
# // your function should return -1.

letters ="abcdcaf"

# def getFistNonRepeat(word):
#   for index, value in enumerate(word):
#     if word[0] != word[index]:
#       return f"""The first non-repeating character is "{value}" and is found at index {index}"""
#   return -1

def getFistNonRepeat(string):
  characters = {}
  for character in string:
    characters[character] = characters.get(character, 0) + 1
  for character in characters:
    if characters[character] == 1:
      return f"""The first non-repeating character is "{character}" and is found at index {[*string].index(character)}"""
  return -1

print(getFistNonRepeat(letters))