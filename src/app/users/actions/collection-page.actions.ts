import { Action } from '@ngrx/store';

export enum CollectionPageActionTypes {
  LoadCollectionPages = '[CollectionPage] Load CollectionPages',
  
  
}

export class LoadCollectionPages implements Action {
  readonly type = CollectionPageActionTypes.LoadCollectionPages;
}


export type CollectionPageActions = LoadCollectionPages;
