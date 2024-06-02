import { useEffect, useState } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <p className="mt-3 text-white text-6xl font-extralight">
      {hours}:{minutes}
    </p>
  );
}
