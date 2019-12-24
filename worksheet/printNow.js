function printNow(){
    var print =document.getElementById('preview');
    newWin = window.open("");

    newWin.document.write('<head>');
    newWin.document.write('<link rel="stylesheet" href="../main.css">' +
        '    <link rel="stylesheet" href="../css/bootstrap.css">');
    newWin.document.write('<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>');
    newWin.document.write('<script type="text/javascript" src="../js/bootstrap.js"></script>');
    newWin.document.write('</head>');
    newWin.document.write('<body class="core">');
    newWin.document.write(print.outerHTML);
    newWin.document.write('</body>')
    newWin.print();
    newWin.close();
}
