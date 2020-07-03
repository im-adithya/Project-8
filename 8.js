const celciusIn = document.querySelector('#celcius > input');
const fahrenheitIn = document.querySelector('#fahrenheit > input');
const kelvinIn = document.querySelector('#kelvin > input');

var cel = 0;
var fahr = 0;
var kel = 0;

temps=[0,0,0];

function roundToTwo(x){
    x = x*100;
    n = x - Math.floor(x);
    if (n>=0.5){
        return (Math.floor(x)+1)/100;
    }
    return (Math.floor(x))/100;
}

function getOthers(u,i){
    u = parseFloat(u); 
    console.log(i==0,u);
    if (i==0) {
        var base = u;
    }
    else if(i==1){
        var base = (u-32)*5/9
    }
    else{
        var base = u-273.15;
    }
    temps[0] = roundToTwo(base);
    temps[1] = roundToTwo((base*9/5)+32);
    temps[2] = roundToTwo(base+273.15);

    return temps
}

celciusIn.addEventListener('input', function(){
    cel = celciusIn.value;
    tempArr = getOthers(cel,0);
    fahrenheitIn.value = tempArr[1];
    kelvinIn.value = tempArr[2];
    
})

fahrenheitIn.addEventListener('input', function(){
    fahr = fahrenheitIn.value;
    tempArr = getOthers(fahr,1);
    celciusIn.value = tempArr[0];
    kelvinIn.value = tempArr[2];
    
})

kelvinIn.addEventListener('input', function(){
    kel = kelvinIn.value;
    tempArr = getOthers(kel,2);
    celciusIn.value = tempArr[0];
    fahrenheitIn.value = tempArr[1];
})