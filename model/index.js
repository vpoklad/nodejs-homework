const { Contacts } = require('../db/contactModel');

const listContacts = async () => {
  const contacts = await Contacts.find({});
  return contacts;
};

const getContactById = async contactId => {
  const contact = await Contacts.findById(contactId);
  return contact;
};

const removeContact = async contactId => {
  // const contacts = await readContent();
  // const newContacts = contacts.filter(it => it.id !== contactId);
  // await writeContent(newContacts);
};

const addContact = async ({ name, email, phone, favorite = false }) => {
  const newContact = new Contacts({
    name,
    email,
    phone,
    favorite,
  });
  await newContact.save();
  return newContact;
};

const updateContact = async (contactId, body) => {
  // const contacts = await readContent();
  // const index = contacts.findIndex(it => it.id === contactId);
  // if (index !== -1) {
  //   const updatedContact = {
  //     id: contactId,
  //     ...contacts[index],
  //     ...body,
  //   };
  //   contacts[index] = updatedContact;
  //   await writeContent(contacts);
  //   return updatedContact;
  // }
  // return null;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
