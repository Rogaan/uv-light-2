<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <section id="head">
          <ion-title id="title">
            Mes Commandes
          </ion-title>
           <ion-button shape="round" href="/login">
          <ion-icon :icon="logOutOutline" />
        </ion-button>
        </section>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
    
    <ion-list>
    <!-- <h2 v-for="message in messages" :key="message.id_commande"> {{message.code_commande+' '+message.date_creation_commande}} -->
       <ion-label v-for="message in messages" :key="message.id_commande">
              <h2>{{message.code_commande}}</h2>
              <h3>{{message.date_creation_commande}}</h3>
              <p>{{message.commentaire}}</p>
        </ion-label>
    </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList } from '@ionic/vue';
import axios from "axios";
import { logOutOutline, } from 'ionicons/icons';

export default defineComponent({
  data() {
    return {
      VARIABLE : "",
    }
  },
  
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, IonList },
  methods :{
  },
  setup() {

const messages = ref(null);

async function recuperationDeDonnees() {
    await axios
      .get('http://localhost/api/commandes.php')
      .then((response) => {
        messages.value = response.data
      })
    
  }
  onMounted(() => {
      recuperationDeDonnees();
    });
    return {
      logOutOutline,
      messages,
    }
  }
});
</script>

<style scoped>
#boutton_deco{
  float: right;
}

#head{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>