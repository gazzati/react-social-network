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
            }
        }
        default:
            return state;
    }
}

export const onBlackThemeButton = () => ({type: PRESS_BLACK_THEME_BUTTON})

export default settingsReducer;