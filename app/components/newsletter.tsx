import { Form } from "react-router";
import { NewsLetterIcon } from "./logo";

export default function Newsletter() {
  return (
    <div className="!border-gray-300/60 border-t mt-6 md:mt-16 pt-14 md:pt-0 pb-2 md:border-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 md:gap-6">
        <div className="">
          <p className="!text-black/50">
            Stay in touch with the latest
            <br className="hidden sm:block" />
            Miden products & updates.
          </p>
        </div>
        <Form
          className="flex flex-row lg:flex-1 lg:max-w-lg shadow-sm"
          action="/api/subscribe"
          method="post"
          navigate={false}
        >
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 px-4 py-3 h-11 border !border-gray-300/60 focus:outline-none"
            required
            name="email"
          />
          <button
            type="submit"
            className="bg-primary/90 hover:bg-primary text-white transition-colors duration-200 flex items-center justify-center w-11 cursor-pointer"
          >
            <NewsLetterIcon className="w-5 h-5" />
          </button>
        </Form>
      </div>
    </div>
  );
}
