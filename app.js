// CHAPTER 26 TO 30
//=========================================================================

// QUESTION 1
// var userinput = prompt("Enter your Value");
// document.write("Number :" + userinput + "<br>");
// var roundOff = Math.round(userinput);
// document.write("Roundoff Value" + roundOff + "<br>");
// var floorValue = Math.floor(userinput);
// document.write("Floor Value" + floorValue + "<br>");
// var ceilValue = Math.ceil(userinput);
// document.write("Ceil Value" + ceilValue + "<br>");



// QUESTION 2
// var userinput = prompt("Enter your NEGATIVE FLOATING Value");
// document.write("Number :" + userinput + "<br>");
// var roundOff = Math.round(userinput);
// document.write("Roundoff Value" + roundOff + "<br>");
// var floorValue = Math.floor(userinput);
// document.write("Floor Value" + floorValue + "<br>");
// var ceilValue = Math.ceil(userinput);
// document.write("Ceil Value" + ceilValue + "<br>");



// QUESTION 3
// var value = prompt("Enter the Value");
// var absolute = Math.abs(value);
// document.write("The Absolute value of " + value + " is " + absolute);


// QUESTION 4
// Math.random() * 6 ;
// var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
// var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
// document.write('random Dice Value is ' + diceRoll1 + "<br>");
// document.write('random Dice Value is ' + diceRoll2);



// QUESTION 5
// var tail = 1;
// var head = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("1 <br> Random Coin Value: Tails")
// } else if(floor === 1)
// {
//     document.write("2 <br> Random Coin Value: Heads")
// }


// QUESTION 6
// var randomNo = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100 is " + randomNo);

//QUESTION 7
// var weight =parseInt(prompt("Enter your weight in kilogram")); 
// document.write("The weight of the user is: " + String(weight));


// QUESTION 8
// var RandomNum = Math.ceil(Math.random() * 10);
// var UserNum = prompt("Input a number between 1 and 10");
//  if (UserNum == RandomNum)
//    alert("Congratulations");
//   else
//    alert("Try Again");


//========================================================================================================


// CHAPTER 31 TO 34
//=========================================================================


// QUESTION 1
// var now = new Date()
// document.write(now)

// QUESTION 2
// var month_names = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
// var now = new Date();
// var month = now.getMonth();
// var name_of_month = month_names[month]
// alert("Current Month: " + name_of_month);

// QUESTION 3
//  var Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  var now = new Date();
//  var Day = now.getDay();
//  var Present_Day = Day_Names[Day].slice(0,3);
//  document.write("Today is " + Present_Day)

// QUESTION 4
// var Day_Names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var Day = now.getDay();
// var Present_Day = Day_Names[Day];
// if (Present_Day === "Saturday"){
//     document.write("It's Fun day")
// }else if(Present_Day === "Sunday"){
//     document.write("It's Fun day")
// }else if(Present_Day === "Monday"){
//     document.write("It's a busy day")
// }else if(Present_Day === "Tuesday"){
//     document.write("It's a boring day")
// }else if(Present_Day === "Wednesday"){
//     document.write("It's a bad day")
// }else if(Present_Day === "Thrursday"){
//     document.write("It's a good day")
// }else if(Present_Day === "Friday"){
//     document.write("It's a very good day")
// }

// QUESTION 5
// var now = new Date();
// var Days = now.getDate();
// if(Days<=15){
//     document.write("first fifteen days of the month");
// }
// else{
//     document.write("last days of the month");
// }

// QUESTION 6
// var now = new Date();
// var ms = now.getTime();
// var min = now.getTime()/60000;
// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since january 1, 1970: " + ms +"<br>");
// document.write("Elapsed minutes since january 1, 1970: " + min);

// QUESTION 7

// var now = new Date();
// var hrs = now.getHours();
// if(hrs = 0){
//     document.write("Midnight");
// }
// if(hrs >=1 || hrs < 12){
//     document.write("its AM");
// }
// else{
//     document.write("its PM");
// }


// QUESTION 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later date:"+laterDate+"<br>");

// QUESTION 9
// var Given_Date = new Date("June 18, 2015");
// var now = new Date();
// var today_sec = now.getTime();
// var past_sec = Given_Date.getTime();
// var diff = today_sec - past_sec ;
// var Days = diff / (1000 * 60 * 60 * 24);
// var past_days = Math.floor(Days)
// document.write(past_days + " days have past since " + Given_Date + "<br>");


