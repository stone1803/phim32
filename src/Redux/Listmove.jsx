let MovieState ={
    movies:[],
    detailmMvies:[]
}
const listMovieReducer =(state=MovieState,action)=>{
        switch (action.type) {
            case "SHOW_ALL_MOIVE":{
                state.courses= action.payload;
                console.log(action)
                return {...state}
            }
            case "DETAIL_MOVIE":{
                state.detailCourse= action.payload;
                console.log(action)
                return {...state}
            }
       
         default: return state;
        break;
      
    }
}


export default listMovieReducer;