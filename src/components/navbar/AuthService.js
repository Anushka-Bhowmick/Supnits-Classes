class AuthService {
    static isAuthenticated() {
        return localStorage.getItem('authenticated') === 'true';
    }

    static login(username, password) {
        localStorage.setItem('authenticated', 'true');
    }

    static logout() {
        localStorage.setItem('authenticated', 'false');
    }
}

export default AuthService;
