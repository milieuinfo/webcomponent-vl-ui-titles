const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlTitlesPages = require('./pages/vl-titles.page');

describe('vl-titles', async () => {
    const vlTitlesPage = new VlTitlesPages(driver);

    before(() => {
        return vlTitlesPage.load();
    });

    it('Als gebruiker kan ik een title zien', async () => {
        const title = await vlTitlesPage.getH3();

        await assert.eventually.isTrue(title.isH(3));
        await assert.eventually.isFalse(title.isSansFont());
        await assert.eventually.isFalse(title.hasBorder());
        await assert.eventually.isFalse(title.isAlt());
    });

    it('Als gebruiker kan ik een title zien met sans font en een border', async () => {
        const title = await vlTitlesPage.getH1WithSansFontAndBorder();

        await assert.eventually.isTrue(title.isH(1));
        await assert.eventually.isTrue(title.isSansFont());
        await assert.eventually.isTrue(title.hasBorder());
        await assert.eventually.isFalse(title.isAlt());
    });

    it('Als gebruiker kan ik een alternatieve title zien', async () => {
        const title = await vlTitlesPage.getAltH6();

        await assert.eventually.isTrue(title.isH(6));
        await assert.eventually.isFalse(title.isSansFont());
        await assert.eventually.isFalse(title.hasBorder());
        await assert.eventually.isTrue(title.isAlt());
    });
});
