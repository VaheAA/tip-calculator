const tipBtns = document.querySelectorAll('.tip-control');
const bill = document.getElementById('bill');
const numOfPeople = document.querySelector('#people');
const sumTotal = document.querySelector('#sum-total');
const sumPerson = document.querySelector("#sum-person");
const resetBtn = document.querySelector('#reset-btn');



tipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tipSize = e.currentTarget.getAttribute('id');
        const billAmount = bill.value;
        const people = numOfPeople.value;
        const tipFinal = (billAmount / 100) * tipSize;
        sumTotal.textContent = tipFinal
        sumPerson.textContent = tipFinal / people;
        if (people === '' || people === 0) {
            sumPerson.textContent = tipFinal
        }
    })
})

resetBtn.addEventListener('click', () => {
    sumPerson.textContent = '$0.00'
    sumTotal.textContent = '$0.00'
    bill.value = ''

})