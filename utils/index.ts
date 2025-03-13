export const cleanStringAmount = (value: string | number) => {
  const removeItemFromString = (str: string, item: string) => {
    const splittedString = str.split("");
    let removedString = "";

    for (let i = 0; i < splittedString.length; i++) {
      if (splittedString[i] !== item) {
        removedString += splittedString[i];
      }
    }

    return removedString;
  };

  const amount = typeof value === "number" ? value.toString() : value;

  return parseFloat(removeItemFromString(amount, ","));
};
export const formatStringAmount = (value: string | number) => {
  function addThousandSeparator(integer: string, separator: string) {
    return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);
  }

  let parts = typeof value === "number" ? value.toString() : value;
  let partsString = value.toString().replace(/,/g, "");
  const startsWithZero = partsString.startsWith("0");
  partsString =
    startsWithZero && partsString.length > 1
      ? partsString.slice(1)
      : partsString;
  const includesDecimal = partsString.includes(".");

  if (includesDecimal) {
    const partsSplit = partsString.split(".");
    partsSplit[0] = addThousandSeparator(partsSplit[0], ",");
    parts = partsSplit.join(".");
  } else {
    if (partsString === "0") {
      parts = "0";
    } else {
      parts = addThousandSeparator(partsString, ",");
    }
  }

  return parts;
};
