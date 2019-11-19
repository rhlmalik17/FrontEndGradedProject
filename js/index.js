let signin = document.querySelector('#signIn');
signin.addEventListener('click',function(){
    document.querySelector('.signIn').style.display='block';
});

let signup = document.querySelector('#signUp');
signup.addEventListener('click',function(){
  document.querySelector('.signUp').style.display='block';
});


let closein = document.querySelector('.close');
closein.addEventListener('click',function(){
  document.querySelector('.signIn').style.display='none';
});

let closeup=document.querySelector('#closeUp');
closeUp.addEventListener('click',function(){
  document.querySelector('.signUp').style.display='none';
});

let allPost = document.querySelector('#allPost');
allPost.addEventListener('click',function(){
  window.location.href="html/bloglist.html";
});
let createPost = document.querySelector('#createPost');
createPost.addEventListener('click',function(){
  document.querySelector('.createPost').style.display='block';
});

let closePost = document.querySelector('#closePost');
closePost.addEventListener('click',function(){
  createPost = document.querySelector('.createPost').style.display='none';
});
