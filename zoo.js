var animalPopulation = 0;
// function sleep(name) {
//
//     console.log(name + " sleeps for 8 hours");
// }

// function eat(name, food){
//     console.log(name + " eats " + food);
//     if(food == favoriteFood) ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
//     if(food == favoriteFood){
//         console.log("YUM!!! " + name + " wants more " + food);
//     }else{
//         sleep(name);
//     }
// }

function run() {
    // sleep("Tigger");
    // eat("Tigger", "meat");
    // eat("Tigger", "bacon");
    var tigger = new Tiger("Tigger");
    // tigger.eat("meat");
    // tigger.sleep();
    var pooh = new Bear("Pooh");
    // pooh.eat("fish");
    // pooh.sleep();
    var rarity = new Unicorn("Rarity");
    // rarity.eat("marshmallows");
    // rarity.sleep();
    var gemma = new Giraffe("Gemma");
    // gemma.eat("meat");
    // gemma.eat("leaves");
    // gemma.sleep();
    var stinger = new Bee("Stinger");
    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    // stinger.sleep();
    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger] , "meat");


}


// class Tiger {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "meat";
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!!! " + this.name + " wants more " + food);
//         }else {
//             this.sleep(this.name);
//         }
//     }
// }
//
// class Bear {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "fish";
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!!! " + this.name + " wants more " + food);
//         }else {
//             this.sleep(this.name);
//         }
//     }
// }

class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + "");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more " + food);
        }else {
            this.sleep();
        }
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more " + food);
        }else {
            this.sleep();
        }
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        if(food == "leaves"){
            console.log(this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
    sleep() {
        console.log(this.name + " never sleeps");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == "pollen"){
            console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }

    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals");
        for(var i=0; i < animals.length; i++){
            var ani = animals[i];
            ani.eat(food);
        }
    }
}