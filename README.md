# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [https://rpad88.github.io/intro-component-with-signup-form-master/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned
```js
//Catch some input by name i.e:
const name = document.form.name;

  //form validation
function validation() {
    if (!name.value) setErrorFor(name, `${name.placeholder} cannot be empty`);
    if (!lastName.value) setErrorFor(lastName, `${lastName.placeholder} cannot be empty`);
    if (!email.value) setErrorFor(email, `${email.placeholder} cannot be empty`);
    if (email.value && !email.value.match(emailPattern)) setErrorFor(email, `invalid ${email.placeholder}.`)
    if (!pwd.value) setErrorFor(pwd, `${pwd.placeholder} cannot be empty.`)
    return console.log('ok');
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


## Author

- Website - [@rpad88](https://www.github.com/rpad88)
- Frontend Mentor - [@rpad88](https://www.frontendmentor.io/profile/rpad88)