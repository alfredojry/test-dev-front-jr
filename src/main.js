import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from        './App.vue'
import Login from      './components/Login.vue'
import Contacts from   './components/Contacts.vue'
import NewContact from './components/NewContact.vue'
import Model from      './utils/Model'

const fakeDb = new Model()

const routes = [
    { path: '/', component: Login },
    { path: '/contacts', component: Contacts, props: { fakeDb } },
    { path: '/new', component: NewContact, props: { fakeDb } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
