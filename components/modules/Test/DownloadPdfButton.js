import jsPDF from 'jspdf';
import 'jspdf-autotable';
import VazirFont from '../../../assets/functions/VazirBase64';
import ImageBase64 from '../../../assets/functions/ImageBase64';

const DownloadPdfButton = ({ fileName, reportData }) => {
    const generatePDF = () => {
        const doc = new jsPDF();

        // Add Persian font
        doc.addFileToVFS('Vazir.ttf', VazirFont);
        doc.addFont('Vazir.ttf', 'Vazir', 'normal');
        doc.setFont('Vazir');

        // Set font size for titles and content
        const fontSize = 12;
        const lineHeight = fontSize / 0.75;

        // Add title centered on the page
        const God = 'In the name of God, the Most Compassionate, the Most Merciful.';
        const title = 'Mobash Academy';
        const subHeader = 'The Mobash Academy grammar placement Exam';
        const titleFontSize = 18;
        const titleWidth = doc.getStringUnitWidth(title) * titleFontSize / doc.internal.scaleFactor;
        const pageWidth = doc.internal.pageSize.width;
        const centerX = (pageWidth - titleWidth) / 2;
        const subHeaderX = ((pageWidth - titleWidth) / 2) - 14;
        const subHeaderY = 45;

        doc.setFontSize(10);
        doc.setFont('Vazir', 'italic');
        doc.setTextColor('green');
        doc.text(God, subHeaderX , 20); // Main title

        doc.setFontSize(24);
        doc.setTextColor('black');
        doc.text(title, centerX, 35); // Main title

        doc.setFont('Vazir', 'italic');
        doc.setFontSize(fontSize);
        doc.setTextColor('red');
        doc.text(subHeader, subHeaderX, 45);

        // Data for the table
        const tableData = [
            ['Examiner Name:', reportData.userLocalName],
            ['Test Level' , reportData.testLevel],
            ['Your point', `${reportData.pointPercent.toFixed(2)} Of 100`],
            ['Status', reportData.pointPercent < reportData.passPoint ? 'Failed' : 'Pass'],
            ['Questions Number', reportData.questions.length],
            ['Corrects', reportData.corrects.length],
            ['Incorrects', reportData.incorrects.length],
            ['No answers', reportData.noAnswers.length],

        ];

        // Create the table
        doc.autoTable({
            startY: 60,
            head: [['Title', 'َAmount']],
            body: tableData.map(row => [row[0], row[1]]),
            headerStyles: { fillColor: '#000', textColor: '#fff', fontStyle: 'italic' },
            bodyStyles: { fillColor: '#fff' },
            margin: { top: 20 },
            styles: { font: 'Vazir', fontSize: 10, cellPadding: 5, halign: 'left' },
            theme: 'grid',
            pageBreak: 'auto',
            direction: 'rtl'
        });

        // Add border with style
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setLineWidth(1);
            doc.rect(10, 10, pageWidth - 20, doc.internal.pageSize.height - 20, 'S');
        }
        const imgWidth = 60; // Set image width
        const imgHeight = 20; // Set image height
        const imgX = (pageWidth - imgWidth) / 2; // Center the image horizontally
        const imgY = doc.internal.pageSize.height - imgHeight - 70; // Position the image 20 units from the bottom
        doc.addImage(ImageBase64, 'PNG', imgX, imgY, imgWidth, imgHeight);

                // Add text below the image
                const footerText = 'powered by: Amirhosein Mbasheri - www.mobash.ir';
                const footerFontSize = 14;
                const footerTextWidth = doc.getStringUnitWidth(footerText) * footerFontSize / doc.internal.scaleFactor;
                const footerX = (pageWidth - footerTextWidth) / 2;
                const footerY = imgY + imgHeight + 10; // Position the text 20 units below the image
        
                doc.setFontSize(footerFontSize);
                doc.text(footerText, footerX, footerY);

        // Save the PDF file
        doc.save(`${fileName}.pdf`);
    };

    return (
        <button onClick={generatePDF} style={{fontSize:"15px" , fontFamily:'KalamehWeb-SemiBold'}} 
        className="btn-main-2 text-decoration-none text-white mt-2 px-3 rounded" >
            دانلود کارنامه به صورت PDF
        </button>
    );
};

export default DownloadPdfButton;
