'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


// mens collection 
var m1rate =500 , m2rate= 1500;
function m1cart(){
  console.log(m1rate);
  let m1vol = document.getElementById('mvol1').value;
  localStorage.setItem('vol1',m1vol);
  console.log(m1vol);
  if (m1vol == "") {
    document.getElementById('madded1').innerHTML = "Plase Enter the Quatity";
    document.getElementById('madded1').style.color = 'red';
}
else {
    document.getElementById('madded1').innerHTML = "Added to Your Cart";
    document.getElementById('madded1').style.color = 'black';
}
}
function m2cart(){
console.log(m2rate);
let m2vol = document.getElementById('mvol2').value;
localStorage.setItem('vol2',m2vol);
console.log(m2vol)

if (m2vol == "") {
  document.getElementById('madded2').innerHTML = "Plase Enter the Quatity";
  document.getElementById('madded2').style.color = 'red';
}
else {
  document.getElementById('madded2').innerHTML = "Added to Your Cart";
  document.getElementById('madded2').style.color = 'black';
}

}
//calling 
document.getElementById('m1vol').innerHTML=localStorage.getItem('vol1');
document.getElementById('m2vol').innerHTML=localStorage.getItem('vol2');
document.getElementById('mtotal').innerHTML=((localStorage.getItem('vol1')*m1rate)+(localStorage.getItem('vol2')*m2rate));

// female collections 

var f1rate = 1500 , f2rate= 1500;
function f1cart(){
  console.log(f1rate);
  let f1vol = document.getElementById('fvol1').value;
  localStorage.setItem('fvolume1',f1vol);
  console.log(f1vol);
  if (f1vol == "") {
    document.getElementById('fadded1').innerHTML = "Plase Enter the Quatity";
    document.getElementById('fadded1').style.color = 'red';
}
else {
    document.getElementById('fadded1').innerHTML = "Added to Your Cart";
    document.getElementById('fadded1').style.color = 'black';
}
}
function f2cart(){
console.log(f2rate);
let f2vol = document.getElementById('fvol2').value;
localStorage.setItem('fvolume2',f2vol);
console.log(f2vol)
if (f2vol == "") {
  document.getElementById('fadded2').innerHTML = "Plase Enter the Quatity";
  document.getElementById('fadded2').style.color = 'red';
}
else {
  document.getElementById('fadded2').innerHTML = "Added to Your Cart";
  document.getElementById('fadded2').style.color = 'black';
}
}
//calling 
document.getElementById('f1vol').innerHTML=localStorage.getItem('fvolume1');
document.getElementById('f2vol').innerHTML=localStorage.getItem('fvolume2');
document.getElementById('ftotal').innerHTML=((localStorage.getItem('fvolume1')*f1rate)+(localStorage.getItem('fvolume2')*f2rate));

// sport's collection 
var s1rate = 499 , s2rate= 349;
function s1cart(){
  console.log(s1rate);
  let s1vol = document.getElementById('svol1').value;
  localStorage.setItem('svolume1',s1vol);
  console.log(s1vol);
  if (s1vol == "") {
    document.getElementById('sadded1').innerHTML = "Plase Enter the Quatity";
    document.getElementById('sadded1').style.color = 'red';
}
else {
    document.getElementById('sadded1').innerHTML = "Added to Your Cart";
    document.getElementById('sadded1').style.color = 'black';
}
}
function s2cart(){
console.log(s2rate);
let s2vol = document.getElementById('svol2').value;
localStorage.setItem('svolume2',s2vol);
console.log(s2vol)

if (s2vol == "") {
  document.getElementById('sadded2').innerHTML = "Plase Enter the Quatity";
  document.getElementById('sadded2').style.color = 'red';
}
else {
  document.getElementById('sadded2').innerHTML = "Added to Your Cart";
  document.getElementById('sadded2').style.color = 'black';
}

}
//calling 
document.getElementById('s1vol').innerHTML=localStorage.getItem('svolume1');
document.getElementById('s2vol').innerHTML=localStorage.getItem('svolume2');
document.getElementById('stotal').innerHTML=((localStorage.getItem('svolume1')*s1rate)+(localStorage.getItem('svolume2')*s2rate));

// electronic's collection 

var k1rate = 499 , k2rate= 349;
function k1cart(){
  console.log(k1rate);
  let k1vol = document.getElementById('kvol1').value;
  localStorage.setItem('kvolume1',k1vol);
  console.log(k1vol);
  if (k1vol == "") {
    document.getElementById('kadded1').innerHTML = "Plase Enter the Quatity";
    document.getElementById('kadded1').style.color = 'red';
}
else {
    document.getElementById('kadded1').innerHTML = "Added to Your Cart";
    document.getElementById('kadded1').style.color = 'black';
}
}

function k2cart(){
console.log(k2rate);
let k2vol = document.getElementById('kvol2').value;
localStorage.setItem('kvolume2',k2vol);
console.log(k2vol)
if (k2vol == "") {
  document.getElementById('kadded2').innerHTML = "Plase Enter the Quatity";
  document.getElementById('kadded2').style.color = 'red';
}
else {
  document.getElementById('kadded2').innerHTML = "Added to Your Cart";
  document.getElementById('kadded2').style.color = 'black';
}
}
//calling 
document.getElementById('k1vol').innerHTML=localStorage.getItem('kvolume1');
document.getElementById('k2vol').innerHTML=localStorage.getItem('kvolume2');
document.getElementById('ktotal').innerHTML=((localStorage.getItem('kvolume1')*s1rate)+(localStorage.getItem('kvolume2')*s2rate));



function buy() {
  console.log("start")
  document.getElementById('buyres').innerHTML = (((localStorage.getItem('kvolume1')*s1rate)+(localStorage.getItem('kvolume2')*s2rate)))+(((localStorage.getItem('svolume1')*s1rate)+(localStorage.getItem('svolume2')*s2rate)))+(((localStorage.getItem('fvolume1')*f1rate)+(localStorage.getItem('fvolume2')*f2rate)))+(((localStorage.getItem('vol1')*m1rate)+(localStorage.getItem('vol2')*m2rate)))+" /-";
  console.log("ended ")
}

