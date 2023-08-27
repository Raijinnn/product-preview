const form = document.getElementById("form");
const input = document.getElementById("email");
const span = document.getElementById("email-failed");
const user = document.getElementById('user-email');
const container = document.getElementById('container');
const successContainer = document.getElementById('success-card');
const btnDismiss = document.getElementById('btn-dismiss')





//form validation

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userEmail = input.value; 

    if (!input.value) {
        span.classList.add('d-inline')
        input.classList.add('input-fail')
        
    } else {
        span.classList.remove('d-inline');
        input.classList.remove('input-fail')
        container.classList.add('d-none')
        successContainer.classList.remove('d-none')
        user.innerText = userEmail;
    }
});

btnDismiss.addEventListener('click', ()=>{

    container.classList.remove('d-none');
    successContainer.classList.add('d-none');

})