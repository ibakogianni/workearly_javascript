const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)


function compare (randomNumber){
    if(randomNumber > 0.7){
        alert(randomNumber + 'is greater than 0.7');
    } else {
        alert(randomNumber + 'is less than 0.7');
    }
}
compare(randomNumber);

const looping = [5, 4, 453564, 4646, 454545];

for (const element of looping){
    console.log(element);
}

for(let i=0; i <looping.length; i++){
    console.log(`# ${looping[i]}`);
}

for(let x=looping.length-1; x>=0; x--){
    console.log(`# ${looping[x]}`);
}

const MyRandomNumber = Math.random();

function compareRandomness(MyRandomNumber, randomNumber){
    if(randomNumber > 0.7 && MyRandomNumber > 0.7){
        alert(` Random number ${randomNumber} and ${MyRandomNumber} is greater than 0.7`);
    }
    else if (randomNumber >0.2 || MyRandomNumber > 0.2){
        alert(` Random number ${randomNumber} or ${MyRandomNumber} is greater than 0.2`);
    }
}

compareRandomness(MyRandomNumber, randomNumber);