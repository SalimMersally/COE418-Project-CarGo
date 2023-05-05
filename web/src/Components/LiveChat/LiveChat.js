import React, {useEffect} from 'react'

function Livechat() {
    useEffect(() => {
        window.chatwootSettings = {
            hideMessageBubble: false,
            position: "right",
            locale: "en",
            type: "standard"
        };

        (function (d, t) {
            const BASE_URL = "https://app.chatwoot.com";
            const g = d.createElement(t), s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g, s);

            g.onload = function () {
                console.log(window.chatwootSDK);
                window.chatwootSDK.run({
                    websiteToken: process.env.REACT_APP_WEBSITE_TOKEN,
                    baseUrl: BASE_URL
                })
            }
        })(document, "script");
    }, []);

    return null;
}

export default Livechat;