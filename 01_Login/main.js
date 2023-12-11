const formLogin = document.querySelector('#login')
const formSignin = document.querySelector('#signin')


const seekPasswordBtns = document.querySelectorAll('.seek-password_btn')

seekPasswordBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        seekPasswordBtns.forEach(btn => {
            btn.previousElementSibling.setAttribute('type', 'password')
            if(btn != e.currentTarget){
                btn.classList.remove('fa-eye')
                btn.classList.add('fa-eye-slash')
            }
        })

        if(e.currentTarget.classList.contains('fa-eye-slash')){
            btn.previousElementSibling.setAttribute('type', 'text')
        }else{
            btn.previousElementSibling.setAttribute('type', 'password')
        }
        e.currentTarget.classList.toggle('fa-eye-slash')
        e.currentTarget.classList.toggle('fa-eye')
    })
})

const loginSigninSwitch = document.querySelectorAll('.login-signin_switch > u')

loginSigninSwitch.forEach(btn => {
    btn.addEventListener('click', e => {
        
        if(formLogin.classList.contains('hidden')){
            formLogin.classList.remove('hidden')
            formLogin.classList.add('transition-in')
            formSignin.classList.add('transition-out')
            setTimeout(() => {
                formLogin.classList.remove('transition-in')
                formSignin.classList.add('hidden')
                formSignin.classList.remove('transition-out')
                
            }, 100);
        }else{
            formSignin.classList.remove('hidden')
            formSignin.classList.add('transition-in')
            formLogin.classList.add('transition-out')
            setTimeout(() => {
                formSignin.classList.remove('transition-in')
                formLogin.classList.add('hidden')
                formLogin.classList.remove('transition-out')
            }, 100);
        }
    })
})

const buttonSignin = document.querySelector('#signin_btn')

buttonSignin.addEventListener('click', e => {
    const password = document.querySelector('#password').value
    const passwordCheck = document.querySelector('#confirm_password').value
    const alerts = document.querySelector('#signin_alerts')

    if(password){
        if(password != passwordCheck){
            e.preventDefault()
            alerts.innerHTML = "Las contraseñas no coinciden"
        }
        if(password.length < 8){
            e.preventDefault()
            alerts.innerHTML = 'La contraseña es muy corta'
        }
    }else{
        alerts.innerHTML = 'Hay campos incompletos'
        e.preventDefault()
    }
    
    setTimeout(() => {
        alerts.innerHTML = null
    }, 5000);
})