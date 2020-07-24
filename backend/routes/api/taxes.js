const router = require('express').Router();
let Taxes = require('../../models/taxes.model');

router.get('/', async (req, res) => {
  try {
    const doc = await Taxes.find();
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:header', async (req, res) => {
  try {
    const doc = await Taxes.findOne({ header: req.params.header });
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const { header } = req.body;
  try {
    let doc = await Taxes.findOneAndUpdate(
      { header },
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
