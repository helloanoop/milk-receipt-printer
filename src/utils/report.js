import isNumber from 'lodash/isNumber';
import reduce from 'lodash/reduce';
import find from 'lodash/find';

import {
  MILK,
  CURD,
  BUTTERMILK,
  GHEE
} from 'constants/report';

export const getItemTotal = (items, type) => {
  return reduce(items, (sum, i) => sum + i[type], 0);
};


export const getItemLabelToDisplayInGrid = (items, date) => {
  const day = find(items, (i) => i.date == date);
  console.log(day);

  if(!day) return 0;

  let label = '';
  const milk = day[MILK];
  const curd = day[CURD];
  const buttermilk = day[BUTTERMILK];
  const ghee = day[GHEE];

  if(milk && isNumber(milk) && milk > 0) {
    label += Number(milk);
  } else {
    label+= '0';
  }

  if(curd && isNumber(curd) && curd > 0) {
    label += `,${Number(curd)}c`;
  }

  if(buttermilk && isNumber(buttermilk) && buttermilk > 0) {
    label += `,${Number(buttermilk)}b`;
  }

  if(ghee && isNumber(ghee) && ghee > 0) {
    label += `,${Number(ghee)}g`;
  }

  return label;
};