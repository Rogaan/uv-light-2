<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="top">
        
        <ion-tab-button tab="user1" href="/user/Connexion">
          <ion-icon :icon="closeCircleOutline" />
          <ion-label></ion-label>
        </ion-tab-button>
          
        
        <!-- <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button> -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, albumsOutline, chatboxEllipsesOutline, closeCircleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'LoginUser',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      albumsOutline,
      chatboxEllipsesOutline,
      closeCircleOutline,
    }
  }
});
</script>