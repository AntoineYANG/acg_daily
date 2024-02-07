import html2canvas from "html2canvas";


// screenshot for the <main> element
const screenshot = () => {
  const main = document.querySelector('main');
  if (main) {
    html2canvas(main).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = img;
      a.download = 'screenshot.png';
      a.click();
    });
  }
};


export default screenshot;
