
const { assert, driver } = require('vl-ui-core').Test;
const VlTitlesPages = require('./pages/vl-titles.page');

describe('vl-titles', async () => {
    const vlTitlesPage = new VlTitlesPages(driver);

    before(() => {
        return vlTitlesPage.load();
    });
});
