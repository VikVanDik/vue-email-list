const { createApp } = Vue;


createApp({
  data () {
    return{
      urlAPI : 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },

  methods:{
    emailStamp (){
      axios.get(this.urlAPI)
        .then((result)=>{
          console.log(result.data.response)
        })
      },

      mailLoop () {
        for(let i = 0; i < 10; i++){
          this.emailStamp()
        }
      }

    },



  mounted (){
    this.mailLoop()
  }
}).mount('#app')