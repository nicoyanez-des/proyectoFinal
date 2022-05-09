<template>
    <div>
    <h3>Bienvenidos!</h3>

    <div>
    

    <div class="card" style="width: 35rem">
      <div class="card-body">
        

        <div class="form-group">
          <label for="email">Email</label>
          <input style="color: white"
            v-model="email"
            type="text"
            class="form-control"
            placeholder="email@elemail.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input style="color: white"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="*****"
          />
        </div>
       
        <button class="btn btn-primary" @click="login">
          Iniciar sesión
        </button>
        <button class="btn btn-primary" @click="register">
          Registrar
        </button>
        <p v-if="error" class="error">{{errorMessage}}</p>
      </div>
    </div>
  </div>
</div>
</template>


<script>

import {signOut, getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
export default {

    data(){

        return{

            email:"",
            password:"",
            error: false,
            errorMessage:"",
            auth:null,
            isLoggedIn: false,


        }

     
    },
    methods:{

        login(){
            
            console.log("Login");
            let auth = getAuth();
            this.error = false;
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((res) =>{

                console.log(res)
                
                this.$router.push('/add')
            })
            .catch((error) =>{
                this.error = true;
                 console.log(error)
                 let msg="";
                 console.log(error.code)
                 if(error.code === 'auth/wrong-password'){
                     msg="Password Incorrecta. Verifique e intenete nuevamente."
                     
                 }
                 else if(error.code === 'auth/user-not-found'){

                        msg="No se encontro el ususario. Verifique e intente nuevamente"
                 }

                 else if(error.code === 'auth/invalid-email'){

                        msg="Email invalido. "
                 }
                 else{
                     msg="Ha ocurrido un error, no se pudo iniciar sesión."
                 }

                 this.errorMessage = msg;

            })
        },
        register(){

            console.log("Register")
            let auth= getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((res) =>{
                console.log(res);
                console.log("Se ha creado el usuario!!");
                console.log(auth.currentUser);
                this.$router.push('/add');
            })
            .catch(
                (error) => {
                    console.log(error)
                })

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
