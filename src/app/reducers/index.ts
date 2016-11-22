import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs';


import * as fromGrid from './grid';

export interface State {
  grid: fromGrid.State;
}

const reducers = {
  grid: fromGrid.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// Grid Selectors
export function getGridState(state$: Observable<State>) {
  return state$.select(state => state.grid);
}

export const getGridLoading = compose(fromGrid.getLoading, getGridState);
export const getGridLoaded = compose(fromGrid.getLoaded, getGridState);
export const getGridTiles = compose(fromGrid.getTiles, getGridState);
