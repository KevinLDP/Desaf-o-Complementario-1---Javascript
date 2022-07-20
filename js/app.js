let op
do{
    let num = Number(prompt('Elige un producto por su número: 1.Monitor 2.Mouse 3.Teclado'));
    switch(num){
        case 1:
            alert("Entraste a la opción Monitor, el precio es de $3,800MXN");
            break;
        case 2:
            alert("Entraste a la opción Mouse, el precio es de $800MXN");
            break;
        case 3:
            alert("Entraste a la opción Teclado, el precio es de $1,800MXN");
            break;
        default:
            alert('El producto seleccionado no está disponible');
            break;
    }
    op = Number(prompt('Quieres revisar otro producto? 1.SI 2.NO'));
}while (op == 1);