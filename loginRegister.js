/* Registration */
console.log("object");
const register = () => {
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
// export const userName = "";

function login() {
    let loginValue = document.getElementById('exampleInputEmail2').value;
    let userNotFFound = 0;
    let users = Object.keys(localStorage);
    for (let i = 0; i < users.length; i++) {
        if (loginValue == users[i]) {
            alert(`Welcome ${loginValue} in Notes`);
            // document.getElementById('redirect').setAttribute('action', "./index.html");
            console.log(loginValue);
            userName = users[i];
            userNotFFound = 1;
            location.replace('/index.html');
        }

    }
    if (userNotFFound == 0) {
        alert("Invalid user, Please Register fiirst");
    }

}
