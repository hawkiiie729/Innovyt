import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
// import BaseURLs from '../api/baseUrl';
import { Dispatch } from 'redux';
// import checkInternet from './../utils'
import { Alert } from 'react-native';
//import { findItem, findItemIndex, filterItem } from '../utils'
//import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Bearer = 'Bearer ';



export const fetchUserDataSuccess = (data: any) => ({

  type: 'SET_DETAIL',
  payload: data[0]?.priceMenu,
});



// export const saveDataWithExpiration = async (value) => {

//   const expirationTimestamp = new Date();
//   expirationTimestamp.setDate(expirationTimestamp.getDate() + 1); // Next day
 
//   const data = {
//     value,
//     expirationTimestamp: expirationTimestamp.getTime(), // Save expiration timestamp
//   };
//   await AsyncStorage.setItem('saveOrderId', JSON.stringify(data));
// };

// export const getDataWithExpiration = async () => {
//   const savedData = await AsyncStorage.getItem('saveOrderId');

//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     const now = new Date().getTime();

//     if (now >= parsedData.expirationTimestamp) {
//       // Data has expired, reset it or take appropriate actions
//       await resetData();
//     } else {
//       // Data is still valid, use it
//       return parsedData.value;
//     }
//   }

//   return null; // Data not found or expired
// };

// const resetData = async () => {
//   // Reset the data as needed
//   await AsyncStorage.removeItem('saveOrderId');
// };



// export const postMethod = (apiName: string,formData: any, callback: Function): DispatchFunction<any> => {
//   return async (dispatch: Dispatch<any>) => {
//     try {
//       let axiosConfig: AxiosRequestConfig = {
//         headers: {
//           'Content-Type': 'application/json;charset=UTF-8',
//           'Access-Control-Allow-Origin': '*',
//           'tenantcode': 'buono-pizza',
//           'clientapikey': '64e27ee889-TAB',
//           'clientapisecrete': 'YkG5849CXHfbxiHTcLztQEhnJ'
//           // Authorization: `${Bearer}${token}`,
//         },
//       };

//       axios
//         .post(BaseURLs.live + apiName, formData, axiosConfig)
//         .then((response: AxiosResponse) => {
//           if (response.data) {
//             callback(response.data);

//           } else {
//             throw new Error('Something went wrong ...');
//           }

//         })
//         .catch((err: any) => {
//           if (axios.isCancel(err)) {
//             callback('Cancel');

//             return;
//           }
//           if (err.response) {
//             callback(err.response.data); // => the response payload
//           }


//         });
//     } catch (err) {
//       callback('');
//     }
//   };
// };







// export const getMethod = (apiName: string, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {
//       let axiosConfig: AxiosRequestConfig = {
//         headers: {
//           'Content-Type': 'application/json;charset=UTF-8',
//           'Access-Control-Allow-Origin': '*',
//           'tenantcode': 'buono-pizza',
//           'clientapikey': '64e27ee889-TAB',
//           'clientapisecrete': 'YkG5849CXHfbxiHTcLztQEhnJ'
//           // Authorization: `${Bearer}${token}`,
//         },
//       };

//       checkInternet((res: any) => {

//         if (res) {
//           axios
//             .get(BaseURLs.live + apiName, axiosConfig)
//             .then(async (response: AxiosResponse) => {

//               if (response) {
//                 callback(response.data);

//                 dispatch(fetchUserDataSuccess(response.data));
//                 await AsyncStorage.setItem('menuitem', JSON.stringify(response.data));
//               } else {
//                 throw new Error('Something went wrong ...');
//               }

//             })
//             .catch((err: any) => {
//               if (axios.isCancel(err)) {
//                 callback('Cancel');

//                 return;
//               }
//               if (err.response) {
//                 callback(err.response.data); // => the response payload
//               }


//             });
//         } else {

//           AsyncStorage.getItem('menuitem').then(value => {
//             callback(JSON.parse(value));
//           })

//         }
//       })

//     } catch (err) {
//       callback('');
//     }
//   };
// };



// export const addCartVariantItem = (cartitems: any, selectItem: any, variantItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {

//       const existingItem = cartitems.find((item: any) => item.id === selectItem.id);

//       if (existingItem) {
//         // If the item is already in the cart, increase its quantity
//         const productIndex = cartitems.findIndex((product: any) => product.id === selectItem.id);
//         const updatedData: any = [...cartitems];
//         updatedData[productIndex] = { ...updatedData[productIndex], "Newvariant": { ...variantItem?.prices[0], "name": variantItem?.name , "id": variantItem?.id} };
//         callback(updatedData, updatedData[productIndex].qty)
//       }

//     } catch (err) {
//       // callback('');
//     }
//   };
// };

