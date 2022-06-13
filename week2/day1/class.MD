# Classes and how to use them

```
user = {
    "name": "Rahmin"
}

print(user["name"])
//Rahmin
user["name"] = Amanda
print(user["name"])
//Amanda

rahmin = new Person()
rahmin.speak()
//"what's up"

rahmin = new Person()
rahmin.speak()
//"Hello"
```

This is the barebones to define class.
It's useless in it's current state
```
class User:
    pass
```

What we want to do now is define a class with a constructor
and then add specific thnigs to it that help us with our program

The constructor is the blueprint of this class only
