<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }} </p>
    <p>{{ event.description }}</p>
  </div>

</template>
<script>
import EventService from "@/services/EventService";
export default {
  name:'EventDetails',
  //method2:
  //in here instead of creating vue property in the data obj you just need to pass the prop
  //now go back to index.js
  props:['id'],
  data(){
    return{
      event:null,
      //first method:
      //let me tell you the use of this.$route.params.id
      //this is functionality which helps to get the id we have passed in the url in the EventCard.vue in the router-link like this /event/+event.id
      //what it will do from the url it will fecth that id and store in it self
      //then we assigned and id object here and we store that id in id:
      // id: this.$route.params.id
    }
  },
  created() {
    //first method:
    //here we have called the func which we have made in EventService.js
    //the way to call this method is first import the EventService.js file the here write that file name then . then function name and here
    //in params we pass this.id whcih is reflecting towrds the id property present in thr data object
    EventService.getevent(this.id).then(response =>{
      this.event= response.data
    }).catch(error =>{
      console.log(error)
    })
  }
}
</script>