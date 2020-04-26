const PRESS_BLACK_THEME_BUTTON = 'PRESS_BLACK_THEME_BUTTON';

type InitialStateType = {
    blackThemeButton: boolean,
    sideStyle: string
}

let initialState: InitialStateType = {
    blackThemeButton: false,
    sideStyle: "side"
};



const settingsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case PRESS_BLACK_THEME_BUTTON: {
            return {
                ...state,
                blackThemeButton: !state.blackThemeButton,
            }
        }
        default:
            return state;
    }
}

type OnBlackThemeButtonActionType = {
    type: typeof PRESS_BLACK_THEME_BUTTON
}
export const onBlackThemeButton = (): OnBlackThemeButtonActionType => ({type: PRESS_BLACK_THEME_BUTTON})

export default settingsReducer;