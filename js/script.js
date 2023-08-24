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