<template>
  <div id="new-contact">
    <Back :path="'/contacts'" />
    <div class="container-all">
      <h1 class="poppins">Cadastre um novo contato</h1>
      <p>Preencha as informações para cadastrar um novo contato</p>
      <form @submit="prevent">
        <label for="nome">
          Nome Completo
          <input type="text" name="nome" placeholder="Digite o nome do contato" v-model="nome" />
        </label>
        <label for="email">
          Email
          <input type="email" name="email" placeholder="Digite o email" v-model="email" />
        </label>
        <label for="celular">
          Celular
          <input type="tel" name="celular" placeholder="Digite o celular" v-model="celular" />
        </label>
        <button type="submit" @click="register">
          Cadastrar contato
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Back from './Back.vue'

  export default {
    name: 'NewContact',
    components: {
      Back,
    },
    methods: {
      prevent(event) {
        event.preventDefault();
      },
      register() {
        this.fakeDb.insertContact(this.nome || 'Anonymous', this.celular, this.email)
        this.nome = ''
        this.celular = ''
        this.email = ''
        alert('Contato cadastrado com sucesso!')
      }
    },
    props: {
      fakeDb: Object,
    },
    data() {
      return {
        nome: '',
        email: '',
        celular: '',
      }
    },
  }
</script>

<style scoped>
  .container-all {
    padding: 15%;
    padding-top: 10%;
  }
  input {
        padding: 16px;
        background-color: #F1F3F5;
        width: 100%;
        height: 56%;
        border-radius: 8px;
        box-sizing: border-box;
        border-width: 0px;
        margin-bottom: 10px;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-family: 'Montserrat', sans-serif;
        color: #495057;
        opacity: 64%;
        background-color: #F1F3F5;
        font-size: 16px;
        line-height: 148%;
    }
    h1 {
      color: #244677;
      font-size: 24px;
    }
    p {
      color: #495057;
      opacity: 0.64;
    }
    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    label {
        color: #12295B;
        font-weight: bold;
        font-size: 16px;
        line-height: 148%;
        text-align: left;
        width: 100%;
    }
    label[for=email], label[for=celular] {
      width: 48%;
    }
    button {
        background-color: #12295B;
        color: #FFFFFF;
        font-size: 16px;
        width: 100%;
        height: 56px;
        border-radius: 8px;
        padding: 16px 24px;
        box-sizing: border-box;
        border-width: 0px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 10%;
        cursor: pointer;
    }
    @media (max-width: 899px) {
        .container-all {
          padding: 20px;
        }
        form {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        label, p, button {
          font-size: small;
        }
        label[for=email], label[for=celular] {
          width: 100%;
        }
        button {
          padding: 10px;
          height: 40px;
        }
    }
</style>

