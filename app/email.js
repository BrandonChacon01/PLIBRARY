import { showMessage } from './showMessage.js'

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ob9wqj8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      //alert('Mensaje enviado correctamente');
      showMessage("Mensaje enviado correctamente.");
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      //alert(JSON.stringify(err));
      showMessage("Error al enviar el mensaje.", "error");
    });
});