export const LOGIN_CONSTRAINTS = {
    email: {
        presence: true,
        email: { message: '^Email is not valid' },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' }
    },
};