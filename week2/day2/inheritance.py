# Parents, Child, Siblings
#  Three classes


class Person:
    def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName

class Sibling(Person):
    # def __init__(self, firstName, lastName):
    #     super().__init__(firstName, lastName)
    def annoy(self):
        print("Something annoying")
    

class Parent(Person):
    # def __init__(self, firstName, lastName):
    #     super().__init__(firstName, lastName)
    def order(self):
        print("Order child to stop being annoying")

mom = Parent("Laura", "McMillen")
dad = Parent("Gerald", "McMillen")
sister = Sibling("Jourdan", "McMillen")

sister.annoy()
mom.order()