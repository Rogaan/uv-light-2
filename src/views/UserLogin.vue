<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page de Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- CONTENU DE TOUTE LA PAGE -->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page de Connexion</ion-title>
          
        </ion-toolbar>
      </ion-header>
       
      <form id="form" @submit.prevent="log()">

      <ion-title id="title">Connexion</ion-title>

      <ion-item id="input_login">
          <ion-label position="floating">Login</ion-label>
          <ion-input v-model="login"/>
      </ion-item>
          
      <ion-item id="input_mdp">
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input  v-model="mdp"/>
      </ion-item>
      
      <ion-button type='submit' id="bouton_connexion" color="success">Connexion</ion-button>
      </form>

    </ion-content>
  </ion-page>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonButton, toastController  } from '@ionic/vue';


export default  defineComponent({
  data() {
    return {
      login: "",
      mdp: ""
    }
  },
  name: 'UserLogin',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonInput, IonItem, IonButton },
  methods: { 
    // RecupInput() {
    //   alert(this.login + " - " + this.mdp)
    // },
    log() {
      axios
        .get(
          'http://localhost/api/produits.php?login='+this.login+'&password='+this.mdp
        )
        .then((response) => {
          if (response.status == 200) {
            window.location.href = "/tabs/MesCommandes";
            console.log(response);
          }
        })
        .catch((error) => {
          this.openToast();
        });
    },
    async openToast() {
      const toast = await toastController.create({
        message: "Mauvais identifiants de connexion, veuillez réessayer.",
        duration: 5000,
      });
      return toast.present();
    },
  },
});

</script>
<!-- STYLE UNIQUEMENT POUR CETTE PAGE -->
<style scoped>

  #bouton_connexion {
    display: block;
    margin : auto;
    margin-top: 20px;
    width: 40%;
  }

  #input_mdp{
    width: 70%;
    margin : auto;
    margin-top: 10px;
  }

  #input_login{
    width: 70%;
    margin : auto;
    margin-top: 20px;
  }

  #title{
    width: 70%;
    margin : auto;
    margin-top: 300px;
    text-align: center;
  }
</style>