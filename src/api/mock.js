import * as MOCK from "./menu.json";
export function fetchProducts() {
   return MOCK.menu;
   // Resolve the products from menu.json after a random timer
}
// export function registerUser(name, email) {
//    let user = new Object();
//    user.id = Date.now();
//    user.name = name;
//    user.email = email;
//    console.log(user);
//    return user;
// }

// export async function makeOrder(userId, cardItems) {
//    // Resolve with a orderId, order total price and ETA after a random timer
//    // Persist order coupled userId in an array in localStorage
// }

// export async function fetchOrderHistory(userId) {
//    // Resolve an array of orders after a random timer
// }
