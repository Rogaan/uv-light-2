<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <section id="head">
          <ion-title id="title">
            Commentaires
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
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { logOutOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon },
  setup() {
    return {
      logOutOutline,
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
