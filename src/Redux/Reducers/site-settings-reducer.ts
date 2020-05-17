import { TPermittedTheme } from '../../Models/themes';
import { ESiteSettingsActionTypes, SiteSettingsActions } from '../Actions/site-settings-actions';

export interface ISiteSettingsSubstate {
  theme: TPermittedTheme;
  isHappyWithCookies: boolean;
}

const initialState: ISiteSettingsSubstate = {
  theme: 'dark',
  isHappyWithCookies: false
};

export function siteSettingsReducer(
  state: Readonly<ISiteSettingsSubstate> = initialState,
  action: SiteSettingsActions
): ISiteSettingsSubstate {
  switch (action.type) {
    case ESiteSettingsActionTypes.SET_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }
    case ESiteSettingsActionTypes.SET_IS_HAPPY_WITH_COOKIES: {
      return {
        ...state,
        isHappyWithCookies: action.payload
      };
    }
    case ESiteSettingsActionTypes.TOGGLE_IS_HAPPY_WITH_COOKIES: {
      return {
        ...state,
        isHappyWithCookies: !state.isHappyWithCookies
      };
    }
    default:
      return state;
  }
}
