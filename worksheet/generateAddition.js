function generateProblems(){
    document.getElementById('previewTitle').hidden=false;
    document.getElementById('genPDF').hidden=false;
    document.getElementById('printNow').hidden=false;
    document.getElementById('saveWorksheet').hidden=false;

    var numberOfProblems = document.getElementById('numberOfProblems').value;
    var numberOfDigits = document.getElementById('digits').value;
    var operator = '+';

    var problemList = [];
    var orientation = document.getElementById('orientation').value;
    var operand1, operand2, problem;

    var previewtable = document.getElementById('preview');
    var row, cell1, cell2, cell3, cell4, cell5, cell6;
    var currcol=1;

    $( '#preview > tbody').empty();

    var title = previewtable.getElementsByTagName('tbody')[0].insertRow(0).insertCell(0);
    if(orientation==1)
    {
        title.colSpan=6;
    }
    if(orientation==2)
    {
        title.colSpan=4;
    }
    title.innerHTML = '<div id="title">'+ document.getElementById('inputTitle').value+'</div>';

    var i =1;
    while (i <= numberOfProblems) {
        operand1 = Math.floor((Math.random() * (Math.pow(10,numberOfDigits)-1)))+1;
        operand2 = Math.floor((Math.random() * (Math.pow(10,numberOfDigits)-1)))+1;

        problem = String(operand1) + ' ' + operator + ' ' + String(operand2) + ' =';

        if(orientation == 1)
        {
            if(!sameProb(problem))
            {
                if(i%2==1)
                {
                    row = previewtable.insertRow();
                    cell1 = row.insertCell(0);
                    cell2 = row.insertCell(1);
                    cell3 = row.insertCell(2);

                    cell1.innerHTML ='<span class=equation>' + String(i)+ ')</span>';
                    cell2.innerHTML ='<span class=equation>' + problem + '</span>';
                    cell3.innerHTML ='<span class=equation>________</span>';
                }
                else if(i%2==0)
                {
                    row = previewtable.rows[currcol];
                    cell4 = row.insertCell(3);
                    cell5 = row.insertCell(4);
                    cell6 = row.insertCell(5);

                    cell4.innerHTML ='<span class=equation>' + String(i)+ ')</span>';
                    cell5.innerHTML ='<span class=equation>' + problem + '</span>';
                    cell6.innerHTML ='<span class=equation>________</span>';

                    currcol++;
                }
                problemList[i-1] = problem;
                i++;
            }
        }
        if(orientation == 2)
        {

            i++;
        }
    }

    function sameProb(n)
    {
        for(var i =0; i<problemList.length; i++)
        {
            if(n===problemList[i])
                return true;
        }
        return false;
    }
}
