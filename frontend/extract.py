import PyPDF2
reader = PyPDF2.PdfReader('c:/myPortfolio/frontend/public/CVVV.pdf')
with open('c:/myPortfolio/frontend/cv_text.txt', 'w', encoding='utf-8') as f:
    for page in reader.pages:
        f.write(page.extract_text() + '\n')
