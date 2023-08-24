//*Creare l’array di oggetti con le informazioni fornite.
const team =[
    {
        name:'Wayne Barnett',
        rule: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name:'Angela Caroll',
        rule: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    {
        name:'Walter Gordon',
        rule: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        rule: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        rule: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        rule: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

//* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let teamEl of team) {
    console.log('il nome è: ' + teamEl.name + ' il suo ruole è: ' +  teamEl.rule,' la sua foto è: ' + teamEl.photo);  
}

//* Stampare le stesse informazioni su DOM sottoforma di stringhe
// const containerEl = document.getElementById('container');

// let info = '';

// for (let teamEl of team) {
//     info+= `${teamEl.name} <br> ${teamEl.rule} <br> ${teamEl.photo} <br>`
// };

// containerEl.innerHTML = `${info}`;

//* Bonus
//* Trasformare la stringa foto in una immagine effettiva

// const containerEl = document.getElementById('container');

// let info = '';

// for (let teamEl of team) {
//     info+= `<li>${teamEl.name} </li>
//     <li>${teamEl.rule} </li>
//     <img class = "mb-4" src="img/${teamEl.photo}" alt="${teamEl.photo}" />`
// };

// containerEl.innerHTML = `<ul>${info}</ul>`;

//* BONUS 2:
//* Organizzare i singoli membri in card/schede

const containerEl = document.getElementById('container');

let info = '';

for (let teamEl of team) {
    info+= `<div class="card mb-4" style="width: 18rem;">
    <img class = "mb-4" src="img/${teamEl.photo}" alt="${teamEl.photo}" />
    <div class="card-body text-center">
      <h5 class="card-title">${teamEl.name}</h5>
      <h5 class="card-text">${teamEl.rule}</h5>
    </div>
  </div>`
};

containerEl.innerHTML = `${info}`;

