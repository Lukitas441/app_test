const formLogin = document.querySelector("#login");
const formSignin = document.querySelector("#signin");

const seekPasswordBtns = document.querySelectorAll(".seek-password_btn");

seekPasswordBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    seekPasswordBtns.forEach((btn) => {
      btn.previousElementSibling.setAttribute("type", "password");
      if (btn != e.currentTarget) {
        btn.classList.remove("fa-eye");
        btn.classList.add("fa-eye-slash");
      }
    });

    if (e.currentTarget.classList.contains("fa-eye-slash")) {
      btn.previousElementSibling.setAttribute("type", "text");
    } else {
      btn.previousElementSibling.setAttribute("type", "password");
    }
    e.currentTarget.classList.toggle("fa-eye-slash");
    e.currentTarget.classList.toggle("fa-eye");
  });
});

const loginSigninSwitch = document.querySelectorAll(".login-signin_switch > u");

loginSigninSwitch.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (formLogin.classList.contains("hidden")) {
      formLogin.classList.remove("hidden");
      formLogin.classList.add("transition-in");
      formSignin.classList.add("transition-out");
      setTimeout(() => {
        formLogin.classList.remove("transition-in");
        formSignin.classList.add("hidden");
        formSignin.classList.remove("transition-out");
      }, 100);
    } else {
      formSignin.classList.remove("hidden");
      formSignin.classList.add("transition-in");
      formLogin.classList.add("transition-out");
      setTimeout(() => {
        formSignin.classList.remove("transition-in");
        formLogin.classList.add("hidden");
        formLogin.classList.remove("transition-out");
      }, 100);
    }
  });
});

const buttonSignin = document.querySelector("#signin_btn");

buttonSignin.addEventListener("click", (e) => {
  e.preventDefault();
  const password = document.querySelector("#password_signin");
  const passwordCheck = document.querySelector("#confirm_password_signin");

  const inputs = $("#signin").find("input");

  setTimeout(() => {
    let validSignin = true;
    const data = new FormData();

    for (let i = 0; i < inputs.length; i++) {
      data.append(inputs[i].name, inputs[i].value);

      if (!inputs[i].value) {
        inputs[i].classList.add("uncomplete_input");
        validSignin = false;
      }
    }
    if (password.value != passwordCheck.value) {
      password.classList.add("uncomplete_input");
      passwordCheck.classList.add("uncomplete_input");
      validSignin = false;
    }

    if (validSignin) {
      $.ajax({
        url: "../CONTROLADORES/userSignIn.php",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
      }).always((response) => {
        if (response.match(/email.unique_email/i))
          $("#signin").find("input[name = email]").addClass("uncomplete_input");
        if (response.match(/Usuarios.unique_username/i))
          $("#signin")
            .find("input[name = username]")
            .addClass("uncomplete_input");
            if(!(response.match(/email.unique_email/i) || response.match(/Usuarios.unique_username/i))) window.location.assign('../CONTROLADORES/mailCheck')
      });
    }
  }, 50);
});

document.querySelectorAll("*").forEach((elemnt) => {
  elemnt.addEventListener("click", () =>
    document
      .querySelectorAll("input")
      .forEach((input) => input.classList.remove("uncomplete_input"))
  );
});

document.querySelector("#password_signin").addEventListener("keyup", (e) => {
  const passwInput = e.currentTarget;
  if (passwInput.value.length == 0) passwInput.style.border = "";
  if (passwInput.value.length > 0 && passwInput.value.length < 5)
    passwInput.style.border = "1px solid red";
  if (passwInput.value.length > 5 && passwInput.value.length < 10)
    passwInput.style.border = "1px solid yellow";
  if (passwInput.value.length > 10) passwInput.style.border = "1px solid green";
});

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", (e) => {
    var forbiddenKeys = [
      "<",
      ">",
      "{",
      "}",
      '"',
      "'",
      "^",
      "&",
      "*",
      "(",
      ")",
      "+",
      "=",
      "[",
      "]",
      "\\",
      "|",
      ";",
      ":",
      ",",
      "/",
      "`",
    ];
    if (forbiddenKeys.includes(e.key)) {
      e.preventDefault();
    }
  });
});
