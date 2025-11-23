//1
class Person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.stomach = [];
    }

    eat(cadena){
        if(this.stomach.length != 10){
        this.stomach.push(cadena);
        return "You have eate " + cadena;}
        else
        return "You can`t eat more food.";
    }

    poop(){
        this.stomach = [];
        return "Now you can eat more food.";
    }

    toString(){
        return "Name: " + this.name + ", age: " + this.age;
    }

}

let person1 = new Person("Paco", 19);

console.log(person1.eat("Lasagne"));

console.log(person1.poop());

console.log(person1.toString());


/* 
//2
class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank = this.tank + gallons;
        return "Tank filled with " + gallons + " gallons.";
    }

    drive(distance) {
        let possibleDistance = this.tank * this.milesPerGallon;

        if (distance <= possibleDistance) {
            this.odometer = this.odometer + distance;
            this.tank = this.tank - (distance / this.milesPerGallon);
            return "You drove " + distance + " miles.";
        } else {
            this.odometer = this.odometer + possibleDistance;
            this.tank = 0;
            return "I ran out of fuel at " + this.odometer + " miles!";
        }
    }
}

let car1 = new Car("Toyota", 25);
console.log(car1.fill(10));
console.log(car1.drive(100));
console.log(car1.drive(200));
console.log("------------------------------");*/


/*
//3
class Lambdasian {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }

    speak() {
        return "Hello my name is " + this.name + ", I am from " + this.location + ".";
    }
}

let lambda1 = new Lambdasian({ name: "Ana", age: 28, location: "Madrid" });
console.log(lambda1.speak());
console.log("------------------------------");*/


/* //4
class Instructor extends Lambdasian {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        return "Today we are learning about " + subject + ".";
    }

    grade(student, subject) {
        return student.name + " receives a perfect score on " + subject + ".";
    }
}

let instructor1 = new Instructor({
    name: "Luis",
    age: 35,
    location: "Barcelona",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Keep pushing forward!"
});

console.log(instructor1.demo("JavaScript"));
console.log(instructor1.grade({ name: "Carlos" }, "React"));
console.log("------------------------------");*/


/* 
//5
class Student extends Lambdasian {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listSubjects() {
        return "Loving " + this.favSubjects.join(", ") + "!";
    }

    PRAssignment(subject) {
        return this.name + " has submitted a PR for " + subject + ".";
    }

    sprintChallenge(subject) {
        return this.name + " has begun sprint challenge on " + subject + ".";
    }
}

let student1 = new Student({
    name: "Marta",
    age: 24,
    location: "Sevilla",
    previousBackground: "Diseñadora",
    className: "CS132",
    favSubjects: ["HTML", "CSS", "JavaScript"]
});

console.log(student1.listSubjects());
console.log(student1.PRAssignment("JavaScript"));
console.log(student1.sprintChallenge("React"));
console.log("------------------------------");*/


/*
//6
class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return this.name + " announces to " + channel + ", @channel standy times!";
    }

    debugsCode(student, subject) {
        return this.name + " debugs " + student.name + "'s code on " + subject + ".";
    }
}

let pm1 = new ProjectManager({
    name: "Sara",
    age: 30,
    location: "Valencia",
    specialty: "Node.js",
    favLanguage: "TypeScript",
    catchPhrase: "Let's code smart!",
    gradClassName: "CS1",
    favInstructor: "Luis"
});

console.log(pm1.standUp("#web25"));
console.log(pm1.debugsCode(student1, "JavaScript"));*/


