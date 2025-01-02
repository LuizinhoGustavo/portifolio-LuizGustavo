import { TechIcons } from "./TechIcons";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";

export const Tecnhologies = () => {
    const Icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ];

    return (
        <div className="lg:h-[60vh] mt-10">
            <h3 className="text-center mt-32 lg:mt-0 md:px-32 md:pb-10 text-3xl">Tecnologias e Conhecimentos</h3>

            {/* caso o dispositivo seja menor que 1024px, ent */}
            <div className="block lg:hidden px-5 lg:px-32 mt-10 lg:mt-28">

                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1280: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {Icons.map((image, index) => (
                        <SwiperSlide key={index} className="py-3 px-2">
                            <TechIcons image={image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden lg:flex flex-wrap justify-center mx-auto w-full">

                <div className="flex gap-5 flex-wrap justify-around mx-auto max-w-[1240px]">
                    {Icons.map((image, index) => (
                        <TechIcons key={index} image={image} />
                    ))}
                </div>

            </div>

        </div >
    );
};