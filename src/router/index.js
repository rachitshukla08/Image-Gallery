import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ImageGallery from '../components/ImageGallery.vue'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: ImageGallery,
    }],
})