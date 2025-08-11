import { NewsLetterIcon } from "./logo";

export default function Newsletter() {
    return (
        <div className="!border-gray-300/60 pt-8 pb-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="">
                    <p className="!text-black/50">
                        Stay in touch with the latest<br className="hidden sm:block" />
                        Miden products & updates.
                    </p>
                </div>
                <div className="flex flex-row lg:flex-1 lg:max-w-lg">
                    <input
                        type="email"
                        placeholder="you@email.com"
                        className="flex-1 px-4 py-3 h-11 border !border-gray-300/60 focus:outline-none"
                        required
                    />
                    <button className="bg-primary/90 hover:bg-primary text-white transition-colors duration-200 flex items-center justify-center w-11 cursor-pointer">
                        <NewsLetterIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}