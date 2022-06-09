SIZE = 3

board = []
# row = []

for y in range(SIZE):
  board.append([])
  for x in range(SIZE):
    board[y].append("[%d][%d]" % (y, x))

for row in board:
  for column in row:
    print("%s  " % column, end="")
  print("\n")

# for i in range(SIZE):
#   row.append([f"[{i}][{i + 1}]"])
#   board.append(row)

# print(board)