// export default (state = {}, action) => {
//     switch (action.type) {
//      case 'SIMPLE_ACTION':
//       return {
//        result: action.payload
//       }
//      default:
//       return state
//     }
//    }

const initialState = {
  FirstData: [],
  isLoading: true
}

export default function (state = initialState, action) {
  console.log(action.value,"action.value")
  switch (action.type) {
  
    case 'FETCH_DATA':
      return {
        ...state,
        FirstData: [...state.FirstData,action.value],
        isLoading: false
      }

    // case"GET_LOADING_STATUS":
    // return {
    //   ...state,
    //   IsLoading: true
    // };

    default:
      return state
  }
}
