let formule = document.getElementById("modal");
formule.style.display= "none";
let apprenantsData;
const ajouter = [];

fetch("/json.json")
.then((response) => response.json())
.then((apprenant) =>{
    afficherList(apprenant);
})

function afficherList(apprenant){
const list = localStorage.getItem("apprenants");
const appList = [...apprenant,...list];
appList.forEach(element =>{
    let affichage = document.createElement('div')
    affichage.className = "block"
    affichage.innerHTML = `
        <ul>
        <div class="image" >
            <img style="width: 6rem; height: 6rem; border-radius: 50%;" src="${element.photo}" alt="photo" class="photo">
        </div>
            <h3 id="nom-prenom">${element.nom} ${element.prenom}</h3>
            <p id="email">${element.email}</p>
            <small id="age">${element.age} ans</small>
        </ul>
        </div>
    `
    document.querySelector(".carte_liste_apprenant").appendChild(affichage)
});
}


let openbtn = document.getElementById("ajouter");
let closebtn = document.getElementById("save");
openbtn.addEventListener("click", () => formule.style.display="flex");
closebtn.addEventListener("click", () => formule.style.display="none");



document.getElementById('formulaire').addEventListener("submit", (event) =>{
    event.preventDefault();
    const add={
    photo: document.getElementById("imgInput").value,
    nom: document.getElementById("nomInput").value,
    prenom: document.getElementById("prenomInput").value,
    email: document.getElementById("emailInput").value,
    age: document.getElementById("ageInput").value
    }
    ajouter.push(add);
    localStorage.setItem("element", JSON.stringify(ajouter));
    afficherList(ajouter);
})