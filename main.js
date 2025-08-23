const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navlist");
hamburger.addEventListener("click", () => {
   list.classList.toggle("list-active");
});


const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.open("https://thaagam.org/");
});




         // ADDING DETAILS OF THE USER TO THE SHEET!

const scriptURL = 'https://script.google.com/macros/s/AKfycbwimyt0jbxW4vrUAS_TuuXqVsTtyX1mARd9j17teoB6NXAUxF_8YsbqfyvMC07bKEIijA/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })




  const btn2 = document.querySelector("#submit");
  btn2.addEventListener("click", () => {
    checkPlaceholder();
  });

function checkPlaceholder() {
  let input1 = document.querySelector("#name"); // name 
  let input2 = document.querySelector("#email"); // email
  let input3 = document.querySelector("#msg"); // message

  const name = input1.value.trim();
  const email = input2.value.trim();
  const msg = input3.value.trim();

  if (name !== "" && email !== "" && msg !== "") {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("message",msg);
    
      alert("Plz wait while we redirect you to the payment page!");
    const scriptURL = "https://script.google.com/macros/s/AKfycbwimyt0jbxW4vrUAS_TuuXqVsTtyX1mARd9j17teoB6NXAUxF_8YsbqfyvMC07bKEIijA/exec";
    fetch(scriptURL,{method: 'POST', body: formData})
    .then((response) => {
      window.open("https://thaagam.org/referral/qpay/OHDPI/");
       input1.value = "";
      input2.value = "";
      input3.value = "";
    })
    .catch((err) => {
      alert('Server Error!, please try again later');
      console.log("Error occurred",err.message);
    })
  } else {
    alert('Please fill all fields!');
  }
}