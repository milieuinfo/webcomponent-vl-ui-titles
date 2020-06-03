const {VlH1, VlH2, VlH3, VlH4, VlH5, VlH6} = require('../components/vl-titles');
const {Page, Config} = require('vl-ui-core').Test;

class VlTitlesPage extends Page {
  async _getH1(selector) {
    return new VlH1(this.driver, selector);
  }

  async _getH2(selector) {
    return new VlH2(this.driver, selector);
  }

  async _getH3(selector) {
    return new VlH3(this.driver, selector);
  }

  async _getH4(selector) {
    return new VlH4(this.driver, selector);
  }

  async _getH5(selector) {
    return new VlH5(this.driver, selector);
  }

  async _getH6(selector) {
    return new VlH6(this.driver, selector);
  }

  async load() {
    await super.load(`${Config.baseUrl}/demo/vl-titles.html`);
  }

  async getH1WithSansFontAndBorder() {
    return this._getH1('#h1-sans-border');
  }

  async getH1() {
    return this._getH1('#h1');
  }

  async getH2() {
    return this._getH2('#h2');
  }

  async getH3() {
    return this._getH3('#h3');
  }

  async getH4() {
    return this._getH4('#h4');
  }

  async getH5() {
    return this._getH5('#h5');
  }

  async getH6() {
    return this._getH5('#h6');
  }

  async getAltH6() {
    return this._getH6('#h6-alt');
  }
}

module.exports = VlTitlesPage;
