const ads1 = document.querySelector(".ads-1");
const ads2 = document.querySelector(".ads-2");
const goals = document.querySelector(".goals");
const Home = document.querySelector(".home");
const login = document.querySelector(".login");
const createaccount = document.querySelector(".Create-account");
const workoutsch = document.querySelector(".workout-Sch");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const skip1 = document.getElementById("skip1");
const skip2 = document.getElementById("skip2");
const SignIN = document.getElementById("SignIn");
const create = document.getElementById("create");
const createBtn = document.getElementById("createAccount");
const haveaccount = document.getElementById("haveaccount");
const confirmbtn = document.getElementById("confirmbtn");
const google = document.getElementById("google");
const facebook = document.getElementById("facebook");
const creategoogle = document.getElementById("create-google");
const createfacebook = document.getElementById("create-facebook");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const homebtn = document.getElementById("homebtn");

document.addEventListener("DOMContentLoaded", function () {
  ads2.style.display = "none";
  goals.style.display = "none";
  Home.style.display = "none";
  login.style.display = "none";
  createaccount.style.display = "none";
  workoutsch.style.display = "none";

  btn1.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "flex";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  btn2.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "flex";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  skip1.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "flex";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  skip2.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "flex";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  SignIN.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  create.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "flex";
    workoutsch.style.display = "none";
  });

  createBtn.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "flex";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  haveaccount.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "flex";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  confirmbtn.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  google.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  facebook.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  creategoogle.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "flex";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  createfacebook.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "flex";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  back1.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "none";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "flex";
  });

  back2.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });

  homebtn.addEventListener("click", function () {
    ads1.style.display = "none";
    ads2.style.display = "none";
    goals.style.display = "none";
    Home.style.display = "flex";
    login.style.display = "none";
    createaccount.style.display = "none";
    workoutsch.style.display = "none";
  });
});
