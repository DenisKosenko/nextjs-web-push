import ConsumerSelect from './select/consumerSelect';
import SubscriptionSelect from './select/subscriptionSelect';
import ActionSelect from './select/actionSelect';
import Input from './input/input';
import SubmitButton from './button/submitButton';
import ClearButton from './button/clearButton';

export default function Form({
    title,
    text,
    dusn,
    onSubmit,
    onTitleChange,
    onTextChange,
    onDusnChange,
    isLoading,
    onConsumerSelect,
    onSubscriptionSelect,
    consumerSubscriptions,
    selectedSubscriptions,
    setActionType,
}) {
    return (
        <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => {
                if (isLoading) return;

                e.preventDefault();
                onSubmit();
            }}
        >
            <h1 className="text-3xl mb-6 font-bold text-center">Web Push</h1>
            <Input
                value={title}
                onChange={onTitleChange}
                label="Notification Title"
                placeholder="Enter title..."
                id="title"
            />
            <Input
                value={text}
                onChange={onTextChange}
                label="Notification Body"
                placeholder="Enter body..."
                id="text"
            />
            <ConsumerSelect subscriptions={consumerSubscriptions} onSelect={onConsumerSelect} />
            <SubscriptionSelect subscriptions={selectedSubscriptions} onSelect={onSubscriptionSelect} />
            <ActionSelect onSelect={setActionType} />
            <Input value={dusn} onChange={onDusnChange} label="Dusn" placeholder="Enter dusn..." id="dusn" />
            <SubmitButton isLoading={isLoading} />
            <ClearButton />
        </form>
    );
}
