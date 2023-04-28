const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //<h1 class="greeting">에 환영인사 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 삭제해서 보이게 하기
}

function onLoginSubmit(event){
    event.preventDefault(); //새로고침 되지 않게 하기
    loginForm.classList.add(HIDDEN_CLASSNAME); //login-form 숨기기
    const username = loginInput.value; //로그인 이름을 username 변수에 저장하기
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit); 
} 
else{
    paintGreetings(savedUsername);
}