const { VlElement } = require('vl-ui-core').Test;

class VlTitle extends VlElement {
    async isSansFont() {
        return this.hasAttribute('sans');
    }

    async hasBorder() {
        return this.hasAttribute('has-border');
    }

    async isAlt() {
        return this.hasAttribute('alt');
    }

    async isH(headerNumber) {
        return await this.getTagName() === `h${headerNumber}`;
    }
}

module.exports = VlTitle;
