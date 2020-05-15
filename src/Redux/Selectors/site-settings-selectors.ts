import { createSelector } from 'reselect';

import { TPermittedTheme } from '../../Models/themes';
import { IState } from '../';

/**
 * Elemental Selectors
 */

export const selectSiteSettingsTheme = (state: IState): TPermittedTheme =>
  state.siteSettingsSubstate.theme;

export const selectSiteSettingsIsHappyWithCookies = (state: IState): boolean =>
  state.siteSettingsSubstate.isHappyWithCookies;

/**
 * Compound Selectors
 */

export const selectAllContactItems = createSelector(
  selectSiteSettingsTheme,
  selectSiteSettingsIsHappyWithCookies,
  (theme: TPermittedTheme, isHappyWithCookies: boolean): string => {
    return isHappyWithCookies ? theme : 'hmmmm';
  }
);
