'use client';

import { useEffect, useState } from 'react';
import Form from './components/form';
import { sendNotification } from './service';
import useSetDefaultText from './hooks/useSetDefaultText';

export default function Home() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [dusn, setDusn] = useState('');
    const [iconUrl, setIconUrl] = useState('');
    const [consumerId, setConsumerId] = useState(null);
    const [subscriptionId, setSubscriptionId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [actionType, setActionType] = useState(false);
    const consumerSubscriptions = subscriptions.filter((x) => x.consumerId === consumerId);
    const [selectedSubscriptions] = consumerSubscriptions.filter((x) => x.subscriptionId === +subscriptionId);
    const uniqueConsumerIds = [...new Set(subscriptions.map((x) => x.consumerId))];
    const uniqueSubscriptions = uniqueConsumerIds.map((id) => subscriptions.find((x) => x.consumerId === id));

    async function fetchData() {
        const response = await fetch('/api/subscriptionInfo');
        const data = await response.json();

        const mappedData = data.subscriptions.map((x) => ({
            ...JSON.parse(x.data),
            createdAt: x.createdAt.toString(),
        }));
        console.log(mappedData);
        setSubscriptions(mappedData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useSetDefaultText(actionType, setTitle, setText);

    const onSubmit = async () => {
        setIsLoading(true);

        try {
            await sendNotification({
                title,
                text,
                iconUrl,
                actionType,
                dusn,
                pushSubscription: selectedSubscriptions.subscription,
            });
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    };

    return (
        <main className="flex w-full items-top justify-center max-w-md mx-auto p-8 text-[#0f172a]">
            <Form
                consumerId={consumerId}
                subscriptionId={subscriptionId}
                title={title}
                text={text}
                dusn={dusn}
                iconUrl={iconUrl}
                setIconUrl={setIconUrl}
                onSubmit={onSubmit}
                onTitleChange={setTitle}
                onTextChange={setText}
                onDusnChange={setDusn}
                isLoading={isLoading}
                consumerSubscriptions={uniqueSubscriptions || {}}
                selectedSubscriptions={consumerSubscriptions || {}}
                onConsumerSelect={setConsumerId}
                onSubscriptionSelect={setSubscriptionId}
                setActionType={setActionType}
            />
        </main>
    );
}
