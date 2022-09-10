import reduce from 'lodash/reduce';

export const getItemTotal = (items, type) => {
  return reduce(items, (sum, i) => sum + i[type], 0);
};