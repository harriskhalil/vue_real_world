<template>
  <div class="events">
    <EventCard v-for="item in events" :key="item.id" :event="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
import EventService from "@/services/EventService";
export default {
  name: "Events",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null
    };
  },
  created() {
    EventService.getEvents()
        .then(response =>{
          this.events= response.data
        }).catch(error =>{
          console.log(error)
    })
  }
};
</script>
<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
