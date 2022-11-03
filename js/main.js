
// for input of year
function yr() {

    const inp = document.querySelector('#card-year') 
    let yrValue = inp.value.replace(/[^\d]/g, '')
    yrValue = yrValue.slice(2)
    document.querySelector(`.${inp.id}`).innerHTML = yrValue;
}
const nm = ()=>{
    const inp = document.querySelector('#card-num') 
    let numValue = inp.value
    numValue = numValue.slice(0, 19)
    document.querySelector(`.${inp.id}`).innerHTML = numValue;

}


new Cleave('#card-num', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
       document.querySelector('.card-type').innerHTML = `${type}`;
    }
 });


document.querySelector('button').onclick = ()=>{
    document.querySelectorAll('input').forEach((object)=>{object.setAttribute('input', '')})
}
document.querySelector('form').onsubmit = ()=>{
    let form = document.querySelector('.form')
    let sucMes = document.querySelector('.succ')
    form.style.display = 'none'
    sucMes.style.display = 'flex'
    return false
}

document.querySelector('.suc button').onclick = ()=>{
    let form = document.querySelector('.form')
    let sucMes = document.querySelector('.succ')
    let inputs = document.querySelectorAll('form input')
    inputs.forEach(object=>{object.value =''})
    inputs.forEach(object=>{object.removeAttribute('input')})
    form.style.display = 'flex'
    sucMes.style.display = 'none'
    return false
}