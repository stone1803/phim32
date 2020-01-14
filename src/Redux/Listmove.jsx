let MovieState ={
    moviesTops:[],
    moviesAll:[],
    detailmMovies:[],
    cinemaSystem:[]
}
const listMovieReducer =(state=MovieState,action)=>{
        switch (action.type) {
            case "SHOW_ONE_TEN":{
                state.moviesTops= action.payload;
                return {...state}
            }
            case "SHOW_ALL":{
                state.moviesAll= action.payload;
                return {...state}
            }
            case "SHOW_DETAIL":{
                state.detailmMovies= action.payload;
                return {...state}
            }
       
            case "SHOW_INFO_BOOK":{
                state.cinemaSystem= action.payload;
                return {...state}
            }
       
         default: return state;
        break;
      
    }
}


export default listMovieReducer;