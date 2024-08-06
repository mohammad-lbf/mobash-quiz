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

        // Page dimensions
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20; // Margin for the border
        const borderRadius = 10; // Radius for the corners

        // Draw rounded border
        const drawRoundedRect = (x, y, width, height, radius) => {
            doc.setLineWidth(1);
            doc.setDrawColor(0);
            doc.setFillColor(255, 255, 255); // Optional: Set fill color to white
            doc.roundedRect(x, y, width, height, radius, radius, 'S');
        };

        drawRoundedRect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, borderRadius);

        // Title: "Report Form"
        const title = 'Report Form';
        const titleFontSize = 20;
        doc.setFontSize(titleFontSize);
        doc.setFont('Vazir', 'bold');
        const titleWidth = doc.getStringUnitWidth(title) * titleFontSize / doc.internal.scaleFactor;
        const centerX = (pageWidth - titleWidth) / 2;
        doc.text(title, centerX, margin + 10); // Main title

        // Draw a line under the title
        doc.setLineWidth(0.5);
        doc.line(margin, margin + 15, pageWidth - margin, margin + 15);

        // Add type of test
        doc.setFontSize(12);
        doc.setFont('Vazir', 'normal');
        doc.setTextColor('black'); // Black color for the type of test title
        const typeOfTest = 'Type of test:';
        const typeOfTestWidth = doc.getStringUnitWidth(typeOfTest) * 12 / doc.internal.scaleFactor;
        doc.text(typeOfTest, margin + 5, margin + 25);

        // Red color for the type of test value
        doc.setTextColor('red');
        doc.text(reportData.category + ' assessment', margin + typeOfTestWidth + 10, margin + 25);

        // Draw another line
        doc.setLineWidth(0.5);
        doc.setTextColor('black'); // Reset to black for the line
        doc.line(margin, margin + 30, pageWidth - margin, margin + 30);

        // Add personal information
        const personalInfo = [
            ['Name:', reportData.userLocalName],
            ['Country / Town:', 'Iran'],
            ['First language:', 'Farsi']
        ];

        let startY = margin + 40;
        personalInfo.forEach(info => {
            doc.setTextColor('black'); // Black color for the info title
            doc.text(info[0], margin + 5, startY);
            doc.setTextColor('red'); // Red color for the info value
            doc.text(info[1], pageWidth / 2, startY);
            startY += 10;
        });

        // Draw another line
        doc.setLineWidth(0.5);
        doc.setTextColor('black'); // Reset to black for the line
        doc.line(margin, startY, pageWidth - margin, startY);

        // Test Results
        startY += 10;
        const results = [
            ['Total questions:', reportData.questions.length],
            ['Correct:', reportData.corrects.length],
            ['Incorrect:', reportData.incorrects.length],
            ['Blank:', reportData.noAnswers.length],
            ['Percentage:', `${reportData.pointPercent.toFixed(2)}%`],
            ['Level:', reportData.pointPercent < reportData.passPoint ? 'Failed' : 'Pass']
        ];

        results.forEach(result => {
            doc.setTextColor('black'); // Black color for the result title
            doc.text(result[0], margin + 5, startY);
            doc.setTextColor('red'); // Red color for the result value
            doc.text(result[1].toString(), pageWidth / 2, startY);
            startY += 10;
        });

        // Draw final line
        doc.setLineWidth(0.5);
        doc.setTextColor('black'); // Reset to black for the line
        doc.line(margin, startY, pageWidth - margin, startY);

        // Add image
        const imgWidth = 60; // Set image width
        const imgHeight = 20; // Set image height
        const imgX = (pageWidth - imgWidth) / 2; // Center the image horizontally
        const imgY = startY + 10; // Position the image above the footer
        doc.addImage(ImageBase64, 'PNG', imgX, imgY, imgWidth, imgHeight);

        // Add footer text
        startY = imgY + imgHeight + 20;
        doc.setFontSize(16);
        doc.setFont('Vazir', 'bold');
        doc.setTextColor('black'); // Black color for footer text
        const footerText = 'Mobash.ir';
        const footerTextWidth = doc.getStringUnitWidth(footerText) * 16 / doc.internal.scaleFactor;
        doc.text(footerText, (pageWidth - footerTextWidth) / 2, startY);

        // Add bottom note with two lines
        startY += 10;
        doc.setFontSize(12);
        doc.setFont('Vazir', 'normal');
        doc.setTextColor('red'); // Red color for bottom note

        const bottomNoteLine1 = 'To view information about your current level,';
        const bottomNoteLine2 = 'check out the CEFR article on our website.';
        
        const bottomNoteLine1Width = doc.getStringUnitWidth(bottomNoteLine1) * 12 / doc.internal.scaleFactor;
        const bottomNoteLine2Width = doc.getStringUnitWidth(bottomNoteLine2) * 12 / doc.internal.scaleFactor;

        doc.text(bottomNoteLine1, (pageWidth - bottomNoteLine1Width) / 2, startY);
        startY += 10; // Move down for the next line
        doc.text(bottomNoteLine2, (pageWidth - bottomNoteLine2Width) / 2, startY);

        // Save the PDF file
        doc.save(`${fileName}.pdf`);
    };

    return (
        <button onClick={generatePDF} style={{ fontSize: "15px", fontFamily: 'KalamehWeb-SemiBold' }} 
            className="btn-main-2 text-decoration-none text-white mt-2 mb-2 px-3 rounded" >
            دانلود کارنامه به صورت PDF
        </button>
    );
};

export default DownloadPdfButton;
