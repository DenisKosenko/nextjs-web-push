import ConsumerSelect from './select/consumerSelect';
import Loader from './loader';
import SubscriptionSelect from './select/subscriptionSelect';
import ActionSelect from './select/actionSelect';

export default function Form({
    title,
    text,
    onSubmit,
    onTitleChange,
    onTextChange,
    isLoading,
    subscriptions,
    onConsumerSelect,
    onSubscriptionSelect,
    consumerSubscriptions,
    selectedSubscriptions,
    setActionType,
}) {
    return (
        <form
            className="w-80"
            onSubmit={(e) => {
                if (isLoading) return;

                e.preventDefault();
                onSubmit();
            }}
        >
            <div className="mb-6">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                    Notification Title
                </label>
                <input
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Notification Body
                </label>
                <input
                    placeholder="Enter body..."
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                    type="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
            </div>
            <div className="mb-6">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Consumer Id
                </label>
                <ConsumerSelect subscriptions={consumerSubscriptions} onSelect={onConsumerSelect} />
            </div>
            <div className="mb-6">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Subscription Id
                </label>
                <SubscriptionSelect subscriptions={selectedSubscriptions} onSelect={onSubscriptionSelect} />
            </div>
            <div className="mb-6">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Action Type
                </label>
                <ActionSelect onSelect={setActionType} />
            </div>
            <button
                disabled={isLoading}
                type="submit"
                className={`mb-6 flex items-center justify-center gap-3 text-white bg-blue-700 ${
                    !isLoading ? 'hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300' : ''
                } font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center`}
            >
                {isLoading && <Loader />}
                Send push notification
            </button>
        </form>
    );
}
