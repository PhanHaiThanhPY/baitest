export const formatCurrencyDecimal = (number: number | null): string => {
    if (number == null) {
      return "0";
    }
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };