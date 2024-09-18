const btn = document.getElementById('btn')

const inpPassword = document.getElementById('inpPassword')


btn.addEventListener('click', function (event) {

    event.preventDefault
    const inpNumber = document.getElementById('inpNumber')
    console.log(inpNumber.value);


})

inpNumber.addEventListener('keyup', function (event) {

    //    const  inpNumber = event.target.value;
    console.log(event.target.value);




})


