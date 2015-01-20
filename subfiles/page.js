(function() {
  // CHALLENGE 1  
  //
  //
    var  title = document.getElementsByTagName('title');
    title[0].textContent = "My JavaScript Blog";
    
    var headerOne = document.getElementsByTagName('h1');
   headerOne[0].textContent = "My JavaScript BLog";
    
    var articleOne = document.getElementsByTagName('article');
    var postOneTitle = document.createElement('h1');
    var fistPostPara = document.getElementsByTagName('p');
    articleOne[0].insertBefore(postOneTitle, fistPostPara[0]);
    //postOneTitle.innerHTML = "My First Blog Post";
    postOneTitle.textContent = "My First Blog Post";

 // CHALLENGE 2      
  
    var parentElement = articleOne[0].parentNode;
    var  newArticle = document.createElement('article');
    newArticle.innerHTML  = "<h1>My Second Blog Post</h1><p>This is a blog post about really awesome stuff I've done in JavaScript.</p>"; 
   parentElement.insertBefore(newArticle, articleOne[0]);
   
   var allPara = document.getElementsByTagName('h1');
   var arrayLen = allPara.length;
   function showPara(){
     var thisPara = this.nextSibling;
      if(thisPara.style.display === 'none'){
      (thisPara).style.display='block';
      } else
      {
        (thisPara).style.display='none';
      }
      
   }
   function highlightArticle(){
     var wholeArticle = this.parentNode;
     if(wholeArticle.style.backgroundColor === "white"){
      wholeArticle.style.backgroundColor="yellow";
     } else {
      wholeArticle.style.backgroundColor="white";
     }
   }
   for(ii = 0;ii < articleOne.length; ii++){
     console.log(articleOne[ii]);
    articleOne[ii].style.backgroundColor='white';
   }
   for(ii = 0;ii < arrayLen; ii++)
   {
      if(ii > 0) {
        allPara[ii].setAttribute('class','eventShow');
        allPara[ii].addEventListener('click', showPara ,false);
      }
   }

   for(ii = 0;ii < fistPostPara.length; ii++)
   {
    fistPostPara[ii].style.display='none';
    fistPostPara[ii].setAttribute('class','colorBack');
    fistPostPara[ii].addEventListener('click',highlightArticle, false);
   }







})();
