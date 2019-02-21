export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    if (token && token.access_token) {
        return { 'Authorization': 'Bearer ' + token.access_token };
    } else {
        return {};
    }
}