
const tip5 = document.getElementById('tip-5');
const tip10 = document.getElementById('tip-10');
const tip15 = document.getElementById('tip-15');
const tip25 = document.getElementById('tip-25');
const tip50 = document.getElementById('tip-50');


const tip5Label = document.getElementById('tip-5-label');
const tip10Label = document.getElementById('tip-10-label');
const tip15Label = document.getElementById('tip-15-label');
const tip25Label = document.getElementById('tip-25-label');
const tip50Label = document.getElementById('tip-50-label');

tip5.addEventListener('change', () => {
    if(tip5.checked) {
        tip5Label.classList.toggle('uncheked')
        tip5Label.classList.toggle('checked');
    }
    console.log(tip5.dataset)
})

tip10.addEventListener('change', () => {
    if(tip10.checked) {
        tip10Label.classList.toggle('uncheked')
        tip10Label.classList.toggle('checked');
    }
})

tip15.addEventListener('change', () => {
    if(tip15.checked) {
        tip15Label.classList.toggle('uncheked')
        tip15Label.classList.toggle('checked');
    }

})

tip25.addEventListener('change', () => {
    if(tip25.checked) {
        tip25Label.classList.toggle('uncheked')
        tip25Label.classList.toggle('checked'); 
    }

})

tip50.addEventListener('change', () => {
    if(tip50.checked) {
        tip50Label.classList.toggle('uncheked')
        tip50Label.classList.toggle('checked');
    }

})