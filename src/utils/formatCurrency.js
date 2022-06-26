const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "RWF",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENT_FORMATTER.format(number);
}
