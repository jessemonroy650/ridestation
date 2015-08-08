    function updateCurrentUser() {
        var iAm = whoami();
        if (iAm === null) {
            iAm = "Not logged in.";    
            gLoggedIn = false;
        } else {
            gLoggedIn = true;
        }
        $('#iAm').text(iAm);        
    }
