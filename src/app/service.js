'use server';
const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:mail@mail.com',
    'BCxL2DybJvB1xXVSsVYaYxpeHTIELW2AWbzg20Nn5BCKUH2CBKXgIFQPXr0dMm_Wo0U-7oqAnzgAFpiFLEZPnTk',
    'ujiAttQyHkDA-LuRL1iZG0RnoX3uNexRoKk_b9aznSs'
);

export const sendNotification = ({ title, text, pushSubscription, actionType, iconUrl, dusn }) => {
    return webpush.sendNotification(
        pushSubscription,
        JSON.stringify({
            title: title,
            body: text,
            icon: iconUrl,
            data: {
                action: actionType,
                dusn,
            },
        })
    );
};
