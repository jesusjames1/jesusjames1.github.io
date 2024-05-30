let buttonclick = document.getElementById('jar');

buttonclick.addEventListener('click', function myFunction(){
    // Get the value of the input field with id="numb"
    let x = document.getElementById("number1").value;
    // If x is Not a Number or less than one or greater than 10
    if ( x < 1 || x > 20) {
      document.getElementById("inputmessage").innerHTML = "Please enter a number between 1 and 20";
      document.getElementById("number1").value = ""
    } else {
    let cartclick = document.getElementById('cartButton');

  document.getElementById("inputmessage").innerHTML = "Your current total is: $" + (x*12.99)

cartclick.addEventListener('click', function myFunction(){
  alert('Your cart has been updated, Click to continue to cart');

document.getElementById("closeForm").submit();

})}
} );

let buttonclick2 = document.getElementById('jas');

buttonclick2.addEventListener('click', function myFunction(){
    // Get the value of the input field with id="numb"
    let x = document.getElementById("number2").value;
    document.getElementById("number2").value = ""

    // If x is Not a Number or less than one or greater than 10
    if ( x < 1 || x > 20) {
      document.getElementById("inputmessage2").innerHTML = "Please enter a number between 1 and 20"
    } else {    
    document.getElementById("inputmessage2").innerHTML = "Your current total is: $" + (x*12.99);

    let cartclick2 = document.getElementById('cartButton2');

cartclick2.addEventListener('click', function myFunction(){
alert('Your cart has been updated, Click to continue to cart');

document.getElementById("closeForm2").submit();
})}
  } );

  let buttonclick3 = document.getElementById('jat');

  buttonclick3.addEventListener('click', function myFunction(){
      // Get the value of the input field with id="numb"
      let x = document.getElementById("number3").value;
      document.getElementById("number3").value = ""

      // If x is Not a Number or less than one or greater than 10
     console.log(typeof x)
      if ( x < 1 || x > 20) {
        document.getElementById("inputmessage3").innerHTML = "Please enter a number between 1 and 20";

      } else {    
      document.getElementById("inputmessage3").innerHTML = "Your current total is: $" + (x*12.99);
        
      let cartclick3 = document.getElementById('cartButton3');
  
  cartclick3.addEventListener('click', function myFunction(){
  alert('Your cart has been updated, Click to continue to cart');
  
  document.getElementById("closeForm3").submit();
  })}
    } );

    let buttonclick4 = document.getElementById('jau');

  buttonclick4.addEventListener('click', function myFunction(){
      // Get the value of the input field with id="numb"
      let x = document.getElementById("number4").value;
      document.getElementById("number4").value = ""

      // If x is Not a Number or less than one or greater than 10
      if ( x < 1 || x > 20) {
        document.getElementById("inputmessage4").innerHTML = "Please enter a number between 1 and 20"
      } else {    
      document.getElementById("inputmessage4").innerHTML = "Your current total is: $" + (x*12.99);
  
      let cartclick4 = document.getElementById('cartButton4');
  
  cartclick4.addEventListener('click', function myFunction(){
  alert('Your cart has been updated, Click to continue to cart');
  
  document.getElementById("closeForm4").submit();
  })}
    } );

    let buttonclick5 = document.getElementById('jav');

  buttonclick5.addEventListener('click', function myFunction(){
      // Get the value of the input field with id="numb"
      let x = document.getElementById("number5").value;
      document.getElementById("number5").value = ""

      // If x is Not a Number or less than one or greater than 10
      if ( x < 1 || x > 20) {
        document.getElementById("inputmessage5").innerHTML = "Please enter a number between 1 and 20"
      } else {    
      document.getElementById("inputmessage5").innerHTML = "Your current total is: $" + (x*12.99);
  
      let cartclick5 = document.getElementById('cartButton5');
  
  cartclick5.addEventListener('click', function myFunction(){
  alert('Your cart has been updated, Click to continue to cart');
  
  document.getElementById("closeForm5").submit();
  })}
    } );

    let buttonclick6 = document.getElementById('jaw');

  buttonclick6.addEventListener('click', function myFunction(){
      // Get the value of the input field with id="numb"
      let x = document.getElementById("number6").value;
      document.getElementById("number6").value = ""

      // If x is Not a Number or less than one or greater than 10
      if ( x < 1 || x > 20) {
        document.getElementById("inputmessage6").innerHTML = "Please enter a number between 1 and 20"
      } else {    
      document.getElementById("inputmessage6").innerHTML = "Your current total is: $" + (x*12.99);
  
      let cartclick6 = document.getElementById('cartButton6');
  
  cartclick6.addEventListener('click', function myFunction(){
  alert('Your cart has been updated, Click to continue to cart');
  
  document.getElementById("closeForm6").submit();
  })}
    } );