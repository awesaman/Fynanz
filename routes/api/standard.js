const router = require('express').Router();
let Standard = require('../../models/standard.model');

router.get('/', async (req, res) => {
  try {
    res.send('Page is working');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:header', async (req, res) => {
  try {
    const doc = await Standard.findOne({ header: req.params.header });
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
