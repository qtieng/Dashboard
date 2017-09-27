import { Action } from '@ngrx/store'

import { Source } from '../../models/subject.model'

export const LOAD = '[Sensor] LOAD'
export const LOAD_SUCCESS = '[Sensor] LOAD_SUCCESS'
export const TOGGLE_VISIBILITY = '[Sensor] TOGGLE_VISIBILITY'

export class Load implements Action {
  readonly type = LOAD

  constructor(public payload: Source[]) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS

  constructor(public payload: Source[]) {}
}

export class ToggleVisibility implements Action {
  readonly type = TOGGLE_VISIBILITY

  constructor(public payload: any) {}
}

export type Actions = Load | LoadSuccess | ToggleVisibility
