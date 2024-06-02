"use server";
const webpush = require("web-push");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

webpush.setVapidDetails(
  'mailto:mail@mail.com',
  'BCxL2DybJvB1xXVSsVYaYxpeHTIELW2AWbzg20Nn5BCKUH2CBKXgIFQPXr0dMm_Wo0U-7oqAnzgAFpiFLEZPnTk',
  'ujiAttQyHkDA-LuRL1iZG0RnoX3uNexRoKk_b9aznSs'
);
;

export const sendNotifications = async ({ title, text }) => {
  const subscriptions = await prisma.subscriptions.findMany();
console.log(subscriptions);
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
        // icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg",
        // image:
        //   "https://ch.iqos.com/sites/g/files/hncfsx821/files/2021-09/IQOS_ILUMA_Science1_ContentBlock_Benefits_ImageCollage_Variant4_Grid1_Image2_Global_Desktop_Standard.jpg",
        actions: [
          {
            action: "/coffee-action",
            type: "button",
            title: "Coffee",
            // icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg",
          },
        ],
      },
    })
  );
};
