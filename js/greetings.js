const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const studyplanLists = document.querySelector("#studyplan-lists");
const todoLists = document.querySelector("#todo-lists");


const HIDDEN_CLASSNAME = "hidden";
const SHOWN_CLASSNAME = "shown"
const USERNAME_KEY = "username";
const LISTS_CLASSNAME = "lists";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Keep Going ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(SHOWN_CLASSNAME);
  studyplanLists.classList.add(LISTS_CLASSNAME);
  todoLists.classList.add(LISTS_CLASSNAME);
  studyplanLists.classList.remove(HIDDEN_CLASSNAME);
  todoLists.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(SHOWN_CLASSNAME);
  studyplanLists.classList.remove(LISTS_CLASSNAME);
  todoLists.classList.remove(LISTS_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}