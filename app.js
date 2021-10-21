const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    // we can do by template or show in html file
    data() {
        return {
            firstName: 'John',
            lastname: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Sam',
            this.lastname ='Smith',
            this.email = 'sam@gmail.com',
            this.gender ='female',
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
    },
})

app.mount('#app')