let users = [{}, {}]

const nameInput=document.getElementById("name");
const adviseInput=document.getElementById("advise");
const submitButton=document.getElementById("submit");

submitButton.addEventListener("mouseover",(button)=>{
    let name=nameInput.value;
    let advise = adviseInput.value;

    let validate=/[a-zA-Z]/.test(name)&&/[a-zA-Z]/.test(advise)

    if(!validate){
        button.target.classList.toggle("move");
    }
})
function alertButton(){
    alert("मैं आपके प्यार और आशीर्वाद का आभारी हूं ,मैं इन बातों को हमेशा अपने दिल में रखूंगा।,please send me screenshot of your Advise"
    
    )
}
// if(localStorage.getItem('name')&&localStorage.getItem('advise')){
//     document.getElementById('name').value=localStorage.getItem('name');
//     document.getElementById('advise').value=localStorage.getItem('advise');

// }
if(localStorage.getItem('user')){
    // parse to JSON object
    let obj = JSON.parse(localStorage.getItem('user'))

    document.getElementById('name').value = obj.name;
    document.getElementById('advise').value=obj.advise;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name= document.getElementById('name').value;
    let advise= document.getElementById('advise').value;

    let user = {
        name:name,
        advise:advise

    }
    // localstorage

    localStorage.setItem('user',JSON.stringify(user))
    console.log(JSON.stringify(user))

    // localStorage.setItem('name',name)
    // localStorage.setItem('advise',advise)

    

})