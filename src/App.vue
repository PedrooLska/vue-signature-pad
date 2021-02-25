<template>
  <div id="app">
    <VueSignaturePad id="signature" ref="signaturePad" :options="options" />

    <button style="margin-top: 30px" @click="salvar">SALVAR IMAGEM</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    options: {
      penColor: '#3971B3',
      backgroundColor: 'black',
      minWidth: 0.5,
      maxWidth: 2.5,
      throttle: 16,
      minDistance: 0
    }
  }),

  methods: {
    salvar() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      alert('Open DevTools see the save data.');
      console.log(isEmpty);
      console.log(data);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 90vh;

  border: 1px solid blue;
}

#signature {
  border: double 3px red;
  border-radius: 5px;
}
</style>
