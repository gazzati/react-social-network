import Settings from "./Settings";
import {connect} from "react-redux";
import {onBlackThemeButton} from "../../redux/settings-reducer";

const mapStateToProps = (state) => {
    return {
        blackThemeButton: state.settings.blackThemeButton,
        buttonStyle: state.settings.buttonStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBlackThemeButton: (styleArray) => {
            dispatch(onBlackThemeButton(styleArray));
        }
    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;