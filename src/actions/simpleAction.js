export const simpleAction = value => {
    console.log(value,"val in action")
  return ({
    type: 'FETCH_DATA',
    value: value
  })
   }

// import api from "../service";


// export const simpleAction = (data) => dispatch => {
//   console.log(data,"data in action")
//   dispatch({ type: "GET_LOADING_STATUS" });
//   return api
//   //  .getData(`http://localhost:5000/CardData?page=${data.page}&limit=${data.limit}`)
//     .getData(`http://demo7600598.mockable.io/carData`)
//     .getResponseData("")
//     .then(res => {
//      // console.log(res,"res")
//         return dispatch({
//           type: "SIMPLE_ACTION",
//           value: res.data
//         });
     
//     })
//     .catch(err => {
//       // return dispatch({
//       //   type: "ACCOUNT_SUMMARY_BALANCE_DATA_ERROR",
//       //   value: "error"
//       // });
//     });
// };