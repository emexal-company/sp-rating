import { Base } from '@spectrum/sp-base';
export declare class Rating extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    max: number;
    min: number;
    value: number;
    readonly: boolean;
    quiet: boolean;
    disabled: boolean;
    protected render(): import("lit-element").TemplateResult;
    protected handleClick(e: any): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-rating': Rating;
    }
}
