//Use reduce necesita un initialState
export const initialState = 0;

//La función por convención reduce dos estados por defecto, state y action
export const counterReducer = (state, action) => {

    //Para cada posibilidad hay que generar un lugar, ya sea con if, o con los case de un switch
    //en la condición ponemos action.type === "CONSTANTE (ACCION) QUE RETORNA EN MAYUSCULAS"
    if (action.type === "INCREMENT") {
        state = state + 1; //En este caso incrementamos el valor de state
    } else if (action.type === "DECREMENT"){
        state = state - 1; //EN este caso decrementamos el valor de state
    } else {
        throw new Error("NO action available") // Por si acaso lanzamos un mensaje de error en caso de que el ususario ni incremente ni decrezca el valor
    }
    return state; //Devolvemos el valor de state despues de haber recibido la accion
};