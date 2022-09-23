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
} from "@ionic/vue";


//State

</script>
<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"> </ion-back-button>
                </ion-buttons>
                <ion-title>Add new campspot ⛺️</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-item>
                            <ion-label position="floating">
                                <ion-text>
                                    <h4>Title</h4>
                                </ion-text>
                            </ion-label>
                            <ion-input>
                            </ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">
                                <ion-text>
                                    <h4>Description</h4>
                                </ion-text>
                            </ion-label>
                            <ion-textarea>
                            </ion-textarea>
                        </ion-item>
                        <ion-item>
                            <ion-label>
                                <ion-text>
                                    <h4>Description</h4>
                                </ion-text>
                            </ion-label>
                            <ion-item>

                                <ion-input type="file">
                                </ion-input>
                            </ion-item>
                        </ion-item>

                    </ion-col>
                </ion-row>
            </ion-grid>

        </ion-content>
    </ion-page>
</template>
<style>

</style>