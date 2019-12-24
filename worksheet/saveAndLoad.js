window.onload = function()
{
    var temp;
    var option;
    var selection = document.getElementById('savedWorksheet');
    for(var i = 0; i<localStorage.length; i++)
    {
        temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
        option = document.createElement("option");

        if(temp.userid == curruser)
        {
            if(temp.worksheetType == $('#currtopic').text())
            {
                option.text=temp.filename;
                selection.add(option);
            }
        }
    }
};

function saveWorksheet()
{
    var filename = $('#filename').val();
    if(filename.length == 0)
        alert("File name can't be empty.");
    else
    {
        var worksheet =  {
            userid: curruser,
            worksheetType: $('#currtopic').text(),
            filename: filename,
            contents: document.getElementById('preview').innerHTML
        };
        var temp;

        if(sameName(worksheet))
        {
            if(confirm("Worksheet "+ filename +" already exist. Do you want to replace it?"))
                localStorage.setItem($('#currtopic').text()+filename,JSON.stringify(worksheet));
            else
            {}
        }
        else
        {
            var selection = document.getElementById('savedWorksheet');
            var option = document.createElement("option");

            option.text = filename;
            localStorage.setItem(worksheet.worksheetType+filename,JSON.stringify(worksheet));
            selection.add(option);
        }


        function sameName(n)
        {
            for(var i =0; i<localStorage.length; i++)
            {
                temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if(n.worksheetType == temp.worksheetType && n.filename==temp.filename)
                {
                    return true;
                }
            }
            return false;
        }

    }
}

function loadWorksheet(n)
{
    if(confirm("Load saved worksheet? Current worksheet generated will be erased."))
    {
        var filename = document.getElementById('savedWorksheet').value;
        var loadedWorksheet = JSON.parse(localStorage.getItem(document.getElementById('currtopic').innerText+filename));

        document.getElementById('preview').innerHTML = loadedWorksheet.contents;
    }
    else
    {}
}

function deleteSaved()
{
    if(confirm("Are you sure deleting saved worksheet?"))
    {
        var selection = document.getElementById('savedWorksheet');
        var filename = document.getElementById('savedWorksheet').value;

        localStorage.removeItem($('#currtopic').text()+filename);
        selection.remove(selection.selectedIndex);
    }
    else
    {}
}