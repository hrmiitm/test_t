// Small interactivity: print and download bio as text
document.addEventListener('DOMContentLoaded',function(){
  const printBtn = document.getElementById('printBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  if(printBtn){
    printBtn.addEventListener('click',()=>{
      window.print();
    });
  }

  if(downloadBtn){
    downloadBtn.addEventListener('click',()=>{
      const bioLines = Array.from(document.querySelectorAll('.bio-list li')).map(li => li.textContent.trim());
      const para = document.querySelector('.bio p')?.textContent?.trim() || '';
      const content = ['Hrithik Roshan - Bio', '','Details:', ...bioLines, '','Biography:', para].join('\n');
      const blob = new Blob([content],{type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'hrithik-roshan-bio.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }
});
