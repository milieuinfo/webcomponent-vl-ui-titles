
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlTitlesPages = require('./pages/vl-titles.page');

describe('vl-titles', async () => {
    const vlTitlesPage = new VlTitlesPages(driver);

    before(() => {
        return vlTitlesPage.load();
    });

    it('dummy test omdat anders de browser vensters niet gesloten worden', async () => {
    	assert.isTrue(true);
    });

});
