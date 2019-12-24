function generatePDF()
{
    var doc = new jsPDF();
    doc.autoTable({html: '#preview', styles: {
        fontSize: 20, minCellHeight: 20, minCellWidth:0, valign:'middle', halign:'center', overflow: 'visible',
            font: 'Times New Roman'
    }});

    doc.save(document.getElementById('inputTitle').value+'.pdf');
}