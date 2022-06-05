import axios from "axios";
const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    login(user) {
        return axios.post(API_URL+'signin', {
            username: user.username,
            password: user.password
        }).then(
            res => {
                if(res.data.accessToken) {
                    localStorage.setItem('user',JSON.stringify(res.data));
                }
                return Promise.resolve(res.data);
            }
        )
    }
    register(user) {
        return axios.post(API_URL+'signup', {
            username: user.username,
            email: user.email,
            password: user.password,
            roles: user.roles
        })
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();