import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlTitle
 * @class
 * @classdesc Gebruik de vl-title om titels en subtitels als leidraad voor de gebruiker om door de content te gaan. <a href="demo/vl-titles.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @property {boolean} sans - Attribuut wordt gebruikt om de font te wijzigen van Flanders Serif naar Flanders Sans.
 * @property {boolean} has-border - Attribuut wordt gebruikt om een subtiele lijn toe te voegen onder de titel.
 * @property {boolean} alt - Attribuut wordt gebruikt voor een alt titel en zal altijd een lijn toevoegen onder de titel.
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

    get _stylePath() {
        return '../style.css';
    }
}

customElements.define('vl-h1', class extends VlTitle{}, {extends:"h1"});
customElements.define('vl-h2', class extends VlTitle{}, {extends:"h2"});
customElements.define('vl-h3', class extends VlTitle{}, {extends:"h3"});
customElements.define('vl-h4', class extends VlTitle{}, {extends:"h4"});
customElements.define('vl-h5', class extends VlTitle{}, {extends:"h5"});
customElements.define('vl-h6', class extends VlTitle{}, {extends:"h6"});