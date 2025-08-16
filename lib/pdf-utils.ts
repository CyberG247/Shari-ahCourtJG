import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export interface PDFOptions {
  filename: string
  scale?: number
  format?: 'a4' | 'letter'
  orientation?: 'portrait' | 'landscape'
}

export const generatePDFFromElement = async (
  element: HTMLElement,
  options: PDFOptions
): Promise<void> => {
  try {
    const canvas = await html2canvas(element, {
      scale: options.scale || 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    })
    
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF(
      options.orientation === 'landscape' ? 'l' : 'p',
      'mm',
      options.format || 'a4'
    )
    
    const imgWidth = options.orientation === 'landscape' ? 295 : 210
    const pageHeight = options.orientation === 'landscape' ? 210 : 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    
    let position = 0
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }
    
    pdf.save(options.filename)
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
}

export const generatePDFFromHTML = async (
  htmlContent: string,
  options: PDFOptions
): Promise<void> => {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = htmlContent
  tempElement.style.position = 'absolute'
  tempElement.style.left = '-9999px'
  tempElement.style.backgroundColor = '#ffffff'
  
  document.body.appendChild(tempElement)
  
  try {
    await generatePDFFromElement(tempElement, options)
  } finally {
    document.body.removeChild(tempElement)
  }
}

export const createReceiptPDF = async (
  receiptData: any,
  options: PDFOptions
): Promise<void> => {
  const receiptHTML = `
    <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #166534; font-size: 24px; margin-bottom: 10px;">PAYMENT RECEIPT</h1>
        <h2 style="color: #166534; font-size: 18px; margin-bottom: 5px;">Shari'ah Court of Appeal</h2>
        <h3 style="color: #666; font-size: 14px;">Jigawa State, Nigeria</h3>
      </div>
      
      <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
        <div style="margin-bottom: 15px;">
          <strong>Receipt Number:</strong> ${receiptData.receiptNumber}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Date:</strong> ${receiptData.date}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Service:</strong> ${receiptData.service}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Amount Paid:</strong> ₦${receiptData.amount}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Payment Method:</strong> ${receiptData.paymentMethod}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Status:</strong> <span style="color: #166534; font-weight: bold;">${receiptData.status}</span>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p style="font-size: 12px; color: #666;">This receipt is computer generated and does not require signature</p>
      </div>
    </div>
  `
  
  await generatePDFFromHTML(receiptHTML, options)
}