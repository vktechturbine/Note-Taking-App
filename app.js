/* import {userName} from "./loginRegister.js";*/
let username = localStorage.getItem('username'); 
document.getElementById('usernameid').innerHTML = username; 
if(localStorage.getItem(username) != "")
{
    addData();
}







document.getElementById('save').onclick = function () {
    let notes = [];
    let user;
    user = {
        title: document.getElementById('exampleInputEmail1').value,
        description: document.getElementById('exampleFormControlTextarea1').value
    }

    if (notes.length == 0  && localStorage.getItem(username) != "" ) {
        // console.log(Object.keys(localStorage)[0] == username);
        notes = notes.concat(JSON.parse(localStorage.getItem(username)));
       
        notes.unshift(user);

        localStorage.setItem(username, JSON.stringify(notes)) 

        // let title = JSON.parse(localStorage.user).map(object => object.title)
        // let desc = JSON.parse(localStorage.user).map(object => object.description)
        // console.log(title.length);
        /* 
       for(let i = 0; i < title.length ; i++)
       {
            addData(title[title.length - i], desc[title.length - i], title.length - i);
            break;
       } */
        //    addData(title[0], desc[0], 0);

        // addData(title[0], desc[0],)
        // console.log((title[title.length - 1], desc[desc.length - 1]))

        // window.location.reload();
        
    }
    else {
        console.log("else");
        notes.unshift(user);
        console.log(notes);
        localStorage.setItem(username, JSON.stringify(notes)) 
        // let title = JSON.parse(localStorage.user).map(object => object.title)
        // let desc = JSON.parse(localStorage.user).map(object => object.description)

        /* for(let i = 0; i < title.length ; i++)
        {
             addData(title[title.length - i], desc[title.length - i], title.length - i);
        } */
        // addData(title[title.length - 1], desc[title.length - 1], title.length - 1);
        // addData(title[0], desc[0], 0);
        // window.location.reload();

     }


    setTimeout(() => {
        document.getElementById('exampleInputEmail1').value = "";
        document.getElementById('exampleFormControlTextarea1').value = "";
    },)
   
        addData();
    
} 



 if (localStorage.getItem(username) != "") {
   
    if (window.performance.navigation.TYPE_RELOAD == window.performance.navigation.type) {
        
            addData();
        

    }
} 


function addData() {

    const notes = JSON.parse(localStorage.getItem(username));
    const container = document.getElementById('note_container')
    let html = '';
    notes.map((note, index) => {
        return (html += `<div class="col mb-4" id="colu"><div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${note.title}</h2>
          <p class="card-text">${note.description.replace(/.+/g, "<p class='rslines'>$&</p>")}</p>
          <a class="btn btn-default" onclick="onDelete(${index})"><img style="width:35px; height:35px;" src="./images/close.png"></a>
          <a class="btn btn-default" data-toggle="modal" data-target="#exampleModal1" onclick="onEditable(${index})"><img style="width:35px; height:35px;" src="./images/edit.png"></a>
        </div>
        </div>
        </div>`);
    })
    container.innerHTML = html;
} 

    //     let div1 = document.createElement('div'); 

    //     div1.setAttribute("id","divid2")
    //     div1.style.cssText = "overflow: hidden; overflow-y:scroll; border: 1px solid black; width:50vh; height:50vh; margin-left:15px; position:relative;margin-top:15px;margin-bottom:15px;"


    //     let titlediv = document.createElement('div');
    //     titlediv.style.cssText = "width:35vh; height:7vh; border:1px solid black; margin-left:10px; margin-top:-50px;overflow-x:scroll; overflow-y:hidden";
    //     titlediv.setAttribute("id","divid2");

    //     let h1 = document.createElement('h1');
    //     h1.style.paddingLeft = "10px"
    //     h1.style.paddingRight = "10px"
    //     h1.style.display= "inline-flex";
    //     h1.style.flex="wrap";
    //     h1.style.margin="5px";
    //     h1.style.width = "100%";

    //     let editbtn = document.createElement('img');
    //     editbtn.setAttribute("src","./images/edit.png")
    //     // editbtn.style.cssText = "margin-left:330px;margin-bottom:-50px; width:50px; height:50px;";
    //     editbtn.style.cssText = "width:50px; height:50px;";
    //     editbtn.setAttribute("onclick",`onEditable(${i})`);


    //     let btn = document.createElement('img');
    //     btn.setAttribute("src","./images/close.png");
    //     btn.setAttribute("id",i);
    //     btn.setAttribute("onclick",`onDelete(${i})`);
    //     btn.style.cssText = "margin-left:385px;margin-top:-10px; width:50px; height:50px;";
    //     // btn.innerHTML = "delete";

    //     let hr= document.createElement('HR');

    //     hr.style.cssText = "width:95%";

    //     h1.innerHTML = `${title}`;




    //   let div2 = document.createElement('div');
    //   div2.setAttribute("id","divid2");
    //   div2.style.cssText = "overflow-x:hidden; width:97%;  height:65%;overflow-y:scroll;margin-top:10px; margin-left:5px; margin-right:5px; margin-bottom:15px";

    // div2.innerHTML = `${description.replace(/.+/g, "<div class='rslines'>$&</div>")}`;  
    //     document.getElementById('content').append(div1);

    //     let br = document.createElement('br');

    //     titlediv.append(h1);
    //     div1.append(editbtn);                     
    //     div1.append(btn);
    //     div1.append(titlediv);
    //     div1.append(hr);

    //     div1.append(div2); 

