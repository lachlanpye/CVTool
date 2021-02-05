const express = require('express');
const router = express.Router();

const controllers = require('./../controllers/controllers');
const getTags = require('./../controllers/getTags');
router.get('/say-something', controllers.saySomething);
router.get('/get-tags', getTags.getTags);

const addTag = require('./../controllers/addTag');
const submitCoverLetter = require('./../controllers/submitCoverLetter');
const submitResume = require('./../controllers/submitResume');
router.post('/add-tag', addTag.addTag);
router.post('/submit-cover-letter', submitCoverLetter.submitCoverLetter);
router.post('/submit-resume', submitResume.submitResume);

const getCoverLetterList = require('./../controllers/getCoverLetterList');
const getResumeList = require('./../controllers/getResumeList');
router.post('/get-cover-letter-list', getCoverLetterList.getCoverLetterList);
router.post('/get-resume-list', getResumeList.getResumeList);

const getCoverLetter = require('./../controllers/getCoverLetter');
const getResume = require('./../controllers/getResume');
const getResumeFileData = require('./../controllers/getResumeFileData');
router.post('/get-cover-letter', getCoverLetter.getCoverLetter);
router.post('/get-resume', getResume.getResume);
router.post('/get-resume-file-data', getResumeFileData.getResumeFileData);

const downloadResume = require('./../controllers/downloadResume');
const deleteCoverLetter = require('./../controllers/deleteCoverLetter');
const deleteResume = require('./../controllers/deleteResume');
router.post('/download-resume', downloadResume.downloadResume);
router.post('/delete-cover-letter', deleteCoverLetter.deleteCoverLetter);
router.post('/delete-resume', deleteResume.deleteResume);

const addAccount = require('./../controllers/addAccount');
const confirmLogin = require('./../controllers/confirmLogin');
router.post('/add-account', addAccount.addAccount);
router.post('/confirm-login', confirmLogin.confirmLogin);

module.exports = router;