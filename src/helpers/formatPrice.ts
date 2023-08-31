export const formatPrice = (price: number) => {
    return price.toLocaleString("es", { maximumFractionDigits: 0 });
  };
  