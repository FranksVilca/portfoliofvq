export default function Contactanos({ id }: { id: string }) {
    return (
        <div className="w-full px-6 md:px-20 py-16 bg-bag" id={id}>
            <h2 className="text-[#111827] text-3xl font-semibold text-center">
                CONTACT ME
            </h2>

            <div className="flex justify-center pt-10">
                <form className="w-full max-w-xl border px-8 py-6 rounded-2xl border-[#9CA3AF] space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <p className="mb-1 text-lg">Full Name</p>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <p className="mb-1 text-lg">Email Address</p>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="mb-1 text-lg">Subject</p>
                        <input
                            type="text"
                            placeholder="Reason for contact"
                            className="w-full border border-[#9CA3AF] rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <p className="mb-1 text-lg">Message</p>
                        <textarea
                            placeholder="Talk to me about the reason for contact"
                            className="w-full h-32 resize-none border border-[#9CA3AF] rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-16 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-lg transition"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
