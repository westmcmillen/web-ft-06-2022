class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address = []
    def addAddress(self, newAddress):
        self.address.append(newAddress)
        
class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

west = User("West", "McMillen")
west.addAddress(Address("3853 Carnegie Dr.", "Oceanside", "CA", "92056"))

print(west.address[0].state)