const PRESS_BLACK_THEME_BUTTON = 'PRESS_BLACK_THEME_BUTTON';

let initialState = {
    blackThemeButton: false,
    sideStyle: "side"
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRESS_BLACK_THEME_BUTTON: {
            return {
                ...state,
                blackThemeButton: !state.blackThemeButton,
                sideStyle: action.styleArray[0]
            }
        }
        default:
            return state;
    }
}

export const onBlackThemeButton = (styleArray) => ({type: PRESS_BLACK_THEME_BUTTON, styleArray})

export default settingsReducer;