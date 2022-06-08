for i in range(1,8,2):
  if i == 1:
    print(f"{' ' * 3} {'*' * i} {' ' * 3}")
  elif i == 3:
    print(f"{' ' * 2} {'*' * i} {' ' * 2}")
  elif i == 5:
    print(f"{' ' * 1} {'*' * i} {' ' * 1}")
  elif i == 7:
    print(" " + "*" * i)
