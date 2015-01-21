(function() {
  // CHALLENGE 3 
  // Do we need to or can we validate the select field???  
    document.forms.login.onsubmit = function(){
      var inputArray = document.getElementsByTagName('input');
      var emailRegex = /.+@.+\..+/ ;
      var ccRegex = /^[34][0-9]{9,15}$/ ; 
      var ccExpRegex = /(0[1-9]|1[0-2])\/[0-9]{2}/;
      var nameRegex = /^[a-zA-Z ]{2,30}$/;
      var cvvRegex = /^[0-9]{3,4}$/;
        if(!(emailRegex.test(inputArray[0].value)) || (inputArray[0].value === "")){
          window.alert('Please input a valid email.' );
          inputArray[0].focus();
          return false;
      }
      if(!(ccRegex.test(inputArray[1].value)) || (inputArray[1].value === "")){
          window.alert('Please input a valid credit card number.' );
          inputArray[1].focus();
          return false;
      }
      if(!(ccExpRegex.test(inputArray[2].value)) || (inputArray[2].value === "")){
          window.alert('Please input a valid credit card expitation date.' );
          inputArray[2].focus();
          return false;
      }
      if(!(nameRegex.test(inputArray[3].value))|| (inputArray[3].value === "")){
          window.alert('Please input a valid name.' );
          inputArray[3].focus();
          return false;
      }
      if(!(cvvRegex.test(inputArray[4].value)) || (inputArray[4].value === "")){
          window.alert('Please enter a valid CVV.');
          inputArray[4].focus();
          return false;
      }
      if(!(nameRegex.test(inputArray[5].value)) || (inputArray[5].value === "")){
          window.alert('Please enter a valid city.');
          inputArray[4].focus();
          return false;
      }
      window.alert(inputArray[]
      window.alert("You win!" );
     return false;
    };
  
  // CHALLENGE 1  
  //      if(myForm. === ""){
    //    window.alert('' );
//        myForm..focus();
//        return false;
//      }
  //
   // var  title = document.getElementsByTagName('title');
//    title[0].textContent = "My JavaScript Blog";
//    
//    var headerOne = document.getElementsByTagName('h1');
//   headerOne[0].textContent = "My JavaScript BLog";
//    
//    var articleOne = document.getElementsByTagName('article');
//    var postOneTitle = document.createElement('h1');
//    var fistPostPara = document.getElementsByTagName('p');
//    articleOne[0].insertBefore(postOneTitle, fistPostPara[0]);
//    //postOneTitle.innerHTML = "My First Blog Post";
//    postOneTitle.textContent = "My First Blog Post";

 // CHALLENGE 2      
  
//    var parentElement = articleOne[0].parentNode;
//    var  newArticle = document.createElement('article');
//    newArticle.innerHTML  = "<h1>My Second Blog Post</h1><p>This is a blog post about really awesome stuff I've done in JavaScript.</p>"; 
//   parentElement.insertBefore(newArticle, articleOne[0]);
//   
//   var allPara = document.getElementsByTagName('h1');
//   var arrayLen = allPara.length;
//   function showPara(){
//     var thisPara = this.nextSibling;
//      if(thisPara.style.display === 'none'){
//      (thisPara).style.display='block';
//      } else
//      {
//        (thisPara).style.display='none';
//      }
//      
//   }
//   function highlightArticle(){
//     var wholeArticle = this.parentNode;
//     if(wholeArticle.style.backgroundColor === "white"){
//      wholeArticle.style.backgroundColor="yellow";
//     } else {
//      wholeArticle.style.backgroundColor="white";
//     }
//   }
//   for(ii = 0;ii < articleOne.length; ii++){
//     console.log(articleOne[ii]);
//    articleOne[ii].style.backgroundColor='white';
//   }
//   for(ii = 0;ii < arrayLen; ii++)
//   {
//      if(ii > 0) {
//        allPara[ii].setAttribute('class','eventShow');
//        allPara[ii].addEventListener('click', showPara ,false);
//      }
//   }
//
//   for(ii = 0;ii < fistPostPara.length; ii++)
//   {
//    fistPostPara[ii].style.display='none';
//    fistPostPara[ii].setAttribute('class','colorBack');
//    fistPostPara[ii].addEventListener('click',highlightArticle, false);
//   }

})();
