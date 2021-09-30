import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    fetchLoginPage() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserByEmail(userEmail) {
        return axios.get(USER_API_BASE_URL + '/' + userEmail);
    }
    fetchUsers() {
        return axios.get(USER_API_BASE_URL + "/getAllUsers");
    }
    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
    // fetchAdminDashBoard() {
    //     return axios.get(USER_API_BASE_URL + '/admin');
    // }
    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL + "/addUser", user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId, user);
    }

    //menu CRUD

    fetchMenu() {
        return axios.get(USER_API_BASE_URL + "/getAllMenus");
    }

    addMenu(menu) {
        return axios.post(""+USER_API_BASE_URL + "/addMenu", menu);
    }

    deleteMenu(CategoryId) {
        return axios.delete(USER_API_BASE_URL + '/menu/' + CategoryId);
    }

    editMenu(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId, user);
    }

    //order

    fetchOrder() {
        return axios.get(USER_API_BASE_URL + "/getAllOrders");
    }

    addOrder(order) {
        return axios.post(""+USER_API_BASE_URL + "/addOrder", order);
    }

    deleteOrder(orderId) {
        return axios.delete(USER_API_BASE_URL + '/order/' + orderId) ;
    }

    editOrder(order) {
        return axios.put(USER_API_BASE_URL + '/' + order.orderId, order);
    }

      //Tax

      fetchTax() {
        return axios.get(USER_API_BASE_URL + "/getAllTaxes");
    }

    addTax(tax) {
        return axios.post(""+USER_API_BASE_URL + "/addTax", tax);
    }

    deleteTax(taxId) {
        return axios.delete(USER_API_BASE_URL + '/tax/' + taxId) ;
    }

    editTax(tax) {
        return axios.put(USER_API_BASE_URL + '/' + tax.taxId, tax);
    }

}

export default new ApiService();