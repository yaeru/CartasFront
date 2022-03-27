<template>
  <section class="uk-section">
    <div class="uk-container uk-container-large">
      <div class="card-character uk-card uk-card-secondary uk-card-body uk-card-small uk-width-1-2@m uk-align-center uk-text-center">
        <div v-show="error !== ''" class="p-3 border">
          <p>{{ error }}</p>
        </div>
        <h1>Signup</h1>
        <form @submit="createUser">
         <div class="uk-margin">
           <input
           v-model="email"
           class="uk-input"
           type="email"
           placeholder="email"
           />
         </div>
         <div class="uk-margin">
           <input
           v-model="username"
           class="uk-input"
           type="text"
           placeholder="username"
           />
         </div>
         <div class="uk-margin">
           <input
           v-model="password"
           class="uk-input"
           type="password"
           placeholder="password"
           />
         </div>
         <div class="uk-margin">
           <button
           class="uk-button uk-button-primary"
           :disabled="email === '' || password === '' || username === ''"
           type="submit"
           >
           Signup
         </button>
       </div>
     </form>
   </div>
 </div>
</section>
</template>
<script>
 export default {
   data() {
     return {
       email: '',
       username: '',
       password: '',
       error: '',
     }
   },
   methods: {
     async createUser(e) {
       e.preventDefault()
       try {
         const newUser = await this.$strapi.register({
           email: this.email,
           username: this.username,
           password: this.password,
         })
         console.log(newUser)
         if (newUser !== null) {
           this.error = ''
           this.$nuxt.$router.push('/decks')
         }
       } catch (error) {
         this.error = error.message
       }
     },
   },
   middleware: 'auth',
 }
</script>
<style></style>