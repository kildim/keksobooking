const MIN_BORDER_NEGATIVE = 'Нижняя граница диапазона отрицательна';
const MAX_BORDER_NEGATIVE = 'Верхняя граница диапазона отрицательна';
const MIN_GRATER_MAX = 'Значение нижней границы диапазона больше верхней границы диапазона';
const MIN_EQUAL_MAX = 'Значения верхней и нижней границ диапазона совпадают';

class IntervalBordersError extends Error {
  constructor(ErrorsDefinitions) {
    super('Ошибка указания границ диапазона');
    this.name = 'IntervalBordersError';
    this.ErrorsDeffenitions = ErrorsDefinitions;
  }
}

const isNegative = (number) => number < 0;

// const alertIntervalBordersErrors = (validationResults) => {
//   for (const value of validationResults) {
//     console.log(`Ошибка указания границ диапазона: ${  value}`);
//   }
// };

const validateIntervalBorders = (minBorder, maxBorder) => {
  const intervalBordersErrors = [];

  if (isNegative(minBorder)) {
    intervalBordersErrors.push(MIN_BORDER_NEGATIVE);
  }
  if (isNegative(minBorder)) {
    intervalBordersErrors.push(MAX_BORDER_NEGATIVE);
  }
  if (minBorder > maxBorder){
    intervalBordersErrors.push(MIN_GRATER_MAX);
  }
  if (minBorder === maxBorder){
    intervalBordersErrors.push(MIN_EQUAL_MAX);
  }
  return intervalBordersErrors;
};

// const isIntervalBordersValid = (minBorder, maxBorder) => {
//   const intervalBordersErrors = validateIntervalBorders (minBorder, maxBorder);
//   alertIntervalBordersErrors(intervalBordersErrors);
//   return !intervalBordersErrors.length;
// };

const checkIntervalBorders = (minBorder, maxBorder) => {
  const intervalBordersErrors = validateIntervalBorders (minBorder, maxBorder);
  if (intervalBordersErrors.length > 0) {
    throw new IntervalBordersError(intervalBordersErrors);
  }
};

const _genNaturalInt = (minBorder, maxBorder) => {
  minBorder = Math.ceil(minBorder);
  maxBorder = Math.floor(maxBorder);
  return (Math.floor(Math.random() * (maxBorder - minBorder + 1)) + minBorder);
};

const _genUnsignedReal = (minBorder, maxBorder, precision) => ((Math.random() * (maxBorder - minBorder)) + minBorder).toFixed(precision);

/* eslint-disable no-unused-vars */
const getUnsignedNumber = (minBorder, maxBorder, precision = 0) => {
  try {
    checkIntervalBorders (minBorder, maxBorder);
    return precision ? _genUnsignedReal (minBorder, maxBorder, precision) : _genNaturalInt(minBorder, maxBorder) ;
  } catch (err) {
    if (err instanceof IntervalBordersError) {
      // eslint-disable-next-line no-alert
      alert('!ОШИБКА В УКАЗАНИИ ДИАПАЗОНА!');
    }
  }
};
/* eslint-enable no-unused-vars */
