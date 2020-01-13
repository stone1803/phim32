let MovieState ={
    moviesTops:[],
    moviesAll:[],
    detailmMovies:[]
}
const listMovieReducer =(state=MovieState,action)=>{
        switch (action.type) {
            case "SHOW_ONE_TEN":{
                state.moviesTops= action.payload;
                console.log(action)
                return {...state}
            }
            case "SHOW_ALL":{
                state.moviesAll= action.payload;
                console.log(action)
                return {...state}
            }
            case "SHOW_DETAIL":{
                state.detailmMovies= action.payload;
                console.log(action)
                return {...state}
            }
       
       
         default: return state;
        break;
      
    }
}


export default listMovieReducer;