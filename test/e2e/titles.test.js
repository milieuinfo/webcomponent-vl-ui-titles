const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlTitlesPages = require('./pages/vl-titles.page');

describe('vl-titles', async () => {
  const vlTitlesPage = new VlTitlesPages(driver);

  before(() => {
    return vlTitlesPage.load();
  });

  it('Als gebruiker kan ik een gewone h2, h3, h4 en h5 zien', async () => {
    const testStandardTitle = async (title, headerNumber) => {
      await assert.eventually.isTrue(title.isH(headerNumber));
      await assert.eventually.isFalse(title.isSansFont());
      await assert.eventually.isFalse(title.hasBorder());
      await assert.eventually.isFalse(title.isAlt());
      await assert.eventually.equal(title.getText(), `Dit is een h${headerNumber}`);
    };

    await testStandardTitle(await vlTitlesPage.getH1(), 1);
    await testStandardTitle(await vlTitlesPage.getH2(), 2);
    await testStandardTitle(await vlTitlesPage.getH3(), 3);
    await testStandardTitle(await vlTitlesPage.getH4(), 4);
    await testStandardTitle(await vlTitlesPage.getH5(), 5);
    await testStandardTitle(await vlTitlesPage.getH6(), 6);
  });

  it('Als gebruiker kan ik een h1 zien met sans font en een border', async () => {
    const title = await vlTitlesPage.getH1WithSansFontAndBorder();
    await assert.eventually.isTrue(title.isH(1));
    await assert.eventually.isTrue(title.isSansFont());
    await assert.eventually.isTrue(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.equal(title.getText(), 'Dit is een vl-h1 met "sans" en "has-border"');
  });

  it('Als gebruiker kan ik een alternatieve h6 zien', async () => {
    const title = await vlTitlesPage.getAltH6();
    await assert.eventually.isTrue(title.isH(6));
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isTrue(title.isAlt());
    await assert.eventually.equal(title.getText(), 'DIT IS EEN VL-H6 MET "ALT"');
  });
});
