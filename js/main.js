const tipBtns = document.querySelectorAll('.tip-control');
const bill = document.getElementById('bill');
const numOfPeople = document.querySelector('#people');
const sumTotal = document.querySelector('#sum-total');
const sumPerson = document.querySelector("#sum-person");
const resetBtn = document.querySelector('#reset-btn');
const customTip = document.querySelector('#custom-tip')


tipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {


        e.currentTarget.classList.toggle('checked');
        const tipSize = e.currentTarget.getAttribute('id');
        const billAmount = bill.value;
        const people = numOfPeople.value;
        const tipFinal = (billAmount / 100) * tipSize;
        const personFinal = tipFinal / people
        sumTotal.textContent = '$' + tipFinal.toFixed(2)
        sumPerson.textContent = '$' + personFinal.toFixed(2);
        if (people === '' || people === 0) {
            sumPerson.textContent = '$' + tipFinal.toFixed(2)
        }
        resetBtn.classList.add('active-btn')


        resetBtn.addEventListener('click', () => {
            sumPerson.textContent = '$0.00';
            sumTotal.textContent = '$0.00';
            bill.value = '';
            resetBtn.classList.remove('active-btn')
            if (btn.classList.contains('checked')) {
                btn.classList.remove('checked');
            }
        })
    })
})

