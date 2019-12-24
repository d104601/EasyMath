function signin()
{
    if(document.getElementById('userlist').options.length == 0)
    {
        alert("There's no user available. Please add user first");
    }
    else
    {
        var currUser = {
            currUser: $('#userlist').val()
        };

        localStorage.setItem('currUser', JSON.stringify(currUser));
        window.location.replace('main.html');
    }
}

function register()
{
    var username = document.getElementById('enterusername').value;
    var user ={
        username: username
    };

    if(username.length == 0)
    {
        $('#enterusername').attr('class','form-control is-invalid');
        $('#invalid').html("User name can't be empty");
    }
    else
    {
        if(sameuser(user))
        {
            $('#enterusername').attr('class','form-control is-invalid');
            $('#invalid').html('This user name is already used.');
        }
        else
        {
            var selection = document.getElementById('userlist');
            var option = document.createElement("option");

            localStorage.setItem("user"+username, JSON.stringify(user));
            option.text = username;
            selection.add(option);

            alert("Register complete");
            $('#enterusername').attr('class','form-control');


            $('#adduser').modal('hide');
        }
    }

    function sameuser(n)
    {
        var temp;

        for(var i =0; i<localStorage.length; i++)
        {
            temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(n.username == temp.username)
            {
                return true;
            }
        }
        return false;
    }
}

function closeregister()
{
    $('#enterusername').attr('class','form-control');
}

function deleteuser()
{
    if(confirm("Do you really want to delete this user? All data with this user will be erased."))
    {
        var temp;
        var selection = document.getElementById('userlist');
        var list = selection.value;

        for(var i = localStorage.length -1; i>=0; i--)
        {
            temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(temp.userid == list)
                localStorage.removeItem(localStorage.key(i));
        }
        localStorage.removeItem("user"+list);
        selection.remove(selection.selectedIndex);
    }
    else
    {}
}