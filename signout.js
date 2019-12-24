function signout()
{
    localStorage.removeItem('currUser');
    window.location.replace('../startpage.html');
}