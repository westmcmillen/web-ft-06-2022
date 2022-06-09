def isPalindrome(word):
  return word.lower == "".join([*word[::-1]])

print(isPalindrome("racecar"))