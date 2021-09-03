export const cropString = (string: string, maxLength: number): string => {
  return string.slice(0, maxLength) + '...'
}
