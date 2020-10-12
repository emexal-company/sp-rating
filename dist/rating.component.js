import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import ratingStyles from './rating.styles';
import ratingTemplate from './rating.template';
let Rating = class Rating extends Base {
    constructor() {
        super(...arguments);
        this.max = 0;
        this.min = 0;
        this.value = 0;
        this.readonly = false;
        this.quiet = false;
        this.disabled = false;
    }
    render() {
        return ratingTemplate.call(this);
    }
    handleClick(e) {
        if (this.readonly || this.disabled) {
            return;
        }
        this.value = parseInt(e.currentTarget.id, 10);
    }
};
Rating.componentStyles = [ratingStyles];
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Rating.prototype, "max", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Rating.prototype, "min", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Rating.prototype, "value", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rating.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rating.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Rating.prototype, "disabled", void 0);
Rating = __decorate([
    customElement('sp-rating')
], Rating);
export { Rating };
//# sourceMappingURL=rating.component.js.map