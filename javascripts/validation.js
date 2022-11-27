function emailValidation() {
    const form = document.getElementById('form');
    const emailConfirmField = document.getElementById('email_confirm');
    const element = document.createElement('p');
    const message = document.createTextNode("Eメールが一致しません");
    const contentField = document.getElementById('content_field');
    element.appendChild(message);
    element.setAttribute('id' , 'alert');
    element.classList.add ("alert_color");
    emailConfirmField.addEventListener ('input', e => {
      if(form.email.value !== form.email_confirm.value) {
        if(!document.getElementById('alert')){
        contentField.parentNode.insertBefore(element , contentField);
        emailConfirmField.classList.add("alert_bg");
      };
      } else {
        emailConfirmField.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
      }
    });
  };
  window.onload = function(){
    emailValidation() ;
  };
   