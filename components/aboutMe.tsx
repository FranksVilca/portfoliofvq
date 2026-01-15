export default function AboutMe({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-seccions w-full px-20 md:px-20 px-6 py-20 md:py-20 py-12 flex md:flex-row flex-col md:gap-20 gap-8" id={id}>
                <div className="flex md:w-1/4 w-full justify-center">
                    <img
                        src="/photo.png"
                        alt="Profile"
                        className="md:w-full w-48 h-auto object-cover rounded-full"
                    />
                </div>
                <div className="flex-1 md:w-3/4 w-full space-y-6 md:space-y-6 space-y-4">
                    <h2 className="text-primary text-3xl md:text-3xl text-2xl font-semibold">ABOUT ME</h2>
                    <p className="md:text-base text-sm text-text-secondary">Hi, my name is Frank's Vilca. I'm a systems engineering student focused on programming, data analysis, and front-end web development.</p>
                    <p className="md:text-base text-sm text-text-secondary">I like to approach data and software as problem-solving challenges. For me, datasets are puzzles where patterns and insights can be discovered with the right tools and logic.</p>
                    <p className="md:text-base text-sm text-text-secondary">I'm constantly learning and improving my skills through projects, combining data, visualization, and web technologies to create practical and understandable solutions.</p>
                    <p className="md:text-base text-sm text-text-secondary">Interested in working together? Feel free to reach out.</p>
                </div>
            </div>
        </div >
    );
}