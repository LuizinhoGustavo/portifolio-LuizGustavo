import { TechIcons } from "./TechIcons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Tecnhologies = () => {
    const Icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    ];

    return (
        <div className="px-5 lg:px-32 mt-28">
            <h3 className="text-center md:text-start text-3xl">Tecnologias</h3>
            <Swiper className=""
                spaceBetween={20}
                slidesPerView={2}
                navigation
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
    );
};