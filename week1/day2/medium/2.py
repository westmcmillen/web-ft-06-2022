def tipCalc(bill, people, service):
  if service.lower() == "good":
    print(f"Tip Amount: ${bill * 0.20: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.20): .2f}")
    print(f"Per Person: ${(bill + (bill * 0.20)) / people: .2f}")
  elif service.lower() == "fair":
    print(f"Tip Amount: ${bill * 0.15: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.15): .2f}")
    print(f"Per Person: ${(bill + (bill * 0.15)) / people: .2f}")
  elif service.lower() == "fad":
    print(f"Tip Amount: ${bill * 0.10: .2f}")
    print(f"Total Amount: ${bill + (bill * 0.10): .2f}")
    print(f"Per Person: ${(bill + (bill * 0.10)) / people: .2f}")

tipCalc(
  float(input("Total bill amount? $")),
  int(input("How many people are splitting the bill? ")),
  input("Level of service? Good? Fair? Bad? ")
)