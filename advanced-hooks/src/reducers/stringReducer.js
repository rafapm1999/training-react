export const initialState = {text: "Hello Wolrd"}

export const stringReducer = (state, action) => {
    if (action.type === "SET") {
        return {...state, text: action.payload}
    } else {
        throw new Error("Your action is invalid");
    }
}