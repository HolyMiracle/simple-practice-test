import { helper } from '@ember/component/helper';

export function add([value, secondValue]) {
  return parseInt(value) + parseInt(secondValue);
}

export default helper(add);
