function isValidateDate(Date){
    const jour = Date.getDate()
    const mois = Date.getMonth()
    const annee = Date.getFullYear()

    if (mois>=31 || jour>12) {
        return false
    }else{ return true
    }
    console.log("jour" + jour)
    console.log("mois" + mois)
    console.log("year" + annee)

    return 
    
}

// const event = new Date("03/14/2024");
// const options = {
//  year: 'numeric',
//  month: 'numeric',
//  day: 'numeric',
// };
// dateFrancaise = event.toLocaleDateString('fr-FR', options)
// console.log(dateFrancaise);
const init_Date = new Date ("31/12/2024");
// console.log(event);
let appel_Fonction = isValidateDate(init_Date);
console.log(appel_Fonction);

