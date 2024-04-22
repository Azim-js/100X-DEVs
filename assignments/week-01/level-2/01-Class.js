class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    describe() {
        return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}`
    }

    // static class  which should be there by default

    static myType(){
        console.log("Animal")
    }

    speak(){
        console.log("hi there "+ "I am "+ this.name + " and i speak " + this.speaks)
    }

}

console.log(Animal.myType()) //only static method can be called for class 

// create a new object from the classes , rest methods can be called once they are objects 

let dog = new Animal("dog", 4, "bhow bhow")

console.log(dog.describe())

let cat = new Animal("cat", 4, "meow")

cat.speak()