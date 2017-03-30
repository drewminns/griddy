export function valuesToString (data) {
  let stringVal = '';
  data.forEach((val) => {
    stringVal += `${val.amount}${val.unit} `;
  });
  return stringVal.trim();
};

export function unRollString (val) {
  const dashed = val.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
  return dashed;
}

export function unpackObject (val) {
  let stringVal = '';
  Object.keys(val).forEach((key) => {
    stringVal += `${val[key]}`;
  });
  return stringVal;
}
