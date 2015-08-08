    function ui_GPSOff() {
        Location.clearWatch();
    }
    //
    function ui_GPSClear() {
        document.getElementById('long').innerHTML = '&nbsp;';
        document.getElementById('lat').innerHTML  = '&nbsp;';
        document.getElementById('accu').innerHTML = '&nbsp;';
        document.getElementById('timestamp').innerHTML = '&nbsp;';
    };
    //
    function ui_GPSonError (error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    };
    //
    function ui_GPSonSuccess(position) {
        document.getElementById('long').innerHTML      = position.coords.longitude;
        document.getElementById('lat').innerHTML       = position.coords.latitude;
        document.getElementById('accu').innerHTML      = position.coords.accuracy;
        document.getElementById('timestamp').innerHTML = position.timestamp;
    };
