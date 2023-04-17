import { RouterLink, createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import("./views/Home.vue")},
    {path: '/about', name: 'about', component: () => import("./views/About.vue")},
    {path: '/timer', name: 'timer', component: () => import("./views/Timer.vue")},
    {path: '/stopwatch', name: 'stopwatch', component: () => import("./views/Stopwatch.vue")},
    {path: '/metronome', name: 'metronome', component: () => import("./views/Metronome.vue")},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;