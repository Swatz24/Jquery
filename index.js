//Make sure the function loaded after the DOM
$(document).ready(() => {

//Create a function that will fire when the submit <button> is clicked

const submitElm = $("#submit").on("click", function(){
console.log("Submit Button is clicked!");


  //create variables for each of the form inputs
const nameElm = $("#name");
const emailElm = $("#email");
console.log()
const phoneElm = $("#phone");
const msgElm = $("#message-area");
let formElm = $("#form");
let messageElm = $("#message").html();
// create an array named required
// store the variables you've name, email, and phone number
const required= [nameElm, emailElm, phoneElm, msgElm];
console.log(required);

for (let i=0; i<4; i++){
  let labelElm = required[i].prev(); 
    if(required[i].val()===""){
    $("#message").html("Please fill out the required fields");
    $("#message").attr("class", "warning"); //add the warning class to this message
    //console.log(messageElm);
    labelElm.attr("class", "warning"); //Attach the warning class to the array item's <label>
    }
    else{
      //once the field has something other than a blank string. make sure the warning class is removed
      $("#message").html("");
      labelElm.removeClass("warning");
    }
}
// utilize another if statement
// verify that no <label>'s have the warning class

if (!($("label").hasClass("warning"))){


  $("#form").remove(); //remove the form from the DOM
  $("h2").html("Thanks for the feedback"); //manipulate the <h2> to say: "Thanks for your feedback!"
}
}
);

});

