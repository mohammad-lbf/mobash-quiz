import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPdfButton = ({ fileName }) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadPdf = () => {
    setIsLoading(true);
    const input = document.getElementById('TEST_REPORT');

    if (!input) {
      console.error('Error: The element with id "TEST_REPORT" was not found.');
      setIsLoading(false);
      return;
    }

    const parentElement = input.parentElement;
    const grandParentElement = parentElement.parentElement;

    html2canvas(grandParentElement, { scale: 2 })  // Increased scale for better quality with smaller size
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 0.75);  // Use JPEG format with 75% quality
        const pdf = new jsPDF('p', 'mm', 'a5');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${fileName}.pdf`);
        setTimeout(() => setIsLoading(false), 3000);  // Stop spinner after 3 seconds
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button
        className='btn-main-2 text-center rounded mb-2 border-0 mt-1 d-flex align-items-center'
        
        onClick={downloadPdf}
        disabled={isLoading}
      >
        <p style={{ fontSize: "15px", fontFamily: 'KalamehWeb-SemiBold' }}>دریافت کارنامه به صورت PDF</p>
        {isLoading && 
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        }
      </button>
    </div>
  );
};

export default DownloadPdfButton;
