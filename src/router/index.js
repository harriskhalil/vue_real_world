import { createRouter, createWebHistory } from "vue-router";
import Events from "../views/Events.vue";
import EventDetails from "@/views/EventDetails";
const routes = [
  {
    path: "/",
    name: "Events",
    component: Events,
  },
  //this is the second method of dynamic routing
    //here everything is same as method:1 but we have passed and additional data which is props:true
    //this i will explain at the end why
    //now go to the EventService.js

    //now all you have to do is to tell this route that you are passing the prop by making true
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
    // method1: dynamic routing is by using $route.params.id
    //in this method all you just have to do is pass the id by using :id
    //Now  go to the Event Service.js file
  // {
  //   path: "/event/:id",
  //   name: "EventDetails",
  //   component: EventDetails,
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