//update Tab and change item///
// export const updateTab = (cartitems: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {
//       const username = useSelector((state) => state.data);
//       let data = []
//       data = username.categories.filter(function (item: any) {
//         return item.name == tab;
//       }).map(function ({ items }) {
//         return { items };
//       });
//       callback(data)
//     } catch (err) {
//       // callback('');
//     }
//   };
// };


// sum add item////
// export const sumCartItem = (cartitems: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {



//       const sumvalue = cartitems.reduce((total, currentValue) => {

//         console.log("<<<>>>>", currentValue?.SelectAddonItem.length)
//         const valueSelectAddonItem = currentValue?.SelectAddonItem.length !== 0 ? currentValue?.SelectAddonItem.reduce((addonTotal, addonValue) => {

//           return (addonTotal + addonValue?.price?.price)
//         }, 0) : 0

//         const valueToAddNewvariant = currentValue?.hasVariants ? currentValue?.Newvariant?.price * currentValue?.qty : 0
//         const variantToAddprices = currentValue?.hasVariants ? 0 : currentValue?.prices[0]?.price * currentValue?.qty

//         return (total + valueToAddNewvariant + variantToAddprices + valueSelectAddonItem)


//       }, 0)


//       callback(sumvalue)

//     } catch (err) {
//       // callback('');
//     }
//   };
// };





//// When add item data////


// export const NewCartItem = (cartitems: any, selectItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {

//       const existingItem = findItem(cartitems, selectItem)



//       if (existingItem) {

//         // If the item is already in the cart, increase its quantity
//         const productIndex = findItemIndex(cartitems, selectItem)
//         const updatedData: any = [...cartitems];
//         updatedData[productIndex] = { ...updatedData[productIndex], "qty": updatedData[productIndex].qty + 1 };
//         callback(updatedData, updatedData[productIndex].qty)
//       } else {

//         const updatedData: any = [...cartitems, selectItem];
//         callback(updatedData, 1)
//       }

//     } catch (err) {
//       // callback('');
//     }
//   };
// };

// export const UpdateCartItem = (cartitems: any, newvarient: any, newaddon: any, selectItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {

//       console.log("new>>>>>>", JSON.stringify(selectItem))
//       // If the item is already in the cart, increase its quantity
//       const productIndex = findItemIndex(cartitems, selectItem)

//       console.log("new>>>>>>", JSON.stringify(productIndex))
//       if (productIndex > -1) {
       
//         const updatedData: any = [...cartitems];
//         updatedData[productIndex] = { ...updatedData[productIndex], "qty": updatedData[productIndex].qty, "Newvariant": newvarient,SelectAddonItem:newaddon };

      
//         callback(updatedData, updatedData[productIndex].qty)
//       }


//     } catch (err) {
//       // callback('');
//     }
//   };
// };
// export const addCartItem = (cartitems: any, selectItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {

//       const existingItem = findItem(cartitems, selectItem)
//       if (existingItem) {
//         console.log("yes", JSON.stringify(selectItem.Newvariant.name))
//         // If the item is already in the cart, increase its quantity
//         const productIndex = findItemIndex(cartitems, selectItem)
//         const updatedData: any = [...cartitems];
//         updatedData[productIndex] = { ...updatedData[productIndex], "qty": updatedData[productIndex].qty + 1 };
//         // updatedData[productIndex] = { ...updatedData[productIndex], "Newvariant": updatedData[productIndex].Newvariant };
//         callback(updatedData, updatedData[productIndex].qty)
//       } else {
//         // If the item is not in the cart, add it with a quantity of 1

//         const updatedData: any = [...cartitems, selectItem];
//         callback(updatedData, 1)
//       }

//     } catch (err) {
//       // callback('');
//     }
//   };
// };

// export const removeCartItem = (cartitems: any, selectItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {

//       const existingItem = findItem(cartitems, selectItem)
//       if (existingItem) {
//         // If the item is already in the cart, increase its quantity
//         const productIndex = findItemIndex(cartitems, selectItem)
//         const updatedData: any = [...cartitems];
//         updatedData[productIndex] = { ...updatedData[productIndex], "qty": updatedData[productIndex].qty - 1 };
//         callback(updatedData, updatedData[productIndex].qty)
//       } else {
//         // If the item is not in the cart, add it with a quantity of 1
//         const updatedData: any = [...cartitems, selectItem];
//         callback(updatedData, 0)
//       }

//     } catch (err) {
//       // callback('');
//     }
//   };
// };

// export const deleteCartItem = (cartitems: any, selectItem: any, callback: Function): DispatchFunction<any> => {


//   return async (dispatch: Dispatch<any>) => {
//     try {
//       console.log("productIndex", selectItem)
//       const existingItem = findItem(cartitems, selectItem)
//       if (existingItem) {

//         const updatedData = filterItem(cartitems, selectItem)
//         callback(updatedData)
//       }

//     } catch (err) {
//       // callback('');
//     }
//   };
// };




