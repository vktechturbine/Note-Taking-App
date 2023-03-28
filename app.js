
let user;
let notes = [];

   

document.getElementById('save').onclick = function () {
    user = {
        title: document.getElementById('exampleInputEmail1').value,
        description: document.getElementById('exampleFormControlTextarea1').value
    }
    
    if( notes.length == 0 && localStorage.length > 0)
    {
        console.log(Object.keys(localStorage)[0] == "user");
        notes = notes.concat(JSON.parse(localStorage.user));
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length-1],desc[desc.length-1],title.length-1)
        console.log((title[title.length-1],desc[desc.length-1]))
        
        
    }
    else
    {
        notes.push(user);
        localStorage.setItem("user", JSON.stringify(notes))
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        addData(title[title.length-1],desc[desc.length-1],title.length-1);
    }
      

    setTimeout(() => {
        document.getElementById('exampleInputEmail1').value = "";
        document.getElementById('exampleFormControlTextarea1').value = "";
    },)
}


  

if(window.performance.navigation.TYPE_RELOAD == window.performance.navigation.type )
    {
        let title = JSON.parse(localStorage.user).map(object => object.title)
        let desc = JSON.parse(localStorage.user).map(object => object.description)
        for(let i = 0; i < title.length; i++)
        {
            addData(title[i],desc[i],i);
        }
      
    }

function addData(title, description,i)
{


     let div1 = document.createElement('div'); 
   
    div1.setAttribute("id","divid2")
    div1.style.cssText = "overflow: hidden; overflow-y:scroll; border: 1px solid black; width:50vh; height:50vh; margin-left:15px; position:relative;margin-top:15px;margin-bottom:15px;"

   
   let titlediv = document.createElement('div');
   titlediv.style.cssText = "width:40vh; height:7vh; margin-left:10px; margin-top:-50px;overflow-x:scroll; overflow-y:hidden";
    titlediv.setAttribute("id","divid2");
    let h1 = document.createElement('h1');
    h1.style.paddingLeft = "10px"
    h1.style.paddingRight = "10px"
    h1.style.display= "inline-flex";
    h1.style.flex="wrap";
  
    h1.style.margin="5px";
    h1.style.width = "100%";
    let btn = document.createElement('img');
    btn.setAttribute("src","./images/close.png");
    btn.setAttribute("id",i);
    btn.setAttribute("onclick",`onDelete(${i})`);
    btn.style.cssText = "margin-left:385px;margin-top:10px; width:50px; height:50px;";
    btn.innerHTML = "delete";
    
    let hr= document.createElement('HR');

    hr.style.cssText = "width:95%";
    
    h1.innerHTML = `${title}`;
  

         
                 
  let div2 = document.createElement('div');
  div2.setAttribute("id","divid2");
  div2.style.cssText = "overflow-x:hidden; width:97%;  height:65%;overflow-y:scroll;margin-top:10px; margin-left:5px; margin-right:5px; margin-bottom:15px";

div2.innerHTML = `${description.replace(/.+/g, "<div class='rslines'>$&</div>")}`;  
    document.getElementById('content').append(div1);
    
    let br = document.createElement('br');

    titlediv.append(h1);
    div1.append(btn);
    div1.append(titlediv);
    div1.append(hr);

    div1.append(div2); 
}
 
    
function onDelete(del)
{
    let myarr = JSON.parse(localStorage.user);
    console.log(myarr);
    myarr.splice(del,1);
    localStorage.setItem("user",JSON.stringify(myarr));
    window.location.reload();
}
document.getElementById('searchin').onkeyup = function(){
    

    let sarch = document.getElementById('searchin').value.toLowerCase();

    let title = JSON.parse(localStorage.user).filter(object => object.title.toLowerCase().includes(sarch));

    let desc = JSON.parse(localStorage.user).filter(object => object.description.toLowerCase().includes(sarch));


    
    if(title.length > 0)
    {
        document.getElementById('content').innerHTML = "";
        for(let i = 0 ; i < title.length;i++)
        {
           
            addData(title[i].title,title[i].description,i);
            
        }
        
    } 
    else
    {
        document.getElementById('content').innerHTML = "";
        for(let i = 0 ; i < desc.length;i++)
        {
           
            addData(desc[i].title,desc[i].description,i);
            
        }
    }
    
    


}


