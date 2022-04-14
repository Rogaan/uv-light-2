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
      <ion-item id="input_login">
          <ion-label position="floating">Login</ion-label>
          <ion-input v-model="login"/>
    </ion-item>
          
      <ion-item id="input_mdp">
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input  v-model="mdp"/>
      </ion-item>

      <ion-button id="bouton_connexion" color="success" @click="RecupInput">Connexion</ion-button>

      
      <!-- TEST -->
      
      <!-- FIN DE TEST -->
    </ion-content>
  </ion-page>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonButton  } from '@ionic/vue';

//import ExploreContainer from '@/components/ExploreContainer.vue';
export default  defineComponent({
  data() {
    return {
      login: "",
      mdp: ""
    }
  },
  name: 'Login1User',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonInput, IonItem, IonButton },
  methods: { 
    RecupInput() {
      alert(this.login + " - " + this.mdp)
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
    margin-top: 200px;
  }
</style>