
let user;
let notes = [];



document.getElementById('save').onclick = function () {
    user = {
        title: document.getElementById('exampleInputEmail1').value,
        description: document.getElementById('exampleFormControlTextarea1').value
    }

    if (notes.length == 0 && localStorage.length > 0) {
        console.log(Object.keys(localStorage)[0] == "user");
        notes = notes.concat(JSON.parse(localStorage.user));
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length - 1], desc[desc.length - 1], title.length - 1)
        console.log((title[title.length - 1], desc[desc.length - 1]))


    }
    else {
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length - 1], desc[desc.length - 1], title.length - 1);
    }


    setTimeout(() => {
        document.getElementById('exampleInputEmail1').value = "";
        document.getElementById('exampleFormControlTextarea1').value = "";
    },)
}




if (window.performance.navigation.TYPE_RELOAD == window.performance.navigation.type) {
    let title = JSON.parse(localStorage.user).map(object => object.title)
    let desc = JSON.parse(localStorage.user).map(object => object.description)
    for (let i = 0; i < title.length; i++) {
        addData(title[i], desc[i], i);
    }

}

function addData(title, description, i) {

    const container = document.getElementById('note_container')
    container.innerHTML += `<div class="col mb-4" id="colu"><div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description.replace(/.+/g, "<p class='rslines'>$&</p>")}</p>
  <a class="btn btn-primary" onclick="onDelete(${i})">delete</a>
  <a class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" onclick="onEditable(${i})">edit</a>
</div>
</div>
</div>`
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
}
/* Delete Option */
function onDelete(del) {

    let myarr = JSON.parse(localStorage.user);
    console.log(myarr);
    myarr.splice(del, 1);
    localStorage.setItem("user", JSON.stringify(myarr));
    window.location.reload();
}
/* search Otion */
document.getElementById('searchin').onkeyup = function () {


    let sarch = document.getElementById('searchin').value.toLowerCase();

    // console.log(sarch);

    let title = JSON.parse(localStorage.user).filter(object => object.title.toLowerCase().includes(sarch));

    let desc = JSON.parse(localStorage.user).filter(object => object.description.toLowerCase().includes(sarch));



    if (title.length > 0) {
        document.getElementById('note_container').innerHTML = "";
        for (let i = 0; i < title.length; i++) {

            addData(title[i].title, title[i].description, i);
            

        }

    }
    else {
        document.getElementById('note_container').innerHTML = "";
        for (let i = 0; i < desc.length; i++) {

            addData(desc[i].title, desc[i].description, i);

        }
    }




}

/* Edit Option */

let edit_id ;
function onEditable(edit) {
    edit_id = edit;
    let title = JSON.parse(localStorage.user).map(object => object.title);

    let desc = JSON.parse(localStorage.user).map(object => object.description);

    for(let i = 0; i < title.length; i++)
    {
        if(edit == i)
        {
            let title1 = document.getElementById('editTitle').value = title[i];
            let desc1 = document.getElementById('editDescription').value = desc[i];

        }
    }

}

 document.getElementById('saveas').onclick = function(){
    let titlevalue = document.getElementById('editTitle').value ;
    let descvalue = document.getElementById('editDescription').value;

    let editArray = JSON.parse(localStorage.user);

    console.log(editArray);
    editArray.splice(edit_id,1,{title : titlevalue, description : descvalue});
    localStorage.setItem("user", JSON.stringify(editArray));
    window.location.reload();
    console.log(editArray);

 
} 

