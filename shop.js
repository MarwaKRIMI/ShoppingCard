
 function result1() { 
var variable1 = document.getElementById('num1').value; 
var variable2 = document.getElementById('tot1').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*1.80;
   document.getElementById('tot1').value = variable3;
   document.getElementById('tot1').innerHTML=variable3;
} else {
   document.getElementById('tot1').value = '0';
   document.getElementById('tot1').innerHTML=0;
}
}
function result2() { 
var variable1 = document.getElementById('num2').value; 
var variable2 = document.getElementById('tot2').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*3.90;
   document.getElementById('tot2').value = variable3;
   document.getElementById('tot2').innerHTML=variable3;
} else {
   document.getElementById('tot2').value = '0';
   document.getElementById('tot2').innerHTML=0;
}
}
function result3() { 
var variable1 = document.getElementById('num3').value; 
var variable2 = document.getElementById('tot3').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*5.70;
   document.getElementById('tot3').value = variable3;
   document.getElementById('tot3').innerHTML=variable3;
} else {
   document.getElementById('tot3').value = '0';
   document.getElementById('tot3').innerHTML=0;
}
}
function result4() { 
var variable1 = document.getElementById('num4').value; 
var variable2 = document.getElementById('tot4').value=0; 
if(variable1>=0 ) { 
   var variable3 = variable1*5.00;
   document.getElementById('tot4').value = variable3;
   document.getElementById('tot4').innerHTML=variable3;
} else {
   document.getElementById('tot4').value = '0';
   document.getElementById('tot4').innerHTML=0;
}
}
function result5() { 
var variable1 = document.getElementById('num5').value; 
var variable2 = document.getElementById('tot5').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*6.50;
   document.getElementById('tot5').value = variable3;
   document.getElementById('tot5').innerHTML=variable3;
} else {
   document.getElementById('tot5').value = '0';
   document.getElementById('tot5').innerHTML=0;
}
}
function result6() { 
var variable1 = document.getElementById('num6').value; 
var variable2 = document.getElementById('tot6').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*4.90;
   document.getElementById('tot6').value = variable3;
   document.getElementById('tot6').innerHTML=variable3;
} else {
   document.getElementById('tot6').value = '0';
   document.getElementById('tot6').innerHTML=0;
}
}
function result7() { 
var variable1 = document.getElementById('num7').value; 
var variable2 = document.getElementById('tot7').value=0; 
if(variable1>0 ) { 
   var variable3 = variable1*10.00;
   document.getElementById('tot7').value = variable3;
   document.getElementById('tot7').innerHTML=variable3;
} else {
   document.getElementById('tot7').value = '0';
   document.getElementById('tot7').innerHTML=0;
}
}

function sommeTotale() 
{ 
var variable1,variable2,variable3,variable4,variable5,variable6,variable7,variableTotale;

if(!(parseFloat( document.getElementById('tot1').value)))
{variable1=0}
else{variable1 =parseFloat( document.getElementById('tot1').value);}
if(!(parseFloat( document.getElementById('tot2').value)))
{variable2=0}
else{variable2 =parseFloat( document.getElementById('tot2').value);}
if(!(parseFloat( document.getElementById('tot3').value)))
{variable3=0}
else{variable3 =parseFloat( document.getElementById('tot3').value);}
if(!(parseFloat( document.getElementById('tot4').value)))
{variable4=0}
else{variable4 =parseFloat( document.getElementById('tot4').value);}
if(!(parseFloat(document.getElementById('tot5').value)))
{variable5=0}
else{variable5 =parseFloat( document.getElementById('tot5').value);}
if(!(parseFloat( document.getElementById('tot6').value)))
{variable6=0}
else{variable6 =parseFloat( document.getElementById('tot6').value);}
if(!(parseFloat( document.getElementById('tot7').value)))
{variable7=0}
else{variable7 =parseFloat( document.getElementById('tot7').value);}

variableTotale = variable1+variable2+variable3+variable4+variable5+variable6+variable7;
document.getElementById('totale').value=variableTotale;
}