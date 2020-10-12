import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import ratingStyles from './rating.styles';
import ratingTemplate from './rating.template';

@customElement('sp-rating')
export class Rating extends Base {
  public static componentStyles = [ratingStyles];

  @property({ type: Number }) public max: number = 0;
  @property({ type: Number }) public min: number = 0;
  @property({ type: Number }) public value: number = 0;
  @property({ type: Boolean }) public readonly: boolean = false;
  @property({ type: Boolean }) public quiet: boolean = false;
  @property({ type: Boolean }) public disabled: boolean = false;

  protected render() {
    return ratingTemplate.call(this);
  }

  protected handleClick(e) {
    if(this.readonly || this.disabled) {
      return;
    }

    this.value = parseInt(e.currentTarget.id, 10);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-rating': Rating;
  }
}
