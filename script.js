//pega os campos por NOME
const name = document.form.name;
const lastName = document.form.lastName;
const email = document.form.email;
const pwd = document.form.pwd;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validation() {
    if (!name.value) setErrorFor(name, `${name.placeholder} cannot be empty`);
    if (!lastName.value) setErrorFor(lastName, `${lastName.placeholder} cannot be empty`);
    if (!email.value) setErrorFor(email, `${email.placeholder} cannot be empty`);
    if (email.value && !email.value.match(emailPattern)) setErrorFor(email, `invalid ${email.placeholder}.`)
    if (!pwd.value) setErrorFor(pwd, `${pwd.placeholder} cannot be empty.`)
    return console.log('ok');
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    const img = formControl.querySelector('img');

    //add error message inside .msgError
    small.innerText = message;

    //remove class .hide
    small.removeAttribute('class');
    img.removeAttribute('class');
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    event.cancelBubble = true;

    validation();
    console.log(`${name.value} ${lastName.value}
${email.value}
${pwd.value}`);
})