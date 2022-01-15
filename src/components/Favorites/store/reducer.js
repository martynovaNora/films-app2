const initialState = {
    searchLine: '',
    movie: [],
    favorites: [],
    id: [],
    del: []

   
}
export default function reducer(state=initialState, action) {
    if (action.type === 'SEARCH_THE_LIST') {
        
        return {
          ...state, 
          searchLine: action.payload.searchLine
        }
      }
      if (action.type === 'ADD_GOOD_TO_LIST') {
        let arr = [...state.favorites];
        const favoritesMovie = state.favorites.find(item => 
            item.Title === action.payload.Title);
      if (favoritesMovie){
             return state;
        } else{
            arr.push(action.payload);

         }
         return{       
           ...state,
             favorites: arr
         }
      }
      if (action.type === 'DELETE_MOVIES_FAVORITES') {
        let arr1 = [...state.favorites];
        const delMovie = state.favorites.find(item => 
          item.imdbID === action.payload.imdbID);
            console.log(delMovie);
      if (delMovie){
           const newFavorites = arr1.filter(item=>item.imdbID !== action.payload.imdbID );
           return{       
            ...state,
              favorites: newFavorites
          }
      } else{
        return state
      }
 }
}