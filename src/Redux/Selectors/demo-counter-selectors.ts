import { IState } from '../';

/**
 * Elemental Selectors
 */

export const selectDemoCounterCount = (state: IState): number => state.demoCounterSubstate.count;
export const selectDemoCounterQuote = (state: IState): { author: string; quote: string } => {
  const { author, quote } = state.demoCounterSubstate;
  return { author, quote };
};

/**
 * Compound Selectors
 */
