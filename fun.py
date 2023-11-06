import aspose.pdf as ap

# Load PDF file
document = ap.Document("ab_tr.pdf")

# Loop through each page
for page in document.pages[:200]:
    # Create a new PDF
    splitPDF = ap.Document()

    # Add page to PDF
    splitPDF.pages.add(page)

    # Save the PDF
    splitPDF.save("Page_" + str(page.number) + ".pdf")