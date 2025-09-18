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
    console.log('formulario enviado');
    return formAllValues;
};
