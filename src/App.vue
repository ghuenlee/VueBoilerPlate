<template>
  <div id="app">
    <b-container>
      <b-jumbotron>
        <template slot="header">
          <fa-icon :icon="['far','flag']" color="teal" /> Bootstrap-Vue
        </template>
        <template slot="lead">
          Vue boilerplate featuring Bootstrap, FontAwesome & more!
        </template>
        <hr class="my-4">
        <p>
          Below you'll find Bootstrap buttons proudly featuring FontAwesome icons!
        </p>
        <b-btn v-b-modal.modal1 variant="primary" href="#">
          <fa-icon icon="home" /> Home</b-btn>
        <b-btn variant="success disabled" href="#">
          <fa-icon icon="cog" spin/> Loading... (Not)</b-btn>
        <b-modal id="modal1" title="Bootstrap-Vue" v-on:ok="counter += 1">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
        <br>
        <b-alert v-if="counter > 0" show>
          <b>Hello!</b> you've clicked the OK button
          <b>{{counter}} time(s)!</b>
        </b-alert>
      </b-jumbotron>
      <router-view/>
    </b-container>
    <Sidebar />
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue'

  export default {
    name: 'App',

    data() {
      return {
        counter: 0
      }
    },
    components: {
      Sidebar
    }
  }

</script>

<style>
  #app {
    margin-top: 60px;
  }

</style>
