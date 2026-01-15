export default function Contactanos({ id }: { id: string }) {
    return (
        <div className="w-full px-6 md:px-20 py-16 md:py-16 py-12 bg-bag" id={id}>
            <h2 className="text-[#111827] text-3xl md:text-3xl text-2xl font-semibold text-center">
                CONTACT ME
            </h2>

            <div className="flex justify-center pt-10 md:pt-10 pt-8">
                <form className="w-full max-w-xl border px-8 md:px-8 px-4 py-6 md:py-6 py-5 rounded-2xl border-[#9CA3AF] space-y-4 md:space-y-4 space-y-3">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4 gap-3">
                        <div className="w-full">
                            <p className="mb-1 text-lg md:text-lg text-base">Full Name</p>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 md:py-2 py-2.5 focus:outline-none md:text-base text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <p className="mb-1 text-lg md:text-lg text-base">Email Address</p>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 md:py-2 py-2.5 focus:outline-none md:text-base text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="mb-1 text-lg md:text-lg text-base">Subject</p>
                        <input
                            type="text"
                            placeholder="Reason for contact"
                            className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 md:py-2 py-2.5 focus:outline-none md:text-base text-sm"
                        />
                    </div>
                    <div className="w-full">
                        <p className="mb-1 text-lg md:text-lg text-base">Message</p>
                        <textarea
                            placeholder="Talk to me about the reason for contact"
                            className="w-full h-32 md:h-32 h-28 resize-none border border-[#9CA3AF] rounded-sm px-4 py-2 md:py-2 py-2.5 focus:outline-none md:text-base text-sm"
                        />
                    </div>
                    <div className="flex justify-center pt-2 md:pt-0">
                        <button
                            type="submit"
                            className="px-16 md:px-16 w-full md:w-auto bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white py-2 md:py-2 py-3 rounded-lg transition"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}