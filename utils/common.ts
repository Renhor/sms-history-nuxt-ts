export const copyToBuffer = (string: string): void => {
  const area = document.createElement('textarea');

  document.body.appendChild(area);
  area.value = string;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
};
