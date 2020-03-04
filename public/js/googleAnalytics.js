var DEBUG = true;

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-158806082-2', 'auto');
ga('require', 'GTM-NHDJ4HB')
if(DEBUG == false)
    ga('send', 'pageview')

function sendGAEvent(event){
    if(DEBUG == false)
        ga("send", "event", `${version}`, event);
}