import '../authorization/authorization.css';
import './index.html';

document.body.insertAdjacentHTML("afterbegin", `
  <div class="overlay"></div>
  <div class="modal">
    <svg class="modal-close" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"/></svg>
    <h1>Регистрация и вход</h1>
    <div class="form">
        <p><input type="text" class="input-name" name="name" value="">
        <label for="name">Введите своё имя</label></p>   
        <p><input type="email" name="email" class="input-email" value="">
        <label for="email">Введите свой e-mail</label></p>   
        <p><input type="password" name="password" class="input-password" value="" />
        <label for="password">Пароль(мин. 8 символов)</label></p>
        <p class="modal-button"><button class="register">Регистрирация</button>
        <button class="login">Войти</button></p>
    </div>    
  </div>
`);
  
let inputName = (<HTMLInputElement>document.querySelector('.input-name'));
let inputEmail = (<HTMLInputElement>document.querySelector('.input-email'));
let inputPassword = (<HTMLInputElement>document.querySelector('.input-password'));
const authorization = <HTMLElement>document.querySelector('.button-input');  
const modal = <HTMLElement>document.querySelector('.modal');
const overlay = <HTMLElement>document.querySelector('.overlay');
const login = <HTMLElement>document.querySelector('.login');
const register = <HTMLElement>document.querySelector('.register');
const closing = <HTMLElement>document.querySelector('.modal-close');


  
function openModal() {    
  modal.classList.add('active');
  overlay.classList.add('active');
};

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

authorization.addEventListener('click', openModal);
closing.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.body.addEventListener('keyup', function (event) {
  let key = event.keyCode;
  if (key == 27) {
    closeModal();
  };
}, false); 

register.addEventListener('click', signUp);
login.addEventListener('click', signIn);

async function signUp() {
  const user = { "name": `${inputName.value}`, "email": `${inputEmail.value}`, "password": `${inputPassword.value}` };
  try {
    const rawResponse = await fetch('https://easy-english-rss.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    });
    if (rawResponse.status == 200) {
      alert('Вы зарегистрированы! Войдите, используя e-mail и пароль.');        
      inputName.value = '';
      inputEmail.value = '';
      inputPassword.value = '';
      closeModal();

    } else if (rawResponse.status == 417) alert('Пользователь уже существует!');
    else if (rawResponse.status == 422) alert('Неправильный e-mail или пароль!');
    else alert('Произошла ошибка! Попробуйте ещё раз!');
    const content = await rawResponse.json();
  
    console.log(content);      
  } catch(err) {
    
  };
};

async function signIn() {   
  const user = { "email": `${inputEmail.value}`, "password": `${inputPassword.value}` }; 
  try {
    const rawResponse = await fetch('https://easy-english-rss.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (rawResponse.status == 200) {
      const content = await rawResponse.json();
      localStorage.setItem('name', content.name);
      localStorage.setItem('userId', content.userId);
      localStorage.setItem('token', content.token);
      localStorage.setItem('refreshToken', content.refreshToken);
      inputName.value = '';
      inputEmail.value = '';
      inputPassword.value = '';
      alert(`Добро пожаловать, ${content.name}!`)
      closeModal();
    } else if (rawResponse.status == 403) alert('Неверный пароль!');
    else if (rawResponse.status == 404) alert('Пользователь не найден!');
    else alert('Произошла ошибка! Попробуйте ещё раз!');
  } catch(err) {
    
  };
};