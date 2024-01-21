//Maria Gracielle Tudayan BSCS2C

///template string
let text = `The quick
browm fox
jumps over
the lazy dog`

let firstName = "Joh";
let lastName = "Doe";

let text2 = `Welcome ${firstName}, ${lastName}`

console.log(text);
console.log(text2);

//ES6 arrow function
setTimeout(() => { // set time out to 3secs.
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() =>{
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => {
                    console.log("Salam");
                    setTimeout(() => {
                        console.log("Bonjour")
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
},2000)


//ES6 code (Enhance Object Literal)

const lib = {
    sum(a, b){
        return a + b;
    },
    mult(a, b){
        return a * b;
    },
};

console.log(lib.sum(2, 3)); //5
console.log(lib.mult(2, 3)); //6

//
let grade = 80;
let result = 
    grade >= 75 ? "Good to enroll" : "Retain Subject"; //chechk the grade
    console.log(`The Student is ${result}.`); // The Student is Good to enroll


function calculateAverageScore(scores){
        let totalScore = 0;
        let numSubjects = 0;                                                                                           

        for (let subject in scores){
            totalScore += scores[subject];
            numSubjects++;
        }
        return totalScore/numSubjects
}

//
const testScore = {
    MAth: 90,
    Science: 85,
    History: 78,
    English: 92,
    Geography: 88,
};
const averageScore = calculateAverageScore(testScore);
console.log(averageScore);

// filter helper
const ages = [32, 33, 16, 40];

function checkAdult(age){
    return age >= 18;
}

const res = ages.filter(checkAdult);
console.log(res); // [32, 33, 40]

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const result1 = words.filter((word) => word.length > 10);
console.log(result1); // destruction

// every and some helper
let products = [
    {name: "Checkers", category: "Toys"},
    {nmae: "Harry Potter", category: "Books"},
    {nmae: "iPhone", category: "Electronics"},
    {nmae: "Lean PHP", category: "Books"},
];

let product;

for (let i = 0; i < products.length; i++){
    if(products[i].category === "Books"){
        product = products[i];
        break;
    }
}
console.log(product);// {nmae: "Harry Potter", category: "Books"}
                    // if i remove the break, the result will be : {nmae: "Lean PHP", category: "Books"}

/*let allProductsBooks = products.every(function (product){
    return product.category === "Books";
});

let someProductsBooks = products.every(function (product){
    return product.category === "Books";
});
console.log(allProductsBooks); //false
console.log(someProductsBooks); //flase     


/*let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++){
    if(products[i].category != "Books"){
        allProductsBooks = false;
    }else{
        someProductsBokoks = true;
    }
}

console.log(allProductsBooks); //false
console.log(someProductsBooks); //true*/