
export class PricingActions {
    public static update(symbol) {
        return {type: 'UPDATE_PRICE', symbol}
    }
}