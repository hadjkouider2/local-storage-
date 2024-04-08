// localStorage.setItem("key","value");
// localStorage.getItem("key");
// localStorage.clear();

const local = JSON.parse(localStorage.getItem("user"));

if(local!=null){
    h1.textContent = `Bonjour ${local.nom} , tu as ${local.age} ans`;
}


button.onclick = () => {
    const user = {
        nom : nom.value ,
        age : age.value 
    }
    localStorage.setItem("user",JSON.stringify (user));
    document.location.reload();
}
clear.onclick = () => {
    localStorage.clear();
    document.location.reload();
}