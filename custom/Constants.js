'use strict'
angular.module('app')
    /** URL API */
    .constant('Config', {  
        api: 'http://localhost/csr/public',
        saltKey: 'csrSomeRandomKey098765',
        captchaGKey: '6LcFWEQUAAAAALVm_v67yawUrChvO-ediHIMQbgu', //default server
        // captchaGKey: '' //localhost
        timezone: getTimeZone()
    })


    // oclazyload config
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug:  true,
            events: true
        });
    }]);

    /** get timezone */
    function getTimeZone() {
        var offset = new Date().getTimezoneOffset(),
            o = Math.abs(offset);
        return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
    }