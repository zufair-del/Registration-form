let Heading = document.querySelector('.Form_Heading');
let Underline = document.querySelector('.underline');
let Name = document.querySelector('.Name-section');
let Para = document.querySelector('.para');
let SignInButton = document.querySelector('.sign_In');
let SignUpButton = document.querySelector('.sign_Up');
SignInButton.addEventListener('click',()=>{
  Heading.innerHTML="Sign In";
  Underline.style.transform = 'translatex(28px)';
  Para.innerHTML="Forgot Password";
  Name.style.maxHeight='0';
  Container.style.maxHeight='350px';
});
SignUpButton.addEventListener('click', () => {
  Heading.innerHTML = "Sign Up";
  Underline.style.transform = 'translatex(0px)';
  Para.innerHTML="Suggestion Password";
  Name.style.maxHeight='60px';
  Container.style.maxHeight='400px';
});