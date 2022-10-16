const asist = document.getElementById('asist')
const checkAsistire = document.getElementById('asiste')
const checkNoAsistire = document.getElementById('noAsiste')
const nota = document.getElementById('nota')

asist.addEventListener('click', e => {
    if(checkAsistire.checked === true) {
        nota.innerHTML = 'Nota: Si tienes hijos, con tu confirmacion de asistencia estarás confirmando la de ellos'
    } else if(checkNoAsistire.checked === true) {
        nota.innerHTML = ''
    } else {
        nota.innerHTML = ''
    }
})

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
        if(checkAsistire.checked === true) {
            swal({
                title: "Gracias",
                text: "Te esperamos!",
                icon: "success",
                button: true,
            });
        } else {
            swal({
                title: "Lo sentimos",
                text: "Sabemos que celebras con nosotros a la distancia",
                icon: "warning",
                button: true,
            });
        }
        this.reset()
    }
}