/* Delete Option */
function onDelete(del) {

    let myarr = JSON.parse(localStorage.getItem(username));
    console.log(myarr);
    myarr.splice(del, 1);
    localStorage.setItem(username, JSON.stringify(myarr));
    // window.location.reload();
    addData();
}
/* search Otion */
document.getElementById('searchin').onkeyup = function () {


    let sarch = document.getElementById('searchin').value.toLowerCase();

    // console.log(sarch);

    let title = JSON.parse(localStorage.getItem(username)).filter(object => object.title.toLowerCase().includes(sarch));

    let desc = JSON.parse(localStorage.getItem(username)).filter(object => object.description.toLowerCase().includes(sarch));



    if (title.length > 0) {
        document.getElementById('note_container').innerHTML = "";
        let html = ""
        for (let i = 0; i < title.length; i++) {
            console.log(title[i].description);
           

            html+=`<div class="col mb-4" id="colu"><div class="card" style="width: 18rem;">
            <div class="card-body">
              <h2 class="card-title">${title[i].title}</h2>
              <p class="card-text">${title[i].description.replace(/.+/g, "<p class='rslines'>$&</p>")}</p>
              <a class="btn btn-default" onclick="onDelete(${i})"><img style="width:35px; height:35px;" src="./images/close.png"></a>
              <a class="btn btn-default" data-toggle="modal" data-target="#exampleModal1" onclick="onEditable(${i})"><img style="width:35px; height:35px;" src="./images/edit.png"></a>
            </div>
            </div>
            </div>`

            document.getElementById('note_container').innerHTML= html;



        }

    }
    if(desc.length > 0) {
        document.getElementById('note_container').innerHTML = "";
        let html = ""
        for (let i = 0; i < desc.length; i++) {

            console.log(desc[i].description);
           

            html+=`<div class="col mb-4" id="colu"><div class="card" style="width: 18rem;">
            <div class="card-body">
              <h2 class="card-title">${desc[i].title}</h2>
              <p class="card-text">${desc[i].description.replace(/.+/g, "<p class='rslines'>$&</p>")}</p>
              <a class="btn btn-default" onclick="onDelete(${i})"><img style="width:35px; height:35px;" src="./images/close.png"></a>
              <a class="btn btn-default" data-toggle="modal" data-target="#exampleModal1" onclick="onEditable(${i})"><img style="width:35px; height:35px;" src="./images/edit.png"></a>
            </div>
            </div>
            </div>`

            document.getElementById('note_container').innerHTML= html;

        }
    }




}

/* Edit Option */

let edit_id;
function onEditable(edit) {
    edit_id = edit;
    let title = JSON.parse(localStorage.getItem(username)).map(object => object.title);

    let desc = JSON.parse(localStorage.getItem(username)).map(object => object.description);

    for (let i = 0; i < title.length; i++) {
        if (edit == i) {
            let title1 = document.getElementById('editTitle').value = title[i];
            let desc1 = document.getElementById('editDescription').value = desc[i];

        }
    }

}

document.getElementById('saveas').onclick = function () {
    let titlevalue = document.getElementById('editTitle').value;
    let descvalue = document.getElementById('editDescription').value;

    let editArray = JSON.parse(localStorage.getItem(username));

    console.log(editArray);
    editArray.splice(edit_id, 1, { title: titlevalue, description: descvalue });
    localStorage.setItem(username, JSON.stringify(editArray));
    window.location.reload();
    console.log(editArray);


}

document.getElementById('logout').onclick = function()
{
    window.open("./index.html")
}