export default function Contactanos() {
    return (
        <div>
            <div className="w-full px-20 py-15 bg-bag">
                <h2 className="text-[#111827] px-20 text-3xl font-semibold text-center">CONTACT ME</h2>
                <div className="flex justify-center pt-10">
                    <form className="border p-10">
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="flex gap-4">
                            <input type="email" placeholder="Email" />
                        </div>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}