const button = document.querySelector('button')
button.addEventListener('click', function (event) {
    alert('Bonjour')
    event.preventDefault() // supprimer le comportement par défaut
    event.stopPropagation() // applique l'effet seulement sur l'élement concerné et non jusqu'en haut ou on est contenu l'element
}, {
    once: true // c'est appliqué une fois seulement
})

// Ici on se concentre sur le formulaire
document.querySelector('form').addEventListener('submit', (e) => {
    // On va récuperer les infos du formulaire (le name)
    const form = e.currentTarget
    const data = new FormData(form)
    const name = console.log(data.get('name'))
    // Si le caractère saisie est inferieur à deux, alors on annule le comportement par défaut du 'submit'
    if (name.length < 2) {
        e.preventDefault()
    }

})

// Pour le spoiler de manière individuel
/* document.querySelectorAll('.spoiler').forEach(spoiler => {
    spoiler.addEventListener('click', (e) => {
        e.currentTarget.classList.remove('spoiler')
    })
}) */

// En groupe, pour que tout s'affiche en même temps
const spoilers = document.querySelectorAll('.spoiler')

function appliqueSpoiler() {
    spoilers.forEach(spoiler => {
        spoiler.classList.remove('spoiler')
    })
}

spoilers.forEach(spoiler => {
    spoiler.addEventListener('click', appliqueSpoiler)
})
