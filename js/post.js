let edit=document.querySelector('.edit');
let flag=false;
edit.addEventListener('click',function(){
  let blog=  document.querySelector('#blogBody');

  if(flag)
  {
    edit.innerHTML='Edit <i class="fa fa-edit"></i>';
    blog.contentEditable = "false";
    flag=false;
    blog.blur();
  }else{
    edit.innerHTML='Save <i class="fa fa-save"></i>';
    blog.contentEditable = "true";
    blog.focus();
    flag=true;
  }
});
let count=0;
let like = document.querySelector('#like');
let liketext = document.querySelector('.likeText');
like.addEventListener('click',function(){
  if(count===0)
  {
    like.innerHTML='<i class="fa fa-thumbs-up"></i> Liked!';
    count++;
    liketext.innerText=count+' person likes this!';
  }
  else {
    count++;
    liketext.innerText=count+' people have liked this!';
  }
});
let comment = document.querySelector('#comment');
let comments = document.querySelector('#comments');
let comText=  document.querySelector('.comtext');
comment.addEventListener('click',function(){
  if(comText.value){
    let temp = document.createElement('p');
    temp.className='commentSyling';
    temp.innerHTML=comText.value;
    comments.insertBefore(temp,comments.firstChild);
    comText.blur();
    comText.value=null;
  }
});
