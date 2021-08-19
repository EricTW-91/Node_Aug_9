let password = 'c3As!ds'

const regExp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
    //([a-z]+[A-Z]+[0-9]+[@]+){6}/g

console.log(password.match(regExp))