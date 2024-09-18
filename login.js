const btn = document.getElementById('btn')
btn.addEventListener('click', function (event) {
    event.preventDefault
    // phone number 
    
    const inpNumber = document.getElementById('inpNumber').value
    console.log(inpNumber);

    // 4 Digit pin 
    const inpPassword = document.getElementById('inpPassword').value
    console.log(inpPassword);

    if(inpNumber === '019' && inpPassword === '1234'){
        console.log("your log in");

    }
    else{
        alert("Wrong phone number or pin");
    }

})











// inpNumber.addEventListener('keyup', function (event) {

//     //    const  inpNumber = event.target.value;
//     console.log(event.target.value);




// })


