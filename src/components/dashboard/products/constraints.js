export const PRODUCT_CONSTRAINTS = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    rate: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    quantity: {
        presence: { allowEmpty: false, message: 'is required' },
    }
};