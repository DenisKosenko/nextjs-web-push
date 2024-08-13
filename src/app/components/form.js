import ConsumerSelect from './select/consumerSelect';
import SubscriptionSelect from './select/subscriptionSelect';
import ActionSelect from './select/actionSelect';
import Input from './input/input';
import SubmitButton from './button/submitButton';
import ClearButton from './button/clearButton';
import TitleInput from './input/titleInput';
import BodyInput from './input/bodyInput';
import DusnInput from './input/dusnInput';
import IconInput from './input/iconInput';

export default function Form({
    consumerId,
    subscriptionId,
    title,
    text,
    dusn,
    iconUrl,
    setIconUrl,
    onSubmit,
    onTitleChange,
    onTextChange,
    onDusnChange,
    isLoading,
    onConsumerSelect,
    onSubscriptionSelect,
    consumerSubscriptions,
    selectedSubscriptions,
    actionType,
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
            <ConsumerSelect subscriptions={consumerSubscriptions} onSelect={onConsumerSelect} />
            {consumerId && <SubscriptionSelect subscriptions={selectedSubscriptions} onSelect={onSubscriptionSelect} />}
            {consumerId && subscriptionId && (
                <>
                    <ActionSelect onSelect={setActionType} />
                    <TitleInput value={title} onChange={onTitleChange} />
                    <BodyInput value={text} onChange={onTextChange} />
                    <IconInput value={iconUrl} onChange={setIconUrl} />
                    <DusnInput value={dusn} onChange={onDusnChange} actionType={actionType} />
                    <SubmitButton isLoading={isLoading} />
                </>
            )}
            <ClearButton />
        </form>
    );
}
