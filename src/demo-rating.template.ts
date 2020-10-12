import { html } from 'lit-element';
import { DemoRating } from './demo-rating.component';

import '@spectrum/sp-rating';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';
import '@spectrum/sp-demo';

export default function template(this: DemoRating) {
  return html`
  <sp-container>
    <section>

      <sp-rule medium label="Rating - Standard"></sp-rule>
      <sp-demo width="140">
        <pre><sp-rating min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>
      <sp-demo width="140">
        <pre><sp-rating readonly min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>
      <sp-demo width="140">
        <pre><sp-rating disabled min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>

      <sp-rule medium label="Rating - Quiet"></sp-rule>
      <sp-demo width="140">
        <pre><sp-rating quiet min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>
      <sp-demo width="140">
        <pre><sp-rating quiet readonly min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>
      <sp-demo width="140">
        <pre><sp-rating quiet disabled min="0" max="5" value="3"></sp-rating></pre>
      </sp-demo>

    </section>
  </sp-container>
  `;
}
