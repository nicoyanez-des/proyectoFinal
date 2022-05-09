<template>
    <div>
    <div class="card" v-if="proyect != undefined && !loading">

<div v-if="!editando">
      <h5 class="card-header">{{ proyect.nombre }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>Autor : {{proyect.autor}}</p>
          <p>Descripcion : {{proyect.descripcion}}</p>
        </div>
  </div>
   </div>

  <div v-else-if="proyectEdicion">
      <h5 class="card-header"><input type="text" v-model="proyectEdicion.nombre"></h5>
      <div class="card-body">
        <div class="card-text">
          <p>Autor : <input type="text" v-model="proyectEdicion.autor"></p>
          <p>descripcion : <input type="text" v-model="proyectEdicion.descripcion"></p>
        </div>
       </div>     
  </div>

    </div>
    <div class="actions">
      <button class="btn btn-primary" @click="editar">{{editando? 'Cancelar' : 'Editar'}}</button>
      <button class="btn btn-danger" @click="eliminar" v-if="!editando">Eliminar</button>
      <button v-if="editando" class="btn btn-success" @click="guardarCambios">Aceptar</button>
    </div>
    <div v-if="loading">
      Cargando....
    </div>

   <!-- <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div> -->
    <v-btn color="secondary"></v-btn>
    <router-link to="/galleryProyect">Volver</router-link>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
 

  data(){
       
       return {
         index:"",
         proyect:null,
         proyectEdicion:null,
         loading:false,
         editando: false,
       }

  },
 
   
   methods:{
          
         eliminar(){
           console.log("eliminando");
           if(confirm("Esta seguro que desea eliminar a " + this.proyect.nombre + "?")){
               axios.delete('upLoadedProyect/' + this.index + '.json')
              .then((res)=>{
                console.log(res.data)
                
               
              })
              .catch()

           }
         },

         editar(){

              console.log("Editando...")
              this.editando=!this.editando;
              if(this.editando){
                this.proyectEdicion ={
                nombre : this.proyect.nombre,
                email : this.proyect.email,
                aporte : this.proyect.aporte,
                }
              }
              else{
                this.proyectEdicion =null;
              }
                   
         },

         guardarCambios(){
           
           
              axios.put('upLoadedProyect/' + this.index + '.json', this.proyectEdicion)
              .then((res)=>{
                console.log(res.data)
                this.proyect = res.data;
                this.editando=!this.editando;
              })
              .catch()

           console.log("Guardando cambios...")

         },

         getProyectById(){
           this.loading=true;
         
           axios.get('upLoadedProyect/' + this.index + '.json')
           .then((res)=>{
           
           console.log(res);
           
           this.proyect = res.data;
           this.loading=false;
           
           
           
         })
         .catch((error)=>{
           console.log(error)
           this.loading=false;
          
         })
         }
   },
   created(){
     
     this.getProyectById();
   }
};
</script>
