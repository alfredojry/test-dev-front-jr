<template>
  <div id="back">
    <router-link :to="path" class="router-link">
      <img src="../assets/arrow-left.svg" alt="go back" />
      <div>Voltar</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Back',
    props: {
      path: { type: String },
    },
  }
</script>

<style scoped>
  #back {
    width: 100%;
    background-color: #FFFFFF;
  }
  .router-link {
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0%;
    padding-left: 3%;
    box-sizing: border-box;
  }
  img {
    width: 40px;
  }
  #back div {
    font-size: 18px;
    font-weight: 500;
    color: #495057;
    line-height: 144%;
  }
  a:visited {
    text-decoration: none;
  }
  @media (max-width: 899px) {
    img {
    width: 30px;
    }
    a>div {
      font-size: 14px;
    }
  }
</style>
