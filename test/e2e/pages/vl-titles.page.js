const VlTitle = require('../components/vl-titles');
const { Page, Config } = require('vl-ui-core').Test;

class VlTitlesPage extends Page {
    async _getTitle(selector) {
        return new VlTitle(this.driver, selector);
    }

    async load() {
        await super.load(`${Config.baseUrl}/demo/vl-titles.html`);
    }

    async getH1WithSansFontAndBorder() {
        return this._getTitle('#h1-sans-border');
    }

    async getH3() {
        return this._getTitle('#h3');
    }

    async getAltH6() {
        return this._getTitle('#h6-alt');
    }
}

module.exports = VlTitlesPage;
