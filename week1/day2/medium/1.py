def tipCalc(bill, service):
  if service.lower() == "good":
    print(f"Tip Amount: ${bill * 0.20: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.20): .2f}")
  elif service.lower() == "fair":
    print(f"Tip Amount: ${bill * 0.15: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.15): .2f}")
  elif service.lower() == "fad":
    print(f"Tip Amount: ${bill * 0.10: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.10): .2f}")

tipCalc(
  float(input("Total bill amount? $")),
  input("Level of service? Good? Fair? Bad? ")
)