let posts = document.querySelectorAll('.trash');

for(var i=0;i<posts.length;i++)
{
  posts[i].addEventListener('click',function(){
    document.querySelector('#modal').style.display='block';
  });
}

document.querySelector('.red').addEventListener('click',function(){
document.querySelector('#modal').style.display='none';

});
document.querySelector('.green').addEventListener('click',function(){
document.querySelector('#modal').style.display='none';

});
let dots = document.querySelectorAll('.dots');
for(var i=0;i<dots.length;i++)
{
  dots[i].addEventListener('click',function(){
    window.location.href='post.html';
  });
}
let para=document.querySelectorAll('p');
for(var i=0;i<para.length;i++)
{
  para[i].style.cursor='pointer;'
  para[i].addEventListener('click',function(){
    window.location.href='post.html';
  });
}
