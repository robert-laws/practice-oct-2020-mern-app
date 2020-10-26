import {
  VALIDATE_REQUIRE,
  VALIDATE_EMAIL,
  VALIDATE_MAXLENGTH,
  VALIDATE_MINLENGTH,
  VALIDATE_MAX,
  VALIDATE_MIN,
  VALIDATE_FILE,
} from './types';

export const checkGroupNameMatch = (groupName) => {
  if (
    groupName !== 'equipment' &&
    groupName !== 'software' &&
    groupName !== 'learning'
  ) {
    return true;
  } else {
    return false;
  }
};

export const validatorRequire = () => ({ type: VALIDATE_REQUIRE });
export const validatorFile = () => ({ type: VALIDATE_FILE });
export const validatorMinLength = (value) => ({
  type: VALIDATE_MINLENGTH,
  value,
});
export const validatorMaxLength = (value) => ({
  type: VALIDATE_MAXLENGTH,
  value,
});
export const validatorMin = (value) => ({ type: VALIDATE_MIN, value });
export const validatorMax = (value) => ({ type: VALIDATE_MAX, value });
export const validatorEmail = () => ({ type: VALIDATE_EMAIL });

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.value;
    }
    if (validator.type === VALIDATE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.value;
    }
    if (validator.type === VALIDATE_MIN) {
      isValid = isValid && +value >= validator.value;
    }
    if (validator.type === VALIDATE_MAX) {
      isValid = isValid && +value <= validator.value;
    }
    if (validator.type === VALIDATE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    return isValid;
  }
};
