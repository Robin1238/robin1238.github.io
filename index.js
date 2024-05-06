//Ramdon Phrase
const renderPhrase = () => {
  let phrases = [
    'Me encanta One Piece',
    'Gatos & Bugs. OpenAi 2024',
    'Kaizoku-ou ni ore wa naru!!',
    'Si abandonas ambos, eres normal.',
    'Si eres alma, eres incomprendido.',
    'Si eres cerebro, eres inteligente.',
    'Sé que algún día me pagarán por hacer esto.',
    'Arreglar el bug, enpsar cmoo bug, bug del ser.',
    'Si recargas la página, leerás un poco de mi pensamientos.',
    'Espero que se renderice una frase seria en un momento serio.',
  ]
  const randomText = document.getElementById("random-text");

  let random = Math.floor(Math.random() * phrases.length)
  let randomTextPhrase = phrases[random]

  randomText.textContent = randomTextPhrase
}

renderPhrase()


//Project pagination
// const projectGroups = document.querySelectorAll('.project-group');
// const prevBtn = document.getElementById('PrevPage');
// const nextBtn = document.getElementById('NextPage');

// let pageIndex = 0;

// const showProjectGroup = (index) => {
//   projectGroups.forEach(group => group.style.display = 'none');
//   const groupToShow = projectGroups[index];
//   if (groupToShow) {
//     groupToShow.style.display = 'block';
//   }
// };

// showProjectGroup(pageIndex);

// prevBtn.addEventListener('click', () => {
//   pageIndex = Math.max(0, pageIndex - 1);
//   showProjectGroup(pageIndex);
// });

// nextBtn.addEventListener('click', () => {
//   pageIndex = Math.min(projectGroups.length - 1, pageIndex + 1);
//   showProjectGroup(pageIndex);
// });

let view = document.documentElement.clientWidth

window.addEventListener('resize', function () {
  resizeSVG()
})

function resizeSVG() {
  let greenContainer = document.getElementById('svg-green')
  let redContainer = document.getElementById('svg-red')
  let blueContainer = document.getElementById('svg-blue')
  let width = document.documentElement.clientWidth
  let heigt = document.documentElement.clientHeight

  if (view > width) {
    view = width
    console.log("La pagina se esta haciendo mas peque " + view) ;
    redContainer.style.width = (redContainer.offsetWidth - 1) + 'px'
  }

  if (view < width) {
    view = width
    console.log("La pagina se esta haciendo mas grande " + view) ;
  }



  

}