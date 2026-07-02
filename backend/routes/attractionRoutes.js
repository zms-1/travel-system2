const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionController');
const upload = require('../middleware/upload');

// API 路由
router.get('/attractions', attractionController.getAttractions);
router.get('/attractions/:id', attractionController.getAttractionById);
router.post('/attractions', upload.single('cover_image'), attractionController.createAttraction);
router.put('/attractions/:id', upload.single('cover_image'), attractionController.updateAttraction);
router.delete('/attractions/:id', attractionController.deleteAttraction);
router.get('/categories', attractionController.getCategories);
router.post('/upload', upload.single('image'), attractionController.uploadImage);

module.exports = router;