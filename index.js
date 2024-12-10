// alert("asdasdas")

// import Swal from 'sweetalert2'



// function myFunction() {
//     Swal.fire({
//         title: "Custom width, padding, color, background.",
//         width: 600,
//         padding: "3em",
//         color: "#716add",
//         background: "#fff url(/images/trees.png)",
//         backdrop: `
//           rgba(0,0,123,0.4)
//           url("/images/nyan-cat.gif")
//           left top
//           no-repeat
//         `
//       });
  
// }


// function generatePassword(length) {
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset.charAt(randomIndex);
//   }
//   return password;
// }

// // Example usage:
// const passwordLength = 10;
// const generatedPassword = generatePassword(passwordLength);
// console.log(generatedPassword);


const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const contentDiv = document.getElementById('content');

const correctPassword = '123094'; // Replace with your desired password

loginButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;
  if (enteredPassword === correctPassword) {
    contentDiv.style.display = 'block';
    passwordInput.value = ''; // Clear the password field
    const myDiv = document.getElementById("login-form");
    myDiv.textContent = ''
  } else {
    alert('Incorrect password. Please try again.');
  }
});