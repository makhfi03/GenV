let apprenantsData;
async function apprenant(file){
    let data = await fetch(file);
    let apprenantsData = await data.json();

    let apprenantList = [];

    apprenantsData.forEach(apprenant => {
        apprenantList.push(apprenant);
    });
    
    localStorage.setItem("apprenants",JSON.stringify(apprenantList));
}
apprenant("json.json");

function afficherList(){
let list = localStorage.getItem("apprenants");
let appList = JSON.parse(list);
appList.forEach(element =>{
    let affichage = document.getElementById("carte_liste").innerHTML+=`
    <div class="block">
        <ul>
        <div class="image" >
            <img style="width: 6rem; height: 6rem; border-radius: 50%;" src="${element.photo}" alt="photo" class="photo">
        </div>
            <h3 id="nom">${element.nom}</h3>
            <h3 id="prenom">${element.prenom}</h3>
            <p id="email">${element.email}</p>
            <small id="age">${element.age}</small>
        </ul>
        </div>
    `

    console.log(affichage);
});

// console.log(appList);
}
afficherList();
