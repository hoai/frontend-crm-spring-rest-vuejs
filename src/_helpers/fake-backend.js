// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let token = JSON.parse(localStorage.getItem('token')) || [];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            realFetch(url, opts).then(response => resolve(response));
        });
    }
}