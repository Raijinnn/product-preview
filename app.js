const form = document.getElementById("form");
const input = document.getElementById("email");
const span = document.getElementById("email-failed");
const container = document.getElementById("")


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!input.value) {
        span.classList.add('span-validation')
        input.classList.add('input-fail')
        console.log(input.value)
    } else {
        span.classList.remove('span-validation');
        input.classList.remove('input-fail')
        console.log(input.value)
    }
});