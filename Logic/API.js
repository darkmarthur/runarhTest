// // login validation

// import Config from 'react-native-config'
// import { NetworkData } from '../../../utils/NetworkData'

// function authData(username, password) {
//     const URL_PARAMS = `?j_username=${username}/${Config.EVENT_ID}&j_password=${password}`;
//     return fetch(NetworkData.LOGIN_URL + URL_PARAMS, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
//     })
//         .then(res => res.json())
//         .then(
//             response => {
//                 return response
//             }
//         )
//         .catch(error => {
//             throw error
//         })
// }

// function registerUser(emailAddress, firstName, lastName, password) {
//     return fetch(NetworkData.REGISTER_URL, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             emailAddress,
//             firstName,
//             lastName,
//             password
//         }),
//     })
//         .then(res => res.json())
//         .then(
//             response => {
//                 return (
//                     {
//                         success: response.success,
//                         message: response.message
//                     }
//                 )
//             }
//         )
//         .catch(err => {
//             throw err
//         })
// }

// function resetPassword(emailAddress) {
//     return fetch(NetworkData.RESET_PASSWORD_URL, {
//         method: 'PUT',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             emailAddress: emailAddress,
//         }),
//     })
//         .then(res => res.json())
//         .then(
//             response => {
//                 return (
//                     {
//                         success: response.success,
//                         message: response.message
//                     }
//                 )
//             }
//         )
//         .catch(err => {
//             throw err
//         })
// }

// module.exports = {
//     authData,
//     registerUser,
//     resetPassword
// }
