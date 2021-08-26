const tipBtns = document.querySelectorAll('.tip-control');
const bill = document.getElementById('bill');
const numOfPeople = document.querySelector('#people');
const sumTotal = document.querySelector('#sum-total');
const sumPerson = document.querySelector("#sum-person");
const resetBtn = document.querySelector('#reset-btn');
const customTip = document.querySelector('#custom-tip')
const errMsg = document.querySelector('.error-msg');


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
            numOfPeople.classList.add('empty')
            errMsg.style.display = 'inline';
            btn.classList.remove('checked');
            resetBtn.classList.remove('active-btn')
        } else {
            errMsg.style.display = 'none';
            btn.classList.add('checked');
            numOfPeople.classList.remove('empty')
        }
        resetBtn.classList.add('active-btn')


        resetBtn.addEventListener('click', () => {
            sumPerson.textContent = '$0.00';
            sumTotal.textContent = '$0.00';
            bill.value = '';
            resetBtn.classList.remove('active-btn')
            btn.classList.remove('checked');
            numOfPeople.value = ''
            numOfPeople.classList.remove('empty')
            errMsg.style.display = 'none';

        })
    })

})
