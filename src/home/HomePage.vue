<template>
    <div>
        <h1>Hi {{user.user_name}}!</h1>
        <p>You're logged in CRM !!</p>
        <h3>Users from secure api end point:</h3>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: state => state.user.user_info
        })
    },
    created () {
       // this.getAllUsers();
    },
    methods: {
//        ...mapActions('users', {
//            getAllUsers: 'getAll',
//            deleteUser: 'delete'
//        })
    }
};
</script>