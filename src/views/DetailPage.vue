<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  IonPage,
  IonText,
  IonHeader,
  IonCardHeader,
  IonToolbar,
  IonItem,
  IonModal,
  IonButtons,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonSearchbar,
  IonTextarea,
  IonCardContent,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { ref } from "vue";
import { addCircle } from "ionicons/icons";
import { chatboxOutline } from "ionicons/icons";

//Route
const route = useRoute();
const { id } = route.params;



// Dummy data 
const campSite = ref({
  id: 1,
  title: "Fin plass ved Ulsrudvann",
  description: "Fant denne da jeg gikk kveldstur rundt vannet",
  imageURL:
    "https://www.skiforeningen.no/globalassets/bilder/hege-w/ukens-tur/telttur/telt-nedreblanksjo.jpg?w=1200",
  hashtags: ["østmarka", "oslo", "nærtur"],
  location: {
    latitude: 59.888033,
    longitude: 10.862266,
  },
  comments: [
    {
      id: 1,
      username: "Andreasss",
      comment: "Flott ved Ulsrud, men ta med drikkevann!",
    },
    {
      id: 2,
      username: "Bob the Builder",
      comment: "Likte ikke dette stedet noe særlig. For mye maur",
    },
  ],
});

// STATE

const isModalOpen = ref(false);
const newCommentText = ref("");

const addNewComment = () => {
  campSite.value.comments.unshift({
    id: 2,
    username: "Someone",
    comment: newCommentText.value,
  });
  isModalOpen.value = false;
  newCommentText.value = "";
};
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"> </ion-back-button>
        </ion-buttons>

        <ion-text slot="start">
          {{ campSite.title }}
        </ion-text>
        <ion-searchbar mode="ios" class="header-searchbar" placeholder="Search Campsites"></ion-searchbar>
        <ion-buttons slot="end">
          <ion-button @click="isModalOpen = true">
            <ion-icon :icon="chatboxOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <img class="bilde" :src="campSite.imageURL" />
        <ion-card-header>
          <ion-card-title>
            {{ campSite.title }}
            <ion-buttons slot="primary">
              <ion-button>
                <ion-icon slot="icon-only" color="primary" :icon="addCircle" size="large"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-card-title>
          <ion-card-subtitle>
            <p>
              <ion-text v-for="hash in campSite.hashtags" :key="hash">
                #{{ hash }}
              </ion-text>
            </p>
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-text>
            <p>{{ campSite.description }}</p>
          </ion-text>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card v-for="comment in campSite.comments" :key="comment.id">
          <ion-text>
            <p>
              {{ comment.comment }}
            </p>
          </ion-text>
          <ion-card-subtitle> -{{ comment.username }} </ion-card-subtitle>
        </ion-card>
      </ion-card>
      <ion-modal :is-open="isModalOpen" :initial-breakpoint="0.25" @did-dismiss="isModalOpen = false"
        :breakpoints="[0, 0.25, 0.5, 0.75]">
        <ion-content>
          <ion-item lines="none">
            <ion-label position="floating"> Ny kommentar </ion-label>
            <ion-textarea v-model="newCommentText"> </ion-textarea>
            <ion-button @click="addNewComment">Legg til kommentar</ion-button>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
<style>
.bilde {
  width: 100vw;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
