export const initialItems = new Array(29_999_999).fill(9).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});
