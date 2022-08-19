import { helper } from '@ember/component/helper';

export function toUpperCase(value) {
  return value.toString().toUpperCase();
}

export default helper(toUpperCase);
