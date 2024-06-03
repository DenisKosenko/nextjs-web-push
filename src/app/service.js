'use server';
const webpush = require('web-push');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

webpush.setVapidDetails(
    'mailto:mail@mail.com',
    'BCxL2DybJvB1xXVSsVYaYxpeHTIELW2AWbzg20Nn5BCKUH2CBKXgIFQPXr0dMm_Wo0U-7oqAnzgAFpiFLEZPnTk',
    'ujiAttQyHkDA-LuRL1iZG0RnoX3uNexRoKk_b9aznSs'
);

export const sendNotifications = async ({ title, text }) => {
    const subscriptions = await prisma.subscriptions.findMany();

    for await (const { data } of subscriptions) {
        await sendNotification({ title, text, pushSubscription: JSON.parse(data) });
    }

    return true;
};

const sendNotification = ({ title, text, pushSubscription }) => {
    return webpush.sendNotification(
        pushSubscription,
        JSON.stringify({
            title: title,
            options: {
                body: text,
                actions: [
                    {
                        action: '/coffee-action',
                        type: 'button',
                        title: 'Coffee',
                        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg',
                    },
                ],
            },
        })
    );
};
