<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- CONTENU DE TOUTE LA PAGE -->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page Connexion</ion-title>
          
        </ion-toolbar>
      </ion-header>
      <ion-item>
          <ion-label position="floating">Login</ion-label>
          <ion-input v-model="login"/>
    </ion-item>
          
      <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input v-model="mdp"/>
      </ion-item>
      <ion-button id="bouton_connexion" color="btn btn-success" @click="RecupInput">Connexion</ion-button>

      <!-- TEST -->
      
      <!-- FIN DE TEST -->
    </ion-content>
  </ion-page>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonItem } from '@ionic/vue';

//import ExploreContainer from '@/components/ExploreContainer.vue';
export default  defineComponent({
  data() {
    return {
      login: "",
      mdp: ""
    }
  },
  name: 'Login1User',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonLabel, IonInput, IonItem },
  methods: { 
    RecupInput() {
      alert(this.login + " - " + this.mdp)
    } 
  }
});
</script>
<!-- STYLE UNIQUEMENT POUR CETTE PAGE -->
<style scoped>
  #bouton_connexion {
    display: block;
    margin : auto;
    margin-top: 10px;
    width: 90%;
  }
</style>