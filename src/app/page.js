"use client";

import { useState } from "react";
import Form from "./components/form";
import { sendNotifications } from "./service";
import Iphone from "./components/iphone";

export default function Home() {
  const [title, setTitle] = useState("Some title");
  const [text, setText] = useState("Some text");
  const [shouldClearInputFields, setShouldClearInputFields] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await sendNotifications({ title, text });
    setIsLoading(false);

    if (shouldClearInputFields) {
      setTitle("");
      setText("");
    }
  };

  return (
    <main className="flex w-full items-top justify-center p-24">
      <div className="flex items-center justify-between gap-5 flex-col md:flex-row md:gap-28 md:items-start">
        <Form
          title={title}
          text={text}
          shouldClearInputFields={shouldClearInputFields}
          onSubmit={onSubmit}
          onTitleChange={setTitle}
          onTextChange={setText}
          onShouldClearInputFieldsChange={setShouldClearInputFields}
          isLoading={isLoading}
        />
        <Iphone title={title} text={text} />
      </div>
    </main>
  );
}
