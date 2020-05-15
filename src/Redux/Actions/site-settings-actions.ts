import { Action } from 'redux';
import { TPermittedTheme } from '../../Models/themes';

/**
 * Define all possible 'types' of redux action associated with site settings
 */
export enum ESiteSettingsActionTypes {
  SET_THEME = '[SiteSettings] Set Theme',
  SET_IS_HAPPY_WITH_COOKIES = '[SiteSettings] Set IsHappyWithCookies',
  TOGGLE_IS_HAPPY_WITH_COOKIES = '[SiteSettings] Toggle IsHappyWithCookies'
}

/**
 * Define an 'action creator' for each type of action
 * Here we take the class-based approach to action creators
 */
export class SiteSettingsSetTheme implements Action {
  readonly type = ESiteSettingsActionTypes.SET_THEME;
  constructor(public payload: TPermittedTheme) {
    return { ...this }; // return js object instead of class instance
  }
}

export class SiteSettingsSetIsHappyWithCookies implements Action {
  readonly type = ESiteSettingsActionTypes.SET_IS_HAPPY_WITH_COOKIES;
  constructor(public payload: boolean) {
    return { ...this }; // return js object instead of class instance
  }
}

export class SiteSettingsToggleIsHappyWithCookies implements Action {
  readonly type = ESiteSettingsActionTypes.TOGGLE_IS_HAPPY_WITH_COOKIES;
  constructor() {
    return { ...this }; // return js object instead of class instance
  }
}

/**
 * Combine and export all action-creator class names into a single type
 */
export type SiteSettingsActions =
  | SiteSettingsSetTheme
  | SiteSettingsSetIsHappyWithCookies
  | SiteSettingsToggleIsHappyWithCookies;
