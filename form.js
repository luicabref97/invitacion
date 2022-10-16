const asist = document.getElementById('asist')
const checkAsistire = document.getElementById('asiste')
const checkNoAsistire = document.getElementById('noAsiste')
const nota = document.getElementById('nota')

asist.addEventListener('click', e => {
    if(checkAsistire.checked) {
        nota.innerHTML = 'Nota: Si tienes hijos, con tu confirmacion de asistencia estarás confirmando la de ellos'
    } else if(checkNoAsistire.checked) {
        nota.innerHTML = ''
    } else {
        nota.innerHTML = ''
    }
})
    

// if (checkAsistire.change) {
//     console.log('Si tienes hijos, con tu confirmacion de asistencia estarás confirmando la de ellos')
// }

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por completar el formulario')
    }
}



