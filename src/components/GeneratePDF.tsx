import React from "react";
import { jsPDF,HTMLOptionImage } from "jspdf";
import { toPng,toCanvas } from "html-to-image";
import Image from "next/image";
import Logoimg from "../../public/images/partner.png"

type props = {
  html?: React.MutableRefObject<HTMLDivElement>;
};

const GeneratePdf: React.FC<props> = ({ html }) => {
  const generatePdf = () => {
      const doc = new jsPDF();
    
      let split=doc.splitTextToSize(document.getElementById("long_text").innerText,200);
      let partnersText=doc.splitTextToSize(document.getElementById("partners").innerText,200)
      let image = document.getElementById("image").getAttribute('src');
      //Title: Árajánlat
      doc.setFontSize(32);
      doc.text(document.querySelector(".content > h1").innerHTML,90,10);
      // Logo: 
      doc.addImage(image,0,0,40,20);
      // Partners
      doc.setFontSize(12);
      doc.text(partnersText,5,45,) ;
      doc.addPage();
      doc.text(partnersText, 10, 45, {align: 'left' });
      doc.output("dataurlnewwindow");  

  };

  const generateImage=async ()=>{
    const image = await toPng(html.current,{quality:0.95});
    const doc = new jsPDF();

      doc.addImage(image,'JPEG',5,22,200,160);
      doc.save();


  }
  return (

    <div className="button-container">
        <button onClick={generateImage}>
            PDF generálás (kép)
        </button>
      
        <button onClick={generatePdf}>
            PDF generálás (előformázott)
        </button>
    </div>

  );
};

export default GeneratePdf;