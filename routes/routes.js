const express = require('express');
const router = express.Router();

const controllers = require('./../controllers/controllers');
const getTags = require('./../controllers/getTags');
const addTag = require('./../controllers/addTag');
const submitCoverLetter = require('./../controllers/submitCoverLetter');
const submitResume = require('./../controllers/submitResume');
const getCoverLetterList = require('./../controllers/getCoverLetterList');
const getResumeList = require('./../controllers/getResumeList');
const getCoverLetter = require('./../controllers/getCoverLetter');
const getResume = require('./../controllers/getResume');
const getResumeFileData = require('./../controllers/getResumeFileData');
const downloadResume = require('./../controllers/downloadResume');
const deleteCoverLetter = require('./../controllers/deleteCoverLetter');
const deleteResume = require('./../controllers/deleteResume');

router.get('/say-something', controllers.saySomething);
router.get('/get-tags', getTags.getTags);

router.post('/add-tag', addTag.addTag);
router.post('/submit-cover-letter', submitCoverLetter.submitCoverLetter);
router.post('/submit-resume', submitResume.submitResume);

router.get('/get-cover-letter-list', getCoverLetterList.getCoverLetterList);
router.get('/get-resume-list', getResumeList.getResumeList);

router.post('/get-cover-letter', getCoverLetter.getCoverLetter);
router.post('/get-resume', getResume.getResume);
router.post('/get-resume-file-data', getResumeFileData.getResumeFileData);

router.post('/download-resume', downloadResume.downloadResume);

router.post('/delete-cover-letter', deleteCoverLetter.deleteCoverLetter);
router.post('/delete-resume', deleteResume.deleteResume);

module.exports = router;