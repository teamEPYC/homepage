import { useFetcher } from "react-router";
import { NewsLetterIcon } from "./logo";
import { useState } from "react";

interface SubscribeResponse {
  success?: boolean;
  error?: string;
  data?: any;
}

export default function Newsletter() {
  const fetcher = useFetcher<SubscribeResponse>();
  const [email, setEmail] = useState("");

  console.log(fetcher.data);

  const isSubmitting = fetcher.state === "submitting";
  const isSuccess = fetcher.data?.success === true;
  const isError = fetcher.data?.error;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const formData = new FormData();
    formData.append("email", email);
    fetcher.submit(formData, {
      method: "post",
      action: "/api/subscribe",
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (fetcher.data) {
      fetcher.load("/api/subscribe");
    }
  };

  return (
    <div className="!border-gray-300/60 border-t mt-6 md:mt-16 pt-14 md:pt-0 pb-2 md:border-0">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-6">
        <div className="">
          <p className="!text-black/50">
            Stay in touch with the latest
            <br className="hidden sm:block" />
            Miden products & updates.
          </p>
        </div>
        <div className="flex flex-col lg:flex-1 lg:max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-row shadow-sm">
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 h-11 border !border-gray-300/60 focus:outline-none disabled:opacity-50"
              name="email"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="bg-primary/90 hover:bg-primary text-white transition-colors duration-200 flex items-center justify-center w-11 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 !border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <NewsLetterIcon className="w-5 h-5" />
              )}
            </button>
          </form>

          {fetcher.data && (
            <div className="mt-2 text-xs">
              {isSuccess && (
                <p className="text-green-600">
                  Successfully subscribed! Thank you for joining our newsletter.
                </p>
              )}
              {isError && (
                <p className="text-red-600">
                  {isError}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}