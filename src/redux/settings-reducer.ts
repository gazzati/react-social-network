const TOGGLE_BLACK_THEME = 'settings/TOGGLE_BLACK_THEME';

let initialState = {
    isBlackThemeActivated: false,
};

const settingsReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case TOGGLE_BLACK_THEME: {
            return {
                ...state,
                isBlackThemeActivated: action.theme
            }
        }
        default:
            return state;
    }
}

type ToggleBlackThemeActionType = {
    type: typeof TOGGLE_BLACK_THEME
    theme: boolean | undefined
}
export const toggleBlackTheme = (theme?: boolean): ToggleBlackThemeActionType => ({type: TOGGLE_BLACK_THEME, theme})

export default settingsReducer;

type InitialState = typeof initialState