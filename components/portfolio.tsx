import Card from "./card";

export default function Portfolio() {
    return (
        <div>
            <div className="bg-text-secondary py-20">
                <h2 className="text-[#111827] px-20 text-3xl font-semibold">PORTFOLIO</h2>
                <div className="flex gap-4 px-10">
                    <div className="pt-8">
                        <Card
                            image="/contigoVoy.png"
                            title="Contigo Voy"
                            description="Centro psicológico enfocado en el bienestar emocional y la salud mental, ofreciendo acompañamiento profesional y terapias personalizadas."
                            technologies={["React", "Node.js", "Tailwind", "Laravel"]}
                            url="https://www.centropsicologicocontigovoy.com/"
                        />
                    </div>
                    <div className="pt-8">
                        <Card
                            image="/serviciosMultiples.png"
                            title="Servicios Multiples"
                            description="Grupo de gasfitería especializado en instalación, mantenimiento y reparación de thermas solares, brindando soluciones eficientes, seguras y sostenibles para el hogar y la industria."
                            technologies={["React", "Node.js", "Tailwind"]}
                            url="https://servicios-multiples-thermas-solares.vercel.app/"
                        />
                    </div>
                    <div className="pt-8">
                        <Card
                            image="/kataAlpaca.png"
                            title="Kata Alpaca"
                            description="Marca dedicada a la venta de ropa elaborada con fibra de alpaca, combinando tradición, calidad y diseño moderno para ofrecer prendas elegantes, cálidas y duraderas."
                            technologies={["React", "Node.js", "Tailwind"]}
                            url="https://www.kataalpaca.com/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}