def tipCalc(bill, service):
  if service.lower() == "good":
    tip = (f"Tip Amount: ${format(bill * 0.20, '.2f')}")
    total = (f"Total Amount: ${format(bill + (bill * 0.20), '.2f')}")
  elif service.lower() == "fair":
    tip = (f"Tip Amount: ${format(bill * 0.15, '.2f')}")
    total = (f"Total Amount: ${format(bill + (bill * 0.20), '.2f')}")
  elif service.lower() == "fad":
    tip = (f"Tip Amount: ${format(bill * 0.10, '.2f')}")
    total = (f"Total Amount: ${format(bill + (bill * 0.20), '.2f')}")
  print(tip)
  print(total)

tipCalc(
  float(input("Total bill amount? $")),
  input("Level of service? Good? Fair? Bad? ")
)