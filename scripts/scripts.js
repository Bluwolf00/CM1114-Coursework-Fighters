/* Define login script that prompts user when username and PW is entered */

var counter = 2;
function login1() {
    if (counter % 2 == 0) {
        document.getElementById("loginB").innerHTML = "Log Out";
        alert('You have been logged in!');
    } else {
        document.getElementById("loginB").innerHTML = "Log In";
        alert('You have been logged out!');
    }
    counter += 1;
}

/* Function for prompting user that form has been submitted */
function send_form(id,content) {
    var contain = document.getElementById(id);
    contain.innerHTML = content;
    contain.hidden = false;
}