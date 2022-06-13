class TaskList:
    def __init__(self):
        self.taskList = []
    def setImportance(self):
        print("Set Importance:", end = " ", flush = True)
        importance = input("")
        return importance
    def addTask(self):
        print("\033[A\033[A")
        print("Add a Task:", end = " ", flush = True)
        task = input("")
        importance = self.setImportance()
        self.taskList.append((task, importance))
    def removeTask(self):
        print("\033[A\033[A")
        print("Remove a Task:", end = " ", flush = True)
        task = input("")
        for value in self.taskList:
            if task == value[0]:
                self.taskList.remove(value)
    def printTaskList(self):
        print("")
        print("-" * 50)
        if len(self.taskList) == 0:
            print("Empty")
        else:
            for task in self.taskList:
                print(f"Task: {task[0]} | Importance: {task[1]}")
        print("-" * 50)
        print("")

def getChoice(choices):
    print("Select an option below. Enter a number:")
    print("")
    for index, choice in enumerate(choices):
        print(f"{index}. {choice}")
    print("")
    print(">>", end = " ", flush = True)
    choice = int(input(""))
    if type(choice) is int and choice < len(choices):
        return choice

userTaskList = TaskList()

while True:
    userTaskList.printTaskList()
    match getChoice(["Add", "Remove", "Quit"]):
        case 0:
            userTaskList.addTask()
        case 1:
            userTaskList.removeTask()
        case 2:
            print("\033[A\033[A")
            print(">> Quit")
            break
