window.onload = function() {
    sumStrings(data);
    sumStrings2(data);
};

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const inventors2 = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 
'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 
'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 
'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 
'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//=======================================================================
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function yearBorn(obj) {
    if(obj.year >= 1500 && obj.year <= 1600){
        return true;
    };
};
console.log(inventors.filter(yearBorn));

// **---> my way
const newList = [];
for(let i = 0; i < inventors.length; i++){
    if(inventors[i].year >= 1500 && inventors[i].year <= 1600){
        newList.push(inventors[i]);  
    };
};
// console.log(newList);


//============================================================
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function fullName(obj) {
    return obj.first + " " + obj.last;
};
console.log(inventors.map(fullName));

// **---> my way
const inventorsName = [];
for(let i = 0; i < inventors.length; i++){
    const fullName = {
        first: inventors[i].first, 
        last: inventors[i].last
    };
    inventorsName.push(fullName);
};
// console.log(inventorsName);

//=========================================================
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function decresing(old, young) {
    return old.year - young.year;
};
console.log(inventors.sort(decresing));

//==============================================================
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function totalInvYears(total, age) {
    return total + (age.passed - age.year);
};
console.log("All these inventors lived a total of " + inventors.reduce(totalInvYears, 0) + " years");

// **---> my way
let ages = [];
for(let i = 0; i < inventors.length; i++){
    ages.push(Number(inventors[i].passed) - Number(inventors[i].year));
};
function totalYears(ages, total) {
    return ages + total;
};
// console.log("All those inventors lived a total of " + ages.reduce(totalYears) + " years");

//=====================================================================
// 5. Sort the inventors by years lived
function yearslived(a, b){
    const year = a.passed - a.year;
    const years = b.passed - b.year;
    return years - year;
}
console.log(inventors.sort(yearslived));
// **---> my version
for(let i = 0; i < inventors2.length; i++) {
    inventors2[i].yearslived = inventors2[i].passed - inventors2[i].year;
}
function lived(obj, age){
    return age.yearslived - obj.yearslived;
}
// console.log(inventors2.sort(lived));

//===================================================================================
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
function lastName(last1, last2) {
    if(last1 > last2) return 1;
    if(last1 < last2) return -1;
}
console.log(people.sort(lastName));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

function sumStrings(arr) {
    const objArr =[];
    for(let i = 0; i < arr.length; i++){

        if(objArr.length === 0){
            let obj = { 
                name: arr[i],
                count: 1
            }
            objArr.push(obj);
            console.log(arr[i]);

        } else {
            let isFound = false;

            for(let j = 0; j < objArr.length; j++){
                if(arr[i] === objArr[j].name){  // "car" !== "..."
                    isFound = true;
                    objArr[j].count++;
                    break;
                }
            }

            if(isFound === false){
                let obj = { 
                    name: arr[i],
                    count: 1 
                }
                objArr.push(obj);
                console.log(arr[i]);
            }
        }
    }
    console.log(objArr);
}

function sumStrings2(arr) {
    const objArr =[];
    for(let i = 0; i < arr.length; i++){
        const vehicles = objArr.map(function(element){  // <-- ** anonymous function  or element => element.name ( ES6 style!)
            return element.name;
        });
        if(!vehicles.includes(arr[i])){
            let obj = { 
                name: arr[i],
                count:1 
            }
            objArr.push(obj);
        } 
        else {
            // for(let j = 0; j < objArr.length; j++){
            //     if(objArr[j].name === arr[i]){
            //         objArr[j].count++;
            //         break;
            //     }
            // }
            objArr.map(obj => {
                if(obj.name == arr[i]) {
                    obj.count++;
                }
            });
            
        }
    }
    console.log(objArr);
}

