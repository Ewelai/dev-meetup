<template>
  <div>
    <!-- <p class="custom">{{msg}}</p> -->
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
  <!-- <app-login></app-login> -->
</template>

<script src="./Home.js"></script>
