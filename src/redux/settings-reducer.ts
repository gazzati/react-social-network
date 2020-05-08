const TOGGLE_BLACK_THEME = 'TOGGLE_BLACK_THEME';

type InitialStateType = {
    isBlackThemeActivated: boolean,
}

let initialState:  InitialStateType= {
    isBlackThemeActivated: false,
};


const settingsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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