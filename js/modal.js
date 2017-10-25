// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the text from the form input by the user
function formDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    document.getElementById("details").innerHTML = "Name: " + name + "<br>"
    + "Email: " + email + "<br>"
    + "Phone: " + phone + "<br>";

}

//diplays the form details collected from the function formDetails


// When the user clicks on the button, open the modal
btn.onclick = function() {
  formDetails();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


        
        
    
