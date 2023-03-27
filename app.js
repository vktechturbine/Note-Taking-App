/* $('#myModal').on('shown.bs.modalw', function () {
    $('#myInput').trigger('focus')
  }) */

// if( localStorage.length > 0 )
// {
    /* window.onload(()=>
    {
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        for(let i = 0; i < title.length; i++)
        {
            addData(title[i],desc[i]);
        }
    }) */
// }
// else
// {


let user;
let notes = [];

   

document.getElementById('save').onclick = function () {
    user = {
        title: document.getElementById('exampleInputEmail1').value,
        description: document.getElementById('exampleFormControlTextarea1').value
    }
    // addData(user.title,user.description);
    if( notes.length == 0 && localStorage.length > 0)
    {
        console.log(Object.keys(localStorage)[0] == "user");
        notes = notes.concat(JSON.parse(localStorage.user));
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length-1],desc[desc.length-1])
        console.log((title[title.length-1],desc[desc.length-1]))
        
        
    }
    else
    {
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length-1],desc[desc.length-1]);
    }
      

    setTimeout(() => {
        document.getElementById('exampleInputEmail1').value = "";
        document.getElementById('exampleFormControlTextarea1').value = "";
    },)
}


  
/* let usr = JSON.parse(localStorage.user);
for(let u of usr)
{
   document.createElement()
} */

// let  a=[];
// for(let u of JSON.parse(localStorage.user))
// {
  
//   a.push(u);
  
// }
// console.log(a[0].title);

//    for(let i = 0; i < a.length;i++ )
if(window.performance.navigation.TYPE_RELOAD == window.performance.navigation.type )
    {
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        for(let i = 0; i < title.length; i++)
        {
            addData(title[i],desc[i]);
        }
      
    }
// console.log(window.performance.navigation.type);
function addData(title, description)
{


     let div1 = document.createElement('div'); 
    // let divid = document.createAttribute('id');
    div1.setAttribute("id","divid2")
    div1.style.cssText = "overflow: hidden; overflow-y:scroll; border: 1px solid black; width:50vh; height:50vh; margin-left:15px; position:relative;margin-top:15px;margin-bottom:15px;"

   
   
    let h1 = document.createElement('h1');
    h1.style.paddingLeft = "10px"
    h1.style.paddingRight = "10px"
    h1.style.display= "inline-flex";
    h1.style.flex="wrap";
  
    h1.style.margin="5px"
    h1.style.width = "100%";
    let hr= document.createElement('HR');
  //   hr.style.olor = "red";
    hr.style.cssText = "width:95%";
    // hr.style.cssText =" border:none; height: 20px; width: 105%; height: 50px; border-bottom: 1px solid #1f1209;  margin: -45px -8px"
    
    h1.innerHTML = `${title}`;
  

    // let p = document.createElement('textarea');
    /* p.style.padding="10px";
    p.style.width="100% ";
    p.style.height="100%";
    p.style.border="none";
    p.style.outline= "none";
    p.style.overflow="hidden;"; */
    /* p.style.overflowY="scroll" */
    /* p.innerHTML=`${description}`;   */          
                 
  let div2 = document.createElement('div');
  // let div2id = document.createAttribute('id');
  div2.setAttribute("id","divid2");
  div2.style.cssText = "overflow-x:hidden; width:97%;  height:65%;overflow-y:scroll;margin-top:10px; margin-left:5px; margin-right:5px; margin-bottom:15px";
//   div2.append(p);
div2.innerHTML = `${description.replace(/.+/g, "<div class='rslines'>$&</div>")}`;  
    document.getElementById('content').append(div1);
    
    let br = document.createElement('br');

    
    div1.append(h1);
    div1.append(hr);
    div1.append(div2); 
}
 
    // setTimeout(function () { location.reload(true); }, 1000);


// document.write(`<h1 style="margin-top:20px;">${usr.title}</h1>`)
// let usr = JSON.parse(localStorage.user);

// console.log(usr.title[0]);
//         let h1 = document.createElement('h1');
//         let id = document.createAttribute('title');
//         document.getElementById('title').innerHTML = `${usr.title[0]}`;

//         document.getElementById('content').append(h1);
// console.log()



