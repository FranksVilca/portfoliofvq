import Card from "./card";

export default function Portfolio({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-text-secondary py-20" id={id}>
                <h2 className="text-[#111827] px-20 text-3xl font-semibold">PORTFOLIO</h2>
                <div className="flex gap-4 px-10">
                    <div className="pt-8">
                        <Card
                            image="/contigoVoy.png"
                            title="Contigo Voy"
                            description="Contigo Voy Mental health center providing professional support and personalized therapeutic treatments."
                            technologies={["React", "Node.js", "Tailwind", "Laravel"]}
                            url="https://www.centropsicologicocontigovoy.com/"
                        />
                    </div>
                    <div className="pt-8">
                        <Card
                            image="/serviciosMultiples.png"
                            title="Servicios Multiples"
                            description="Servicios Multiples Industrial plumbing group specializing in sustainable solar water heating solutions, offering efficient maintenance and expert repairs."
                            technologies={["React", "Node.js", "Tailwind"]}
                            url="https://servicios-multiples-thermas-solares.vercel.app/"
                        />
                    </div>
                    <div className="pt-8">
                        <Card
                            image="/kataAlpaca.png"
                            title="Kata Alpaca"
                            description="Kata Alpaca Premium fashion brand blending traditional alpaca fiber with modern design to deliver high-quality, elegant, and durable garments."
                            technologies={["React", "Node.js", "Tailwind"]}
                            url="https://www.kataalpaca.com/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}