import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full md:h-screen text-white bg-[#FFF]"
        > {/*c39a98 */} {/*bg-gradient-to-r from-[#c28688] to-[#d99787]*/}
            <div className="p-4 flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-gradient-to-t from-[#c28688] to-[#d99787] flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-[#0bbbc8]">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I'm Hannah Mullah, nice to meet you. Please take a
                                look around.
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                Once the decision was made to transition careers from healthcare to software development,
                                there was no stopping. I knew that I wanted to express my creativity and to start a new challenge
                                in the world of technology, even though the process wasn't going to be easy. However, the knowledge
                                that the long term outcome of becoming a junior developer, got rid of any doubts. From starting on YouTube,
                                to Udemy tutorials, to then completing an intensive Software Development course covering front and back-end
                                technologies. The extensive journey has allowed me to develop vital skills required in the software
                                development industry, alongside my already developed skills of management, communication and working
                                in one of the most busiest industries in the UK.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;