import React, { createContext } from "react";

export type IFavoritesInfo = {
  favoritesList: any,
};

type ActionProps = {
  type: string,
  payload: IFavoritesInfo,
};

export const FavoritesContext = createContext({
  userFavoritesInfo: {
    favoritesList: [],
  },
  updateFavoritesInfo: (action: ActionProps) => {},
});
  
export const favoritesReducer = (state: IFavoritesInfo, action: ActionProps) => {
    switch(action.type) {
        case 'SET_FAVORITES':
            const { favoritesList } = action.payload;
            return {
              favoritesList
            }

        default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const initialFavoritesInfo: IFavoritesInfo = {
    favoritesList: [],
  };



