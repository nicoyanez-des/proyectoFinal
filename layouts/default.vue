<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    ><div class="text-center">
    <v-menu  offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
         <v-icon> mdi-menu </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to">
          <v-list-item-title>
            <v-btn >
            {{ item.title }}
            </v-btn>
            </v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
    </div>
   <v-btn class="btnLogin"
     to="/loginPerson" depressed
      color="success">
     Login
    </v-btn>
   <ul v-if="isLoggedIn" class="nav navbar-rigth">
        <li class="na-item logout" >
          <button class="btn btn-default"> Logout</button>

        </li>
   </ul>
  </v-app-bar>
    <v-main style="margin : auto">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    </v-app>
</template>

<script>
import {signOut, getAuth, onAuthStateChanged} from 'firebase/auth'
export default {
  
  name: 'DefaultLayout',
  data () {
    return {
      
      clipped: false,
      drawer: false,
      fixed: false,
      auth:null,
      isLoggedIn: false,
      items: [
        
        {
           title: 'Home',
          to: '/'
        },
        {
           title: 'Upload',
          to: '/proyectPage'
        },
        {
           title: 'Gallery',
          to: '/galleryProyect'
        },
        {
           title: 'Login',
           to: '/loginPerson'
        }


        
      ],
      miniVariant: false,
    
    }
  },
  logout(){
        

        signOut(this.auth)
        .then(() =>{
          this.isLoggedIn=false;
          this.$router.push('/loginPerson')
        })
        .catch()
      },
    
    mounted(){
         
         this.auth = getAuth();
         onAuthStateChanged(this.auth, (user)=>{
           if (user){
             this.isLoggedIn=true;
           }
         })
    }
}
</script>

<style scoped>
.btnLogin{
  margin-left: 90%;
}
</style>