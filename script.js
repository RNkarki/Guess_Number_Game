// ?Only god an I understand this code
// !This generates a randomm number between 0 to 20
const maxNum = 20;
const  minNum = 1;
const answer = Math.floor(Math.random() * maxNum + minNum);

let guess; 
let running = true;
let attempt = 0;


document.getElementById("Submit-btn").onclick = function(){
  //while(running){
    attempt++;//! incrementing attempt
    document.getElementById("attempt_display").innerHTML = "Attempt = " + attempt;// ? Assigns the attempt value here
    guess = document.getElementById("input-box").value;
    guess = Number.parseInt(guess);
    
    if(isNaN(guess)){
      document.getElementById("result_display").innerHTML = "Please enter a valid Number";
    }else if(guess > maxNum || guess < minNum){
      document.getElementById("result_display").innerHTML = "Please enter a number between 1 and 20";
    }else{
      if(guess > answer){
        document.getElementById("result_display").innerHTML = "Your guess is higher, Try lower";
      }
      else if(guess < answer){
        document.getElementById("result_display").innerHTML = "Your guess is lower, Try higher";
      }
      else{
        document.getElementById("result_display").innerHTML = "Congratulations you have guessed the correct number in " + attempt + " attempts";
        running = false;
       }
      }
    }

// ! The code is reformated we have a new code more complex and good one
/*let CompGeneratedNum = Math.floor(Math.random() * 10 + 1);
document.getElementById("Submit-btn").onclick = function () {
  let enteredNum = document.getElementById("input-box").value;
  enteredNum = Number.parseInt(enteredNum);

  if (enteredNum === CompGeneratedNum) {
    document.getElementById("result_display").innerHTML =
      "Congratulations you have guessed the correct number";
  }else {
    document.getElementById("result_display").innerHTML =
      "Sorry you have guessed the wrong number, The number is ,Try again";
  }
};*/

/* Just for testing purposes
//Only god an I understand this code
//This generates a randomm number between 0 to 20
let CompGeneratedNum = Math.floor(Math.random() * 10 + 1);
console.log(CompGeneratedNum)

function guess() {
    let enteredNum = prompt("Enter")
    enteredNum = Number.parseInt(enteredNum)

    if(enteredNum === CompGeneratedNum){
        console.log("Congrats")}
        else{
       console.log("Try again")
    }
}

guess();    */
