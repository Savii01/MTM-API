const express = require('express');
const { appendFile } = require('fs');
const router =express.Router();

const acctDetail = require('./acctRoute');
const adminAss = require('./adminAssRoute')
const artist  = require('./artistRoute');
const contract = require('./contractRoute');
const eventOrg = require('./eventOrgRoute');
const eventTable = require('./eventTableRoute');
const expenses = require('./expensesRoute');
const general = require('./generalRoute');
const management = require('./managementRoute'); 
const manager = require('./managerRoutes');
const news = require('./newsRoutes');
const recArtist = require('./recArtistRoutes');

router.use = require('/account' , acctDetail);
router.use = require('/administrativeAssistant', adminAss);
router.use = require('/artist' , artist);
router.use = require('/contracts', contract);
router.use = require('/eventOrganiser', eventOrg);
router.use = require('/events', eventTable);
router.use = require('/expenses', expenses);
router.use = require('/Company', general);
router.use = require('/management', management);
router.use = require('/manager', manager);
router.use = require('/news', news);
router.use = require('/recommendArtist', recArtist);

module.exports = router;