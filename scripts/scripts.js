/* Define login script that prompts user when username and PW is entered */

var counter = 2;
function login1() {

    var email = document.forms["login"]["email"].value;
    var password = document.forms["login"]["password"].value;

    if (email == "") {
        alert("Please provide an email");
    } else {
        if (password == "") {
            alert("Please provide a password");
        } else {
            if (counter % 2 == 0) {
                document.getElementById("emailF").disabled = true;
                document.getElementById("passwordF").disabled = true;
                document.getElementById("loginB").innerHTML = "Log Out";
                alert('You have been logged in!');
            } else {
                document.getElementById("emailF").disabled = false;
                document.getElementById("passwordF").disabled = false;
                document.getElementById("loginB").innerHTML = "Log In";
                alert('You have been logged out!');
            }
            counter += 1;
        }
    }

}

/* Function for prompting user that form has been submitted */
function send_form(id,content) {
    var contain = document.getElementById(id);
    contain.innerHTML = content;
    contain.hidden = false;
}