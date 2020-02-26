let ListAdmin = {
  allUser: [],
  allFilm:[],
  allCinema:[]
};
const listAdminReducer = (state = ListAdmin, action) => {
  switch (action.type) {
    case "GET_ALL_USER": {
      state.allUser = action.payload;
      return { ...state };
    }
    case "GET_ALL_FILM":{
      state.allFilm = action.payload;
      return { ...state };
    }
    case "GET_ALL_CINEMA":{
      state.allCinema = action.payload;
      return { ...state };
    }
    case 'ADD_USER':
        state.allUser = [...state.allUser,action.nguoiDung]
        return { ...state }
    
    default:
      return state;
      break;
  }
};

export default listAdminReducer;
