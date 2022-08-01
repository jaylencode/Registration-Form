const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  checkInput()
})

function checkInput() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  if (usernameValue === '') {
    setErrorFor(userName, 'Username cannot be blank')
  } else {
    setSuccessFor(userName, 'Username')
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank')
  } else {
    setSuccessFor(password)
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank')
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match')
  } else {
    setSuccessFor(password2)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerHTML = message
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )
}
