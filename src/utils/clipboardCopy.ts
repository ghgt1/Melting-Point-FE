export const clipboardCopy = (text: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.persist();
  const temp = document.createElement('textarea');
  document.body.appendChild(temp);

  temp.value = text;
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
};
