import Card from "./card";

export default function Portfolio({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-seccions py-20 md:py-20 py-12" id={id}>
                <h2 className="text-primary px-20 md:px-20 px-6 text-3xl md:text-3xl text-2xl font-semibold mb-8 md:mb-0">PORTFOLIO</h2>
                <div className="flex md:flex-row flex-col gap-4 md:gap-4 gap-6 px-10 md:px-10 px-6">
                    <div className="pt-8 md:pt-8 pt-0 flex justify-center">
                        <Card
                            image="/contigoVoy.png"
                            title="Contigo Voy"
                            description="Contigo Voy Mental health center providing professional support and personalized therapeutic treatments."
                            technologies={["React", "Node.js", "Tailwind", "Laravel"]}
                            url="https://www.centropsicologicocontigovoy.com/"
                        />
                    </div>
                    <div className="pt-8 md:pt-8 pt-0 flex justify-center">
                        <Card
                            image="/serviciosMultiples.png"
                            title="Servicios Multiples"
                            description="Servicios Multiples Industrial plumbing group specializing in sustainable solar water heating solutions, offering efficient maintenance and expert repairs."
                            technologies={["React", "Node.js", "Tailwind"]}
                            url="https://servicios-multiples-thermas-solares.vercel.app/"
                        />
                    </div>
                    <div className="pt-8 md:pt-8 pt-0 flex justify-center">
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