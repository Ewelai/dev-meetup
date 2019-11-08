import * as messages from '../constant/ValidationMessages';

export const REQUIRED = v => !!v || messages.REQUIRED;
export const MAX_VALUE = (length) => v => (v && v.length <= length) || `${messages.MAX_VALUE} ${length} characters`;
export const MIN_VALUE = (length) => v => (v && v.length >= length) || `${messages.MIN_VALUE} ${length} characters`;
export const EMAIL = v => /.+@.+\..+/.test(v) || messages.EMAIL;
export const CHECKBOX = v => !!v || messages.CHECKBOX;
export const SAME_PASSWORD = (password) => v => password == v || messages.SAME_PASSWORD;
