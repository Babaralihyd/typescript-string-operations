 // ============length=================                                                                                                                 
                             
let anystring : string = 'imran ali noonari';
console.log (anystring);
console.log(anystring.length);

let msg : string = 'today imran go to visit Governor house  ';
let count = msg.length ; 
let allowedchar = 70;

let reamingchar = allowedchar - count;
console.log( count);
console.log(`you  have reamainig characters :  ${ reamingchar} `);




//======================To upper case ============================
let myName = 'imran khan ';
myName = myName.toUpperCase();

console.log(myName);
console.log('noonari '.toLocaleUpperCase());


// ======================To lower case ============================
let mybro3  = 'AaMir Khan ';
mybro3 = mybro3.toLowerCase();

console.log(mybro3);
console.log('HYDERABAD '.toLowerCase());


// ====================== trium ============================ it trium the white space at beginig or end of the string 
let mybro = 'imran           khan          ';
let trimName= myName.trim();

console.log(mybro);
console.log('            noonari               '.trim());



// =======================index of ()=========================== 
let myFather = 'mumtaz ali '
let index= myFather.indexOf('z')
console.log(index);

let update = myFather.indexOf('i')
console.log(update);

let brother1 =  '  bilawal khan '
console.log(brother1.indexOf('bilawal '))

//=========================slice============
let slice = 'nelson  mandela'
let indexslice = slice.slice(0,1)   // nel 
console.log(indexslice);

let myslice = slice.slice(3,6)   //son
console.log(myslice);

let myslice2 = slice.slice( 10, 15) // ndela
console.log(myslice2);

// capitalized title case 

let myfriend = 'faRaZ aLi';
myfriend = myfriend.toLowerCase()
let firstchar = myfriend.slice(0,1);
let remlat = myfriend .slice (1);



firstchar= firstchar.toUpperCase()
let capName  =firstchar + remlat 
console.log(capName);



//====================Repeat=========================

console.log( ' ali khan hyderabadi ' .repeat (2))

let repeat = 'facebook  '
console.log(repeat . repeat(2));



//===================replace=============

let fruit = ' mango apple '
let replace = fruit. replace ( 'p', 'm')
console.log(replace);


  let xyz = ' ilawal  bmran'
let replace2= xyz . replace ( 'i', 'b')
console.log(replace2);



let last = '   Baaar ,    '
let replace3= last . replace ( 'r', 'b')
console.log(replace3);


//==============================split===================================== method of string

let message: string = 'apple';
let  cutfruit = fruit


