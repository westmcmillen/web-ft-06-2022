class BankAccount:
    def __init__(self, account_number):
        self.account_number = account_number
        self.balance = 0
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        self.balance -= amount
    def transfer_funds(self, transferFrom, transferTo, amount):
        transferFrom.withdraw(amount)
        transferTo.deposit(amount)
    def __str__(self):
        return f"{self.account_number}\n{self.balance}"

checking_account = BankAccount("Checking")
savings_account = BankAccount("Savings")

checking_account.deposit(1000)
checking_account.transfer_funds(checking_account, savings_account, 500)

print(checking_account)
print(savings_account)