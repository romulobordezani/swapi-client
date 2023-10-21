export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    return setTimeout(() => {
      return resolve({ data: amount });
    }, 5000);
  });
}
