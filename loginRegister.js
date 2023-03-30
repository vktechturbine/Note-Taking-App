/* Registration */

function register() {
    let registerValue = document.getElementById('exampleInputEmail2').value;
    let users = Object.keys(localStorage);

    for (let i = 0; i < users.length; i++) {

        if (registerValue == users[i]) {
            alert("user is already present");
            break;
        }

    }
    localStorage.setItem(registerValue, "");
    

}


document.getElementById('login').onclick = function() {
    let loginValue = document.getElementById('exampleInputEmail2').value;
    let userNotFFound = 0;
    let users = Object.keys(localStorage);
    for (let i = 0; i < users.length; i++) {
        if (loginValue == users[i]) {
            alert(`Welcome ${loginValue} in Notes`);
            document.getElementById('redirect').setAttribute('action', "/index.html");
            
           console.log(users[i]);
            localStorage.setItem("username",users[i]);
            userNotFFound = 1;
           
        }

    }
    if (userNotFFound == 0) {
        alert("Invalid user, Please Register fiirst");
    }

}
