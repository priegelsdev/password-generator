const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let output1 = document.querySelector(".password-one");
let output2 = document.querySelector(".password-two");
let randomNum;
let randomChar;
let password = "";

let value;


function generatePassword() {
  value = document.getElementById("pw-length").value;

  for (let i = 0; i < value; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    randomChar = characters[randomNum];
    password += randomChar;
  }
  output1.innerText = password;
  password = "";

  for (let j = 0; j < value; j++) {
    randomNum = Math.floor(Math.random() * characters.length);
    randomChar = characters[randomNum];
    password += randomChar;
  }
  output2.innerText = password;
  password = "";
}
