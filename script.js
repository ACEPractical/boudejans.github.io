

    "use strict";

    var cookieName = 'userCookie'; // the name of the Cookie
    var cookieLifetime = 365; // Cookie expiry in days

    var _setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    var _getCookie = function(cname) {
        var name = cname + "=";    
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if(c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var _shouldShowPopup = function() {
        if(_getCookie(cookieName)) {
            return false;
        } else {
            return true;
        }
    };

    if(_shouldShowPopup()) {
        $('.cookieModal').modal('show');
    }

    $('#cookieModalConsent').on('click', function() {
        _setCookie(cookieName, 1, cookieLifetime);
        $('.cookieModal').modal('hide');
    });