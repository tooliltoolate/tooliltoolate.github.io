// Source - https://stackoverflow.com/a/4919931
// Posted by Arseny
// Retrieved 2026-10-07, License - CC BY-SA 2.5

function get_cookies_array() {

    var cookies = { };

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    return cookies;

}
// Source - https://stackoverflow.com/a/4919931
// Posted by Arseny
// Retrieved 2026-10-07, License - CC BY-SA 2.5

var cookies = get_cookies_array();
for(var name in cookies) {
  document.write( name + " : " + cookies[name] + "<br />" );
}
