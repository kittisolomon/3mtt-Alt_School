// objects contain related properties of a single data element.

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2014,
    getPrice: function (){
        return 5000;
    }, 
    printDescription: function (){
        console.log(`My Car is ${this.make} ${this.model} ${this.year}`);
    }

}

// accessing individual properties of an object
// car.printDescription();
// console.log(car.model)
// console.log(car['year']);
// accessing properties using tye .(dot syntax) is most preferred.

// Another way of creating objects

let anotherCar = {};
anotherCar.make = "Benz";
// console.log(anotherCar.make)

// accessing nested object properties

let people = {
    Hassan: {
        email: 'hassan@hotmail.com',
        hobies: 'Coding and Reading'
    },
    Jonny: {
        email: 'jonny@hotmail.com',
        hobies: 'Reading and Traveling'
    }
}

// console.log(people.Hassan.hobies); 

let carLog = [
    {year: 2017, make: 'BMW', model: '528i'},
    {year: 2010, make: 'Toyota', model: 'Corolla'},
    {year: 2020, make: 'Benz', model: 'Brabus'},
];

console.log(carLog[1].model);

