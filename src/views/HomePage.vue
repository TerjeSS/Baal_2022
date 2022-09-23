<!-- setup for composition API -->
<script setup lang="ts">
import { directus } from "@/services/directus.service";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
  onIonViewDidEnter

} from "@ionic/vue";
import { addCircle } from "ionicons/icons";
import { ref } from "vue";



let campingSpots = ref([])

//State



//Ligner på useState. Utfører spørring på Directus-objektet.
onIonViewDidEnter(async () => {
  const result = await directus.graphql.items(
    `
    query {
  camp_spots {
    id
    title
    description
    hashtags
    image {
      id
    }
    user_created {
      first_name
    }
  }
}
    `
  )

  campingSpots.value = [...result.data.camp_spots]
})


</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Baal ⛺️</ion-title>
        <ion-searchbar animated="true" mode="ios" class="header-searchbar" placeholder="Search Campsites">
        </ion-searchbar>

        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" color="primary" :icon="addCircle" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card v-for="spot in campingSpots" :key="spot.id" :router-link="'/detail/' + spot.id">
        <img :src="spot.imgUrl" />
        <ion-card-header>
          <ion-card-subtitle>{{ spot.hashtags }}</ion-card-subtitle>
          <ion-card-title>
            {{ spot.title }}
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          {{ spot.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<style>

</style>
