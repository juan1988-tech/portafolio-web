export const formConfiguration = (event) => {
    event.preventDefault();
    const formTarget = event.currentTarget;
    //seleccionar los campos asociados a los campos del formulario
    const formFieldValues = formTarget.querySelectorAll('label');
    const formInputValues = formTarget.querySelectorAll('input');
    //generar una varaible que permita acumular todos los valores del formulario
    let formAllValues = [];
    //obtener todos los valores del formulario
    for (let iterator = 0; iterator < formFieldValues.length; iterator++) {
        let NodeValue = {
            field: formFieldValues[iterator].innerText,
            value: formInputValues[iterator].value,
        };
        formAllValues.push(NodeValue);
    }
    //hacer la configuración del envío del mensaje a whatsapp
    const formInputMessage = formAllValues.map((item) => {
        return item.value;
    });
    const whatsAppMessage = `https://wa.me/573142366069?text=Hola,%20mi%20nombre%20es${formInputMessage[0]}%20📲🚀,y%20soy%20${formInputMessage[1]},%20vi%20tu%20portafolio%20y%20me%20gustaría%20tener%20una%20conversación✅%20acerca%20de%20tu%20perfil,mi%20numero%20es${formInputMessage[3]}`;
    window.open(whatsAppMessage, "_blank");
    return formAllValues;
};
