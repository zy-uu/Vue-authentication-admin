<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>
</template>
<script>
import UserService from '../services/user.service';
export default {
  name: 'User',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        console.log(response);
        this.content = response.data;
      })
      .catch(error => {
        console.log("error",error);
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      })
    
  }
};
</script>