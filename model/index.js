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
  await Contacts.findByIdAndRemove(contactId);
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
  const updatedContact = await Contacts.findByIdAndUpdate(contactId, body, {
    returnDocument: 'after',
  });
  return updatedContact;
};

const updateStatusContact = async (contactId, body) => {
  const updatedContact = await Contacts.findByIdAndUpdate(contactId, body, {
    returnDocument: 'after',
  });
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
