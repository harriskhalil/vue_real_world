import axios from "axios";
const apiClient = axios.create({
    baseURL:'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getEvents(){
        return apiClient.get('/events')
    },
    //method1:
    //here is the method of retreiving single record
    //all you have to do is pass the id in the params ands also in the url
    //now go to Event card.vue page


    //method2: everthing is same as method1 no change
    //now go to the EventCard.vue page
    getevent(id){
        return apiClient.get('/events/'+id)
    }
}