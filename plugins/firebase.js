import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCpqFK99ta5AVvmEURTEXgiivaGXJliVis",
    authDomain: "proyectofinal-18a51.firebaseapp.com",
    databaseURL: "https://proyectofinal-18a51-default-rtdb.firebaseio.com",
    projectId: "proyectofinal-18a51",
    storageBucket: "proyectofinal-18a51.appspot.com",
    messagingSenderId: "631534249954",
    appId: "1:631534249954:web:a3ec1db569f244ed3d3bbb",
    measurementId: "G-2CPXK301LE"
}

const app = createApp(App)

initializeApp(firebaseConfig);
