import "./css/site.css";
import Vue from "vue";
import VueRouter from "vue-router";

import 'bootstrap'

Vue.use((VueRouter) as any);

const routes = [
    { path: "/", component: require("./components/home/home.vue.html").default },
    { path: "/counter", component: require("./components/counter/counter.vue.html").default },
    { path: "/fetchdata", component: require("./components/fetchdata/fetchdata.vue.html").default },
    { path: "/todos", component: require("./components/todos/todos.vue.html").default }
];

var vm = new Vue({
    el: "#app-root",
    router: new VueRouter({ mode: "history", routes: routes }),
    render: h => h( require("./components/app/app.vue.html").default )
});
