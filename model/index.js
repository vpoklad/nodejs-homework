const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const path = require('path');

const contactPath = path.join(__dirname, 'contacts.json');

const readContent = async () => {
  const content = await fs.readFile(contactPath, 'utf8');
  return JSON.parse(content);
}

const writeContent = async (content) => {
  await fs.writeFile(contactPath, JSON.stringify(content, null, 2))
}


const listContacts = async () => await readContent();  


const getContactById = async (contactId) => {
  
  const contacts = await readContent()
    return contacts.find(it => it.id === contactId)
}

const removeContact = async (contactId) => {
  const contacts = await readContent();
  const newContacts = contacts.filter(it => it.id !== contactId);
  await writeContent(newContacts);
}

const addContact = async (body) => {
  
}

const updateContact = async (contactId, body) => {}


// getContactById('2').then(console.log)
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
