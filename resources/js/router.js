import Vue from 'vue';
import VueRouter from 'vue-router';

const foo = {template: "<v-alert type='error'> i'm Foo Component</v-alert>"}
const bar = {template: "<v-alert type='error'> i'm Bar Component</v-alert>"}
const user = {template: "<v-alert type='error'> i'm {{$route.params.name}}</v-alert>"}

Vue.use(VueRouter);

const routes = [
    {
        path: '/foo',
        component: foo
    },
    {
        path: '/bar',
        component: bar
    },
    {
        path: '/user/:name',
        component: user
    }
];

export default new VueRouter({routes});
