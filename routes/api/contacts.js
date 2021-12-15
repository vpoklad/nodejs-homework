const express = require('express')
const router = express.Router()
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model/index')

router.get('/', async (req, res, next) => {
  const contacts = await listContacts(); 
  res.json({ contacts })
})

router.get('/:contactId', async (req, res, next) => {
  const  id  = req.params.contactId;  
  const contact = await getContactById(id);
  if (!contact) {
    res.status(404).json({ "message": "Not found" })
    return    
  }
  res.json({ contact })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  const  id  = req.params.contactId; 
  const contactToDelete = await getContactById(id);
  if (!contactToDelete) {
    res.status(404).json({ "message": "Not found" })
    return    
  }
  await removeContact(id);
  res.status(200).json({"message": "contact deleted"})

})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
