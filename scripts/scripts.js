var counter = 2;
function login() {
    if (counter % 2 == 0) {
        alert('You have been logged in!');
    } else {
        alert('You have been logged out!');
    }
    counter += 1;
}

function send_form(id,content) {
    var contain = document.getElementById(id);
    contain.innerHTML = content;
}