
//Submit 
document.getElementById('Triangle-Form').addEventListener('click', calculateResults);
document.getElementById('Pent-Form').addEventListener('click', CalcPentagon);

//Calculate Results 
function calculateResults(e){
    
    const baseUI = document.getElementById('base-tri');
    const heightUI = document.getElementById('height-tri');
    const tom = document.getElementById('answer');
 
   const base = parseFloat(baseUI.value);
   const height = parseFloat(heightUI.value);
   
   const areacalc =((base*height)/2).toFixed();

    if (areacalc !== null){

    console.log("The area of the Triangle is"+ areacalc);
     const tom =document.getElementById("answer").innerHTML=areacalc;
    }
     //prevent defualt stop the page from reloading so answer stays 
    e.preventDefault();  

}

function CalcPentagon(e){
 var pentheightui = document.getElementById('height1'); 
 var pentbaseui = document.getElementById('base1');
 const answerpentui= document.getElementById('pentag');

 const heightside = parseFloat(pentheightui.value);
 const  baseside = parseFloat(pentbaseui.value);

 const newareahght =(heightside *45) /((baseside*2)/4).toFixed();
 console.log(newareahght);

 const finalpent = document.getElementById('pentag').innerHTML= newareahght;
 e.preventDefault();


}

















//listen for Submit 

// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// //calculate Results 
// function calculateResults(e){
// console.log('calculating...');
// // UI Variables 

// const amount= document.getElementById('amount');
// const interest= document.getElementById('interest');
// const years= document.getElementById('years');
// const monthlyPayment = document.getElementById('monthly-payment');
// const totalPayment = document.getElementById('total-payment');
// const totalInterest = document.getElementById('total-interest');

// const principal = parseFloat(amount.value);
// const calculatedInterest =parseFloat(interest.value) / 100 /12;
// const calculatedPayments = parseFloat(years.value) *12;

// //Compute Monthly Payment
// const x =Math.pow(1 + calculatedInterest, calculatedPayments);
// const monthly = (principal*x*calculatedInterest)/(x-1);
 
// if(isFinite(monthly)){
//  monthlyPayment.value = monthly.toFixed(2);
//  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
// } else {
//   console.log('Please Check your Numbers');
 
// }


//  e.preventDefault();   

