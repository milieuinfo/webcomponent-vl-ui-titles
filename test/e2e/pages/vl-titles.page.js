const VlTitles = require('../components/vl-titles');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlTitlesPage extends Page {
    async _getTitle(selector) {
        return new VlTitles(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-titles.html');
    }
}

module.exports = VlTitlesPage;