document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault()

//amount
    const inpAmount2 = document.getElementById('amount').value
    const inpAmount =  Number(inpAmount2)
        console.log('input amount',inpAmount);

// pin number
    const inpPin = document.getElementById('inpPin')
    const pinNumber =  inpPin.value;


     if(pinNumber === '4321'){

        const currentAmount = document.getElementById('currentAmount')
        const currenA = Number(currentAmount.innerText);
        console.log('current amount',currenA);


        let newBalance =  currenA + inpAmount
        console.log("Total Amount",newBalance);


        currentAmount.innerText = newBalance
     

       
        


     }
     else{
        alert("Invalid Pin Number")
     }





    })