//Promesse :venir rendre visite le "lundi" à 19H
//->Pending (Attente)
//->Tenue(resolue)
//->Echec 

//Création de Promesse
//ordre argument est important!
//@argument tenue:Function resolve
//echec:reject
const rendreVisiteAMonAmi=new Promise((tenue,echec)=>{
      const heure=16;
      if (heure>19){
        echec("Desolé, je ne saurais pas venir");

      }else{
        tenue("J'arrive,je suis déjà en route");

      }

});
//1
console.log("1.Bonjour");

//2
let resultat = "";
rendreVisiteAMonAmi
  .then((valeur) => {
    console.log(valeur);
    resultat = valeur;
    console.log("Resultat : ", resultat); //A faire
  })
  .catch((erreur) => {
    console.error(erreur);
  });
console.log("Resultat : ", resultat); //A ne pas faire
//3
console.log("2.Bonsoir");