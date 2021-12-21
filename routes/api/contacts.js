const express = require('express');
const router = express.Router();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require('../../model/index');

const { validateCreate, validateUpdate } = require('./validation');

router.get('/', async (req, res, next) => {
  const contacts = await listContacts();
  res.json(contacts);
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const contact = await getContactById(id);
  if (!contact) {
    res.status(404).json({ message: 'Not found' });
    return;
  }
  res.json({ contact });
});

router.post('/', validateCreate, async (req, res, next) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    if (error.code === 11000)
      res.status(400).json(`Not unique input in ${error}`);
  }
});
// TODO
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  const contactToDelete = await getContactById(id);
  if (!contactToDelete) {
    res.status(404).json({ message: 'Not found' });
    return;
  }
  await removeContact(id);
  res.status(204).json({ message: 'contact deleted' });
});

router.put('/:id', validateUpdate, async (req, res, next) => {
  const id = req.params.id;
  const updatedContact = await updateContact(id, req.body);
  if (updatedContact) {
    return res.status(200).json(updatedContact);
  }
  res.status(404).json({ message: 'Not found' });
});

router.patch('/:id/favorite', validateUpdate, async (req, res, next) => {
  const id = req.params.id;
  console.log(req.body);
  if (req.body.favorite === null) {
    return res.status(400).json({ message: 'missing field favorite' });
  }
  const updatedContact = await updateStatusContact(id, req.body);
  if (updatedContact) {
    return res.status(200).json(updatedContact);
  }
  res.status(404).json({ message: 'Not found' });
});

module.exports = router;
