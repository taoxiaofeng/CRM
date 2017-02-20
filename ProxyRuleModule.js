var argv = require('yargs').argv;

module.exports = {
    replaceRequestOption: function(req, option) {
        var newOption = option;
        var host = newOption.headers.host;
        var url=req.url;
        var reg=/((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/;

        //console.log(url);
        if (url.indexOf("www.567m.com/dev") == -1&&url.indexOf('localhost')==-1&&!reg.test(host)) {
            //console.log(newOption);
            newOption.hostname = "127.0.0.1";
            if(newOption.path=='/native'){
                newOption.path='';
            }
            var pos = host.indexOf(':');
            if (pos > 0) {
                newOption.port = host.substring(pos + 1);
            } else {
                newOption.port = "5000";
            }
        }
        return newOption;
    },

    summary: function() {
        return "wechat proxy";
    },

    shouldUseLocalResponse: function(req, reqBody) {
        if (req.method == "OPTIONS") {
            return true;
        } else {
            return false;
        }
    },

    dealLocalResponse: function(req, reqBody, callback) {
        if (req.method == "OPTIONS") {
            callback(200, mergeCORSHeader(req.headers), "");
        }
    },

    replaceServerResDataAsync: function(req, res, serverResData, callback) {
        if (req.url.indexOf('livereload.js') > 0) {
            var newDataStr = serverResData.toString();
            newDataStr = newDataStr.replace(new RegExp('"://" \\+ this\\.options\\.host', 'g'), '"://" + "127.0.0.1"');
            callback(newDataStr);
            return;
        }
        callback(serverResData);
    },

    replaceResponseHeader: function(req, res, header) {
        return mergeCORSHeader(req.headers, header);
    }
};

// https://github.com/alibaba/anyproxy/blob/master/rule_sample/rule_allow_CORS.js
function mergeCORSHeader(reqHeader, originHeader) {
    if (!reqHeader['origin']) {
        return originHeader;
    }

    var targetObj = originHeader || {};

    delete targetObj["Access-Control-Allow-Credentials"];
    delete targetObj["Access-Control-Allow-Origin"];
    delete targetObj["Access-Control-Allow-Methods"];
    delete targetObj["Access-Control-Allow-Headers"];

    targetObj["access-control-allow-credentials"] = "true";
    targetObj["access-control-allow-origin"] = reqHeader['origin'];
    targetObj["access-control-allow-methods"] = "GET, POST, PUT, DELETE";
    if (reqHeader['access-control-request-headers']) {
        targetObj["access-control-allow-headers"] = reqHeader['access-control-request-headers'];
    }

    return targetObj;
}