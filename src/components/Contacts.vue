<template>
  <div id="contacts">
    <Back :path="'/'" />
    <div class="container-all">
      <div class="container-header">
        <h1 class="poppins">Listagem de contatos</h1>
        <router-link to="/new" class="router-link">
          <button>
            Adicionar novo contato
          </button>
          </router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tr v-for="contato in contatos" :key="contato.id">
          <td>{{ contato.id }}</td>
          <td>{{ contato.nome }}</td>
          <td>{{ contato.celular }}</td>
          <td>{{ contato.email }}</td>
          <td class="actions">
            <div class="action-edit">
              <img src="../assets/edit.svg" alt="editar" />
              Editar
            </div>
            <div class="action-delete" @click="deleteContact(contato.id)">
              <img src="../assets/trash.svg" alt="apagar" />
              Excluir
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Back from './Back.vue'

export default {
  name: 'Contacts',
  components: {
      Back,
    },
  props: {
    fakeDb: Object,
  },
  data() {
    return {
      contatos: [],
    }
  },
  mounted() {
    this.contatos = this.fakeDb.getContacts()
  },
  methods: {
    deleteContact(id) {
      this.fakeDb.deleteContact(id)
      this.contatos = this.fakeDb.getContacts()
    },
  },
}
</script>

<style scoped>
  #contacts {
    background-color: #F7F8FC;
    min-height: 100vh;
  }
  .container-all {
    background-color: #FFFFFF;
    margin: 30px;
    padding: 30px;
  }
  .container-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #244677;
    font-weight: 700;
    line-height: 124%;
    font-size: 24px;
  }
  button {
    background-color: #4263EB;
    border-width: 0px;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 16px 24px;
    color: #FFFFFF;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    height: 56px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  th {
    font-family: 'Poppins', sans-serif;
    color: #244677;
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
  }
  tr {
    height: 64px;
  }
  tr:nth-child(even) {
    background-color: #F1F3F5;
  }
  td {
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #495057;
    text-align: center;
    letter-spacing: -0.02em;
  }
  td:nth-child(1) {
    font-weight: 700;
    color: #244677
  }
  .actions {
    display: flex;
    align-items: center;
    height: 64px;
  }
  .action-edit {
    cursor: not-allowed;
  }
  .action-delete {
    cursor: pointer;
  }
  
  @media only screen and (max-width: 899px) {
  
  .container-all {
    padding: 5px;
    margin: 10px;
  }
  
  .container-header {
    flex-direction: column;
    /*justify-content: space-between;
    align-items: center;*/
  }
  
  h1 {
    font-size: x-large;
  }
  
  img {
    width: 20px;
  }
  
  button {
    font-size: small;
    padding: 6px;
    height: 30px;
  }

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr {
    height: 100%;
    /*border: 1px solid #ccc;
    width: 90vw;*/
  }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		position: relative;
		padding-left: 30%; 
		font-size: small;
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 25%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	td>div.action-edit {
    padding-left: 35%;
	}
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "#"; }
	td:nth-of-type(2):before { content: "Nome"; }
	td:nth-of-type(3):before { content: "Celular"; }
	td:nth-of-type(4):before { content: "Email"; }
	td:nth-of-type(5):before { content: "Ações"; }
}
</style>
