import { types } from "../types/types";

export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: {
        msgError
    }
});

export const unSetError = () => ({
    type: types.uiUnSetError
}); 

export const uiStartLoading = () => ({
    type: types.uiStartLoading
});

export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
}); 