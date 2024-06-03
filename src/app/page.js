'use client';

import { useEffect, useState } from 'react';
import Form from './components/form';
import { sendNotifications } from './service';

export default function Home() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [consumerId, setConsumerId] = useState(null);
    const [subscriptionId, setSubscriptionId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log(subscriptions, consumerId, subscriptionId);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/subscriptionInfo');
            const data = await response.json();
            console.log(data);
            // const mappedData = data.map((subscription) => ({
            //     data: JSON.parse(subscription.data),
            //     createdAt: subscription.createdAt.toString(),
            // }));
            // setSubscriptions(mappedData);
        }

        fetchData();
    }, []);

    const onSubmit = async () => {
        setIsLoading(true);
        await sendNotifications({ title, text });
        setIsLoading(false);
    };

    return (
        <main className="flex w-full items-top justify-center p-24">
            <Form
                title={title}
                text={text}
                onSubmit={onSubmit}
                onTitleChange={setTitle}
                onTextChange={setText}
                isLoading={isLoading}
                subscriptions={subscriptions || {}}
                onConsumerSelect={setConsumerId}
                onSubscriptionSelect={setSubscriptionId}
            />
        </main>
    );
}
