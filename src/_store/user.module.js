import { userService } from '../_services';

const state = {
    user_info: JSON.parse(localStorage.getItem('user'))|| {},
    token: JSON.parse(localStorage.getItem('token'))|| {},
};

const actions = {
};

const mutations = {
};

export const user = {
    namespaced: true,
    state,
    actions,
    mutations
};
