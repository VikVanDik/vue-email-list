const { createApp } = Vue;


createApp({
  data () {
    return{
      urlAPI : 'https://flynn.boolean.careers/exercises/api/random/mail',
      mails : []
    }
  },

  methods:{


    emailStamp (){
      axios.get(this.urlAPI)
        .then((result)=>{
          this.mails.push(result.data.response)
          console.log(this.mails);
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