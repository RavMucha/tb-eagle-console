import { createAction, props } from '@ngrx/store';
import { Application } from '../solutions/solutions.model';

export const setCategoriesCount = createAction(
  '[ActivatorStore] set-categories-count',
  props<{ categoriesCount: number }>()
);
export const setActivatorsCount = createAction(
  '[ActivatorStore] set-activators-count',
  props<{ activatorsCount: number }>()
);
export const setProgress = createAction('[ActivatorStore] set-progress', props<{ step: number }>());
export const setDeprecated = createAction('[ActivatorStore] set-deprecated', props<{ id: number }>());
export const setLocked = createAction('[ActivatorStore] set-locked', props<{ id: number }>());
export const denyAccess = createAction(
  '[ActivatorStore] deny-access',
  props<{ activatorId: number; teamId: string }>()
);
export const grantAccess = createAction(
  '[ActivatorStore] grant-access',
  props<{ activatorId: number; teamId: string }>()
);
export const requestAccess = createAction('[ActivatorStore] request-access', props<{ id: number }>());

export const createApplication = createAction(
  '[ActivatorStore] create-application',
  props<{ application: Application }>()
);
