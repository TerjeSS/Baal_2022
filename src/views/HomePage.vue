<!-- setup for composition API -->
<script setup lang="ts">
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
  IonButtons

} from "@ionic/vue";
import { addCircle } from "ionicons/icons";

import { ref } from "vue";
let campingSpots = ref([
  {
    id: 1,
    title: "Fin plass ved Ulsrudvann",
    description: "fant denne da jeg gikk kveldstur rundt vannet",
    hashtags: "#østmarka #oslo #nærtur",
    imgUrl:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  },
]);

function addCampingSpot() {
  const newSpot = {
    id: 2,
    title: "Fin plass ved Sognsvann",
    description: "fant denne da jeg gikk morgentur rundt vannet",
    hashtags: "#nordmarka #oslo #nærtur",
    imgUrl:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
  };
  campingSpots.value = [newSpot, ...campingSpots.value];
}
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Baal ⛺️</ion-title>
        <ion-searchbar animated="true" mode="ios" class="header-searchbar" placeholder="Search Campsites">
        </ion-searchbar>

        <ion-buttons slot="primary">
          <ion-button @click="addCampingSpot">
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
