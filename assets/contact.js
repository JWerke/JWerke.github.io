// Contact details are written into the pages encoded (see README), so simple address harvesters that
// read the page source find nothing. People see them as normal text straight away; this turns them
// into email and phone links. Without JavaScript they still show as plain text.
document.querySelectorAll('a.pc[data-v]').forEach((link) => {
  const value = atob(link.dataset.v).split('').reverse().join('');
  link.href = (link.dataset.k === 't' ? 'tel:' : 'mailto:') + value;
});
