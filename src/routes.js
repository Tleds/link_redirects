const router = require('express').Router();

const linkController = require('./controllers/link_controller');

router.get('/:id', linkController.hitLink);
router.post(
  '/create_link',
  linkController.createLink
);

module.exports = router;