// QUESTION 10
// var ref = new Date("Dec 05, 2015");
// var begin = new Date("Dec 01, 2015");
// var beg = begin.getTime();
// var refdate = ref.getTime();
// var diff = refdate - beg ;
// var secs = diff / (1000);
// var finalsecs=Math.floor(secs)
// document.write("On reference date "+ref+", "+finalsecs+" Seconds had passed since the begining of 2015"+"<br>");

// QUESTION 11
// var rightNow = new Date();
// var newd=rightNow.setHours()
// document.write("Current Date "+newd+"<br>")
// document.write("1 hour ago it was Date "+rightNow+"<br>")

// QUESTION 12

// var now = new Date();

// var oneYr = new Date();
// oneYr.setYear(now.getYear() + 1);
// $("#yearFromNow").append(oneYr.toString());

// var oneMonth = new Date();
// oneMonth.setMonth(now.getMonth() + 1);
// $("#monthFromNow").append(oneMonth.toString());



// var now = new Date();
// document.write("Current Day: " + now + "<br>")
// var past_time = new Date("Apr 19, 1921")
// document.write("100 year back,it was : " + past_time)

// QUESTION 13
//  didnt geddit
// var a=+prompt("Whats your age?")
// var present = new Date();
// var year=present.getFullYear()
// byear=year - a;
// document.write("Your age is "+a+"<br>");
// document.write("Your birth Year is "+byear+"<br>");


// QUESTION 14
// var now= new Date();
// var monthlst = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
// monthnum=now.getMonth()
// var month = monthlst[monthnum];
// var namec=prompt("Please Enter Your Name?")
// var unitno=+prompt("Please Enter Your Number Of Units?")
// document.write("K-Electric Bill"+"<br>")
// document.write("Customer Name: "+ namec+"<br>")
// document.write("Month: "+month+"<br>");
// document.write("Number Of Units:"+unitno+"<br>");
// document.write("Charges Per Unit: 16"+"<br>");
// var payable=unitno*16
// document.write("Net Amount Payble (within Due Date):"+ payable+"<br>");
// document.write("Late Payment Surcharge: 350"+"<br>");
// var payabledue= payable+350
// document.write("Gross Amount Payble (after Due Date):"+ payabledue+"<br>");


//====================================================================================================================================================



// CHAPTER 35 TO 38
//=========================================================================


// QUESTION 1
//  function Current_Date() {
//      var now = new Date();
//      document.write(now)
//      }
//      Current_Date();
    
// QUESTION 2
// function Myfunction(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter your last name");
//     alert("Hello " + first + " " + last)
// }
// Myfunction();

// QUESTION 3
// function Addition(){
//     var a = +prompt("Enter a first no");
//     var b = +prompt("Enter a second no");
//     var c = a + b;
//     alert(c)
// }
// Addition();

// QUESTION 4
// function Calculator(num1,num2,op){

//     if(op == "plus"){ 
//         result = num1 + num2;
//         document.write("The Result is " + result)
//     }
//     else if(op == "multiply"){
//         result = num1 * num2;
//         document.write("The Result is " + result)
//     }
//     else if(op == "minus"){
//         result = num1 - num2;
//         document.write("The Result is " + result)
//     }

// }
// Calculator(2,20,"plus");

// QUESTION 5
// function Square(num1,num2){
// alert("The Squares of Argument is " + num1 + " , " + num2)

// }
// Square(Math.pow(3,2),Math.pow(2,2))

// QUESTION 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = 4;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// QUESTION 7 

// function Counting()
// {
//     var firstno = +prompt("Enter a first no")
//     var secondno = +prompt("Enter a second no")
//     for(var i = firstno; i<=secondno; i++){
//         document.write(i + "<br>")
//     }
// }
// Counting()


// QUESTION 10

// function checkPalindrome(str) {

 
//     var len = string.length;

//     for (var i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }


// var string = prompt('Enter a string: ');

// var value = checkPalindrome(string);

// document.write(value);
    



// QUESTION 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Example String:the quick brown fox <br>")
// document.write(uppercase("Expected String: " + " the quick brown fox"));

// QUESTION 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// QUESTION 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count("JSResourceS.com", "o"));

// QUESTION 14
// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "."+ "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence(20);
//   calcArea(10);



