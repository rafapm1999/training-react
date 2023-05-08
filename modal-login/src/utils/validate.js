
//Esta función valida que un email tenga texto antes del arroba
//un arroba, texto despues del arroba, un punto y luego texto
export const validateEmail = (email) => {
    //Expresion regular para validar un email
    if (/^\w+([^\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

//Funcion que valida una contraseña que incluye entre 8 y 15 caracteres, 
//tiene que llevar al menos una mayuscula, minuscula, numero y un caracter especial

export const validatePassword = (password) => {
    //validacion paso a paso
    if (/[a-z]/.test(password)) {
        console.log("LowerCase");
    }
    if (/[A-Z]/.test(password)) {
        console.log("UpperCase");
    }
    if (/[0-9]/.test(password)) {
        console.log("Numbers");
    }
    //Caracteres que sí puede usarse en la contraseña
    if (/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) {
        console.log("Specials");
    }
    


    //Validación de contraseñas definitivo
    if (/[a-z]/.test(password)
        &&/[A-Z]/.test(password)
        &&/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) 
        {
        console.log('password is valid');
        
        return true
    }
    console.log('password is invalid');
    return false
}