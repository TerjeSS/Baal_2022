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
const togglePageSwitch = (login: boolean) => {
    login ? loginToggle.value = true : loginToggle.value = false
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
        <ion-header>
            <ion-toolbar>
                <ion-segment value="all" mode="ios">
                    <ion-segment-button value="all" @click="togglePageSwitch(true)">
                        <ion-label>Log in</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="favorites" @click="togglePageSwitch(false)">
                        <ion-label>Sign up</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>

        </ion-header>

        <ion-content v-if="loginToggle">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-col>
                        <ion-text class="ion-text-center ion-text-uppercase">
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
                        <ion-text class="ion-text-center ion-text-uppercase">
                            <h1>Sign up</h1>
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
    </ion-page>
</template>
<style>

</style>