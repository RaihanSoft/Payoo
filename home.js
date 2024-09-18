document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault()

//amount
    const inpAmount = document.getElementById('amount').value
    console.log(inpAmount);

// pin number
    const inpPin = document.getElementById('inpPin')
    const pinNumber =  inpPin.value;
    console.log(pinNumber);


    // const currentAmount = document.getElementById('currentAmount')
    // const currenA = currentAmount.innerText;
    // console.log(currenA);


    
    // const pin = inpPin.value
    //  if(pin === '4321'){

    //     console.log("valid pin");
    //     currenA = currenA + inpAmount.value


    //  }

    })