const {createApp} = Vue

createApp({
    data(){
        return{
            name:'Achi',
            age:19,
            rand:2,
            imgUrl:"https://img.freepik.com/free-vector/live-laugh-love-lettering-with-flowers_52683-29339.jpg?size=338&ext=jpg"
           }
    },
    methods:{
        myAgeInFiveYears(age){
                return age+5;
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
    }
}).mount('#assignment');