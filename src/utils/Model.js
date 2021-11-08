import contatos from './contatos.json'

class Model {

  constructor() {
    this.data = contatos.contatos
  }

  getContacts() {
    return this.data
  }
  
  insertContact(name, phone, email) {
    const lastIndex = this.data.length ? Math.max(...this.data.map(contact => contact.id)) : 0
    const contact = {
      id: lastIndex + 1,
      nome: name,
      email: email,
      celular: phone,
    }
    this.data.push(contact)
  }
  
  deleteContact(id) {
    const index = this.data.findIndex(contact => contact.id === id)
    if (index != -1) {
      this.data = this.data.slice(0, index).concat(this.data.slice(index + 1))
    }
  }

}

export default Model
