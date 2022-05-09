<template>
    <div>
    <h3>Proyect gallery </h3>
     <br><br><br>
    <ul v-if="proyects.length>0 && !loading">
      <v-container>
        <v-row>
        
      <v-col cols="12" md="6" style="list-style:none" v-for="proyect in proyects" :key="proyect.id">
      
    <v-card class="mx-auto" 
      max-width="344" >
       <router-link to="/proyectComplete"> 
    <v-img :src='proyect.urlImagen' 
      height="200px"
    ></v-img>
    </router-link>
    <v-card-title >
    {{proyect.nombre}}
    </v-card-title>

    <v-card-subtitle>
     {{proyect.autor}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Descripción
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{proyect.descripcion}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
  <br><br>

     
      </v-col>
      </v-row>
      </v-container>
    </ul>

    
    <div v-else-if="loading">
       Cargando....
     </div>
    <div v-else >
      <p>No hay nada aqui :c</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){

        return{
         
          proyects:[],
          loading:false,
          show: false,
         
        }
  },
  methods:{
    getProyect(){
      this.loading=true;

    
         let url= 'https://proyectofinal-18a51-default-rtdb.firebaseio.com/' + 'upLoadedProyect.json';
         axios.get(url)
         .then((res)=>{
           let results=[];
           console.log(res);
           for (let id in res.data){
             console.log(id);
             console.log(res.data[id]);
             results.push({
               id: id,
               nombre: res.data[id].nombre,
               autor: res.data[id].autor,
               descripcion: res.data[id].descripcion,
               urlImagen: res.data[id].urlImagen
             });
           }
           this.proyects = results;
           console.log(this.proyects);
           this.loading=false;
           
           
         })
         .catch((error)=>{
           console.log(error)
           this.loading=false;
         })
    }
  },

  toProyectoComplete(){
  
     
  },
  created(){
    this.getProyect();
  
  
  },

  head(){
    return {
    title: 'Gallery proyect',
    meta: [
      {
        hid:'Gallery proyect',
        name : 'Gallery proyect',
        content : 'Es un pequeño repositorio de proyectos para portafolios de trabajos'
      }
    ]
    }
 }

};
</script>
