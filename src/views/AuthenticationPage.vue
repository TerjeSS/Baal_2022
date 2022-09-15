<script setup lang="ts">
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
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonGrid,
    IonCol,
    IonFooter,
    IonInput
} from "@ionic/vue";
import { ref } from "vue";

const loginToggle = ref(true)
const togglePageSwitch = () => {
    loginToggle.value = !loginToggle.value
}
</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Baal ⛺️
                </ion-title>

            </ion-toolbar>
        </ion-header>
        <ion-content v-if="loginToggle">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-col>
                        <ion-text class="ion-text-center ">
                            <h1>Log in</h1>
                        </ion-text>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col>
                        <ion-item mode="ios">
                            <ion-label position="floating">Username</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                        <ion-item mode="ios">
                            <ion-label position="floating">Password</ion-label>
                            <ion-input type="password"></ion-input>
                        </ion-item>

                    </ion-col>
                </ion-row>
                <ion-row class="ion-justity-content-center">
                    <ion-col>
                        <ion-buttons class="ion-justify-content-center ion-margin-top">
                            <ion-button shape="round" expand="full" color="success" fill="outline" size="small">
                                Log in
                            </ion-button>
                        </ion-buttons>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
        <ion-content v-else>
            <ion-grid>
                <ion-row class="ion-align-items-center ion-justify-content-center">
                    <ion-col>
                        <ion-text class="ion-text-center">
                            <h1>Log in</h1>
                        </ion-text>

                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item mode="ios">
                            <ion-label position="floating">First name</ion-label>
                            <ion-input></ion-input>
                        </ion-item>

                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item mode="ios">
                            <ion-label position="floating">Last name</ion-label>
                            <ion-input></ion-input>
                        </ion-item>

                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item mode="ios">
                            <ion-label position="floating">Email</ion-label>
                            <ion-input></ion-input>
                        </ion-item>

                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-item mode="ios">
                            <ion-label position="floating">Password</ion-label>
                            <ion-input></ion-input>
                        </ion-item>

                    </ion-col>
                </ion-row>
                <ion-row class="ion-justity-content-center">
                    <ion-col>
                        <ion-buttons class="ion-justify-content-center ion-margin-top">
                            <ion-button shape="round" expand="full" color="success" fill="outline" size="large">
                                Register user
                            </ion-button>
                        </ion-buttons>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>

        <ion-footer>
            <ion-toolbar>
                <ion-segment>
                    <ion-segment-button @click="togglePageSwitch">
                        <ion-text>Log in</ion-text>
                    </ion-segment-button>
                    <ion-segment-button @click="togglePageSwitch">
                        <ion-text>
                            Sign Up
                        </ion-text>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
<style>

</style>