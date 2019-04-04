import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * vl-title
 *
 * @demo demo/vl-titles.html
 */
export class VlTitle extends NativeVlElement(HTMLHeadingElement) {

    static get _observedClassAttributes() {
        return ['sans','has-border','alt'];
    }

    constructor() {
        super();
        this.classList.add("vl-title");
        this.classList.add("vl-title--"+this.tagName.toLowerCase());
    }

    get _classPrefix() {
        return 'vl-title--';
    }
}

customElements.define('vl-h1', class extends VlTitle{}, {extends:"h1"});
customElements.define('vl-h2', class extends VlTitle{}, {extends:"h2"});
customElements.define('vl-h3', class extends VlTitle{}, {extends:"h3"});
customElements.define('vl-h4', class extends VlTitle{}, {extends:"h4"});
customElements.define('vl-h5', class extends VlTitle{}, {extends:"h5"});
customElements.define('vl-h6', class extends VlTitle{}, {extends:"h6"});