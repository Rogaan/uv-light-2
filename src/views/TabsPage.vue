<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        
        <ion-tab-button tab="tab2" href="/tabs/MesCommandes">
          <ion-icon :icon="albumsOutline" />
          <ion-label>Mes Commandes</ion-label>
        </ion-tab-button>
          
        <!-- <ion-tab-button tab="tab3" href="/tabs/Commentaires">
          <ion-icon :icon="chatboxEllipsesOutline" />
          <ion-label>Commentaires</ion-label>
        </ion-tab-button> -->
        
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
import { ellipse, square, triangle, albumsOutline, chatboxEllipsesOutline,bodyOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      albumsOutline,
      chatboxEllipsesOutline,
      bodyOutline,
    }
  }
});
</script>