// CHAPTER 38 TO 42
//=========================================================================


//QUESTION 1
// var a= prompt("enter the first value")
// var b = prompt("enter the power u want to calculate")
// var d=1
// var j
// function pow(){
//     while (d<b){
//  j=a** b
//  d++
//     }
//     document.write("the power of "+ a + " raised to power "  + b + " is " + j)
// }
// pow()


// Question 2

// function year (){

// var year = prompt ("enter the year")
//     if ( year == 2012 || year == 2016 || year == 2020)
//     {
//         alert (  year +" is leap year")
//     }
//     else { alert ("its not an leap year"  ) }
// }

// year ()


// Question 3


// function areas() {

//     var a = 5
//     var b = 5
//     var c = 6
//     var s
//     function inner() {

//         s = (a + b + c) / 2
//     }
//     inner()
//     var area = s * (s - a) * (s - b) * (s - c)
//     document.write(" side a = 5 side b = 3 side c = 2 <br> the are of triangle is " + area)

// }

// areas()


// Question 4

// function main() {

//     var a = +prompt("enter the first subject marks")
//     var b = +prompt("enter the 2 subject marks")

//     var c = +prompt("enter  the 3 subject marks")

//     var obt= a+b+c
//     document.write(" <H1>Mark sheet of  ali bahadur </h1> <br>")
//     function average() {
//         var average = (a+b+c)/2
//         return document.write( "math = " + a + " physics =" + b + "chemistry = "+ c + "<br>")
        
//     }
//     var ave = average()
//     function percentage() { 
//         var percentage =  ((a+b+c)/300)*100
//         document.write( "percentage is = " + percentage )
        
//     }
//     var per = percentage()
    
// }
// main()



// Question 5

// function index() {
//     var a = prompt("enter a letter")
//     var name = "alibahadur"
//     fir (var i=0 ; i<name.length ; i++){
//         var sel = name.charAt(i)
//         switch (true){
//             case ( input == sel)
//             document.write( "your character " + a + "on my sentence at index = " +i)
//             var i=num.length
//             case (i== name.length )
//             console.log ("-1")
//         }
//     }  
// }

// index ()





// Question 6

// function remove() {
//     var a =prompt("enter the sentence")
//     var b 
//      b=a.replace(/[aeiou]/gi, '');
//      document.write(b)
//   }
//   remove()


// Question 7

// function findOccurrences() {
//     var str = "Pleases  read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   document.write("the count of vowels appearing twice is " + findOccurrences());


// Question 8

// function input(){
//     var dis =prompt("enter the distacne between 2 cities in kilometers")
//     function kM(){
//         var KM=dis*1000
//      return document.write("the distance in meter is " + KM + "m <br>")
//     }
//     function inc(){
//         var inch=dis*39370.08
//      return document.write("the distance in inch is " + inch + " inches <br>")
//     }
//     function cm(){
//         var inch=dis*100*1000
//      return document.write("the distance in cm is " + inch + " cm <br>")
//     }
//     function fet(){
//         var inch=dis*3280.84
//      return document.write("the distance in feet is " + inch + " ft <br>")

//     }
// fet()
// cm()
//     inc()
// kM()
// }
// input()
// Question 9



// function main()  
// {  
//     var workingHours = prompt("enter the working hours")
// if (workingHours<40)
// {
//     alert("no overtime payment for u ")
// }
// else {
//     var overtime =   workingHours - 40 ;
//     console.log(overtime)    
//     var am = overtime * 12.00 ;
//     alert("the amout generated from overtime is "+ am ) }
// } 
// main()



// Question 10

// function main()
// {
// 	var amount;
// 	var amount = prompt("Please input amount for withdraw : ");
// 	document.write("\n\nRequired notes of Rs. 100  :  " + Math.floor ( amount / 100) + " <br>")
//     document.write("\n\nRequired notes of Rs. 50   :  "+ Math.floor( (amount % 100) / 50 ) + " <br>")
// 	document.write("\n\nRequired notes of Rs. 10   :  " +  Math.floor (  (((amount % 100) % 50) / 10 ) ) + " <br>")
// 	document.write("\n\nAmount still remaining Rs. :  " + Math.floor ( (((amount % 100) % 50) % 10) ) + " <br>")
// }

// main ()


//================================================================[END]=========================================================================