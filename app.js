
// toggle button 
const menubtn = document.getElementById("toggle")
const links = document.querySelector('.link')
menubtn.addEventListener('click',()=>{
    links.classList.toggle("menu")

})

// Automatic Slideshow - change image every 2 seconds
var myIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("img-fluid");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(slide, 2000);
}



// top btn 


var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic

  //ROOT elements are also called document elements.
  //rootElement returns the Element that is the root element of the document
  rootElement.scrollTo({
    top: 0,

   // auto	Allows a straight jump "scroll effect" between elements within the scrolling box. This is default
//smooth	Allows a smooth animated "scroll effect" between elements within the scrolling box.
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


//suggesstion 

let  validateemail = () =>
{
    var email= document.getElementById('exampleFormControlInput1').value;
    emailError.style.display = 'block';
    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        setTimeout(function(){emailError.style.display = 'none';}, 1000);
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

let validatemessage= () =>{
    var message= document.getElementById('exampleFormControlTextarea1').value;
    messageError.style.display = 'block';
    var required = 30;
    var left = required - message.length; // gives value how much character is left
    if(left > 0){
      messageError.innerHTML = left + ' more Characters Required';
        setTimeout(function(){messageError.style.display = 'none';}, 1000);
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateform(){
    if(!validatemessage() || !validateemail()){
      submitError.style.display = 'block';
      submitError.innerHTML = 'Please fill all the fields';
        setTimeout(function(){submitError.style.display = 'block';},1000);
        return false;
    }
    return true;
}