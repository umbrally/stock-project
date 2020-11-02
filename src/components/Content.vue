<template>
  <v-card class="mx-auto" max-width="500">
    <v-container>
      <v-card-title class="red-text">Stock Price Predictor</v-card-title>
      <v-divider></v-divider>
      <div class="mt-5">1. 輸入波段的高點及低點</div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="輸入過去波段高點"
            outlined
            v-model="highPoint"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="輸入過去波段低點"
            outlined
            v-model="lowPoint"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <div>2. 選擇參數</div>
      <v-row>
        <v-col cols="12">
          <v-select
            :items="parameters"
            label="選擇參數"
            solo
            v-model="selectedParameter"
          ></v-select>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="mt-5">
        <div class="mb-5 pa-2 red lighten-4">
          <v-icon color="red darken-4">mdi-arrow-up</v-icon>
          波段未來高點:
          <span>{{ predictedHighPrice }}</span>
        </div>
        <div class="mb-5 pa-2 lime lighten-4">
          <v-icon color="lime darken-4">mdi-arrow-down</v-icon>
          波段未來低點: <span>{{ predictedHLowPrice }}</span>
        </div>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      highPoint: null,
      lowPoint: null,
      parameters: [1.146, 1.246, 1.382, 1.618],
      selectedParameter: null,
    };
  },
  computed: {
    predictedHighPrice() {
      if (this.highPoint && this.lowPoint && this.selectedParameter) {
        const highPoint = Number.parseFloat(this.highPoint);
        const lowPoint = Number.parseFloat(this.lowPoint);
        const selectedParameter = Number.parseFloat(this.selectedParameter);
        const diff = highPoint - lowPoint;
        const result = diff * selectedParameter + lowPoint;
        return result.toFixed(2);
      }
      return 0;
    },
    predictedHLowPrice() {
      if (this.highPoint && this.lowPoint && this.selectedParameter) {
        const highPoint = Number.parseFloat(this.highPoint);
        const lowPoint = Number.parseFloat(this.lowPoint);
        const selectedParameter = Number.parseFloat(this.selectedParameter);
        const diff = highPoint - lowPoint;
        const result = highPoint - diff * selectedParameter;
        return result.toFixed(2);
      }
      return 0;
    },
  },
};
</script>