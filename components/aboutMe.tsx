
export default function AboutMe({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-text-secondary w-full px-20 py-20 flex flex-col-2 gap-20" id={id}>
                <div className="flex w-1/4"><img
                    src="/photo.png"
                    alt="Profile"
                    className="w-full h-auto object-cover rounded-full"
                /></div>
                <div className="flex-1 w-3/4 space-y-6">
                    <h2 className="text-[#111827] text-3xl font-semibold">ABOUT ME</h2>
                    <p>Hi, my name is Frank. I’m a systems engineering student focused on programming, data analysis, and front-end web development.</p>
                    <p>I like to approach data and software as problem-solving challenges. For me, datasets are puzzles where patterns and insights can be discovered with the right tools and logic.</p>
                    <p>I’m constantly learning and improving my skills through projects, combining data, visualization, and web technologies to create practical and understandable solutions.</p>
                    <p>Interested in working together? Feel free to reach out.</p>
                </div>
            </div>
        </div >
    );
}