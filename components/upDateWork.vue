<template>
<div>
    <h2>Update Work</h2>
    <br> <br>
    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos de proyecto</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <v-text-field
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Nombre Proyecto"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Autor</label>
          <v-text-field
            v-model="autor"
            type="text"
            class="form-control"
            placeholder="Nicolás Yáñez"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Descripcion</label>
          <v-textarea outlined
            v-model="descripcion"
            class="form-control"
          />
        </div>
        
          <label>Url Imagen</label>
          <v-text-field
            v-model="urlImagen"
            type="text"
          />
      
        <v-btn @click="addProyect">
          A&ntilde;adir Proyecto
        </v-btn>
      </div>
    </div>
  </div>
</template>


<script>

import axios from 'axios';
export default {


  
  data() {
     return {
       nombre: "",
       autor:"",
       descripcion: "",
       urlImagen: "",
     };
   },
   methods: {
     addProyect() {
       if (this.nombre != "" && this.descripcion != "") {
         const proyect = {
           nombre: this.nombre,
           autor: this.autor,
           descripcion: this.descripcion,
           urlImagen: this.urlImagen,
         };
        
         axios.post('https://proyectofinal-18a51-default-rtdb.firebaseio.com/' + 'upLoadedProyect.json', proyect)
         .then((res)=>{
           console.log(res)
           this.nombre="";
           this.autor=""; 
           this.descripcion="";
           this.urlImagen=""
           
         })
         .catch((error)=>{
           console.log(error)
         })
       
       }
     },
   },
};
</script>
