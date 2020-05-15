import { IState } from '../Reducers/root-reducer';

/**
 * Elemental Selectors
 */

export const selectDemoCounterCount = (state: IState): number => state.demoCounterSubstate.count;

/**
 * Compound Selectors
 */
