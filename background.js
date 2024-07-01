chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1, 2],
        addRules: [
            {
                id: 1,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.googleadservices.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 2,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.googlesyndication.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 3,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.doubleclick.net/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 4,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.aax.amazon-adsystem.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 5,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.fls-na.amazon-adsystem.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 6,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.taboola.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            // Add more rules here for each domain
            {
                id: 60,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*://*.yumenetworks.com/*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            },
            {
                id: 61,
                priority: 1,
                action: { type: "block" },
                condition: {
                    urlFilter: "*utm_source=ad*|*adserver*|*ad_type=*",
                    resourceTypes: ["main_frame", "sub_frame", "script", "image", "xmlhttprequest", "other"]
                }
            }
        ]
    });
});
