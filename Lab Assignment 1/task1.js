let myname = (YourName) => console.log(YourName);

myname("Umair Khan");

//Task 2 

let assign = (...args) => {
    let array = [2,4,6,1,4,5,6,7,8,9,23,45,12];
    let Even = [];
    let Odd = [];

    let Evener = (num) => {
        return num % 2 == 0;

    }

    let Odder = (num) => {
        return num % 2 != 0;
    }

    Even = array.filter(Evener);
    Odd = array.filter(Odder);


    let evenMapper = (num) => { return num / 2 };
    Even = Even.map(evenMapper);

    let oddMapper = (num) => { return num * 2 };

    Odd = Odd.map(oddMapper);

    let o = [];
    o = Odd;
    let e = [];
    e = Even;

    return { ODD: o, EVEN: e };


}


console.log(assign());