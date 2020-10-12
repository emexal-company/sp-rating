import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export function starTemplate(star) {
    const classes = {
        'is-selected': star.isSelected,
        'is-currentValue': star.isCurrentValue,
    };
    return html `<span id="${star.id}" class="spectrum-Rating-icon ${classMap(classes)}" @click="${star.this.handleClick}">
                    <sp-icon name="Star" class="spectrum-Rating-starActive"></sp-icon>
                    <sp-icon name="StarOutline" class="spectrum-Rating-starInactive"></sp-icon>
                </span>`;
}
export default function ratingTemplate() {
    const classes = {
        'is-readOnly': this.readonly,
        'spectrum-Rating--quiet': this.quiet,
        'is-disabled': this.disabled,
    };
    const star = new Array(this.max);
    for (let i = 0; i < this.max; i++) {
        star[i] = {
            id: i + 1,
            isSelected: (i + 1 <= this.value),
            isCurrentValue: (i + 1 === this.value),
            this: this,
        };
    }
    const me = this;
    return html `<div class="spectrum-Rating ${classMap(classes)}">
                    <div class="spectrum-Rating">
                    <input class="spectrum-Rating-input" type="range" min="${this.min}" max="${this.max}" value="${this.value}" aria-label="Rating">
                    ${star.map(starTemplate)}
                </div>`;
}
//# sourceMappingURL=rating.template.js.map