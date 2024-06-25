export const formatNumber = (num) => {
  const suffixes = ["", "k", "m", "b", "t"];
  if (num === 0) return "0";

  const suffixIndex = Math.floor(Math.log10(Math.abs(num)) / 3);
  const suffix = suffixes[suffixIndex];

  const shortValue = num / Math.pow(10, suffixIndex * 3);

  const formattedValue = Number.isInteger(shortValue)
    ? shortValue.toFixed(0)
    : shortValue.toFixed(2);

  if (suffix === undefined) {
    return parseFloat(num);
  } else {
    return formattedValue + suffix;
  }
};
