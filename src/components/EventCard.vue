<template>

<!--  method 2-->
<!--  here instead of passing id like method 1 we have used the name of the page then a params object -->
<!--  the advantage of using this method is when you are builidng a big app you and you have hardcoded the path then you have to go every page and chage it everyhwere-->
<!--  with this method all you have to id change the page name and you are good to go-->
<!--  Now go to EventDetails.vue -->
  <router-link :to="{ name:'EventDetails',params:{id:event.id} }">
    <div class="event-card">
      <span> @ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>



<!--  method 1-->
<!--  Now this is page where are displaying all the cards  using v-for  -->
<!--  as we have made this a file a component so we applied v-for on Events.vue-->
<!--  we have made it a component so as we know that to make a dynamic component you have to pass the props which i did below in the props property-->
<!--  now here the main thing to look is as all cards are displaying from here we want to click on each record to show it is a single record-->
<!--  so we have used router link in that we have passed an attribute "to" in that attr we passed /event/event.id (this event.id we are getting from the api)-->
<!--  bcz of this now our wehn ever we click on record the path will become /event/the id of the that specific object-->
<!--  now go to the EventDetails.vue where we have designed the template to show each record-->
<!--  <router-link :to="'/event/'+event.id">-->
<!--    <div class="event-card">-->
<!--      <span> @ {{ event.time }} on {{ event.date }}</span>-->
<!--      <h4>{{ event.title }}</h4>-->
<!--    </div>-->
<!--  </router-link>-->
</template>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
