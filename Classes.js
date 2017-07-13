//car class
function Car(model){
    this.model = model;
    this.color = "silver";
    this.year ="2012";

    this.getInfo = function(){
        return this.model + " "+this.year;
    };

}

var mycar = new Car("Ford");
mycar.year ="2017";
console.log(mycar.getInfo());