export const hasError = (key, errors) => !!(errors && errors[key]);

export const getErrorMessage = (key, errors) => errors && errors[key] && errors[key][0];
