export function Intro() {
    // Define the HTML elements as strings
    const elements = [
        `<div id="m-1" class="bg-white border-2 border-l-light-blue border-l-[0.75rem] rounded-lg justify-center p-4 ">
            <p class="font-semibold text-xl">
                Console.Log(" <br />
                <br />
                Bem Vindo ao meu portifólio, esse é uma pequena amostra dos meus conhecimentos, projetos e história relacionados a programação. <br />
                <br />
                Fique a vontade para explorar e entrar em contato para mais informações :) <br />
                <br />
                ")
            </p>
        </div>`,
        `<div id="2" class="bg-white border-2 border-l-light-blue border-l-[0.75rem] rounded-lg justify-center p-4 ">
            <p class="font-semibold text-xl">
                Sys.out.println(" <br />
                <br />
                Bem Vindo ao meu portifólio, esse é uma pequena amostra dos meus conhecimentos, projetos e história relacionados a programação. <br />
                <br />
                Fique a vontade para explorar e entrar em contato para mais informações :) <br />
                <br />
                ")
            </p>
        </div>`,
        `<div id="3" class="bg-white border-2 border-l-light-blue border-l-[0.75rem] rounded-lg justify-center p-4 ">
            <p class="font-semibold text-xl">
                Console.WriteLine(" <br />
                <br />
                Bem Vindo ao meu portifólio, esse é uma pequena amostra dos meus conhecimentos, projetos e história relacionados a programação. <br />
                <br />
                Fique a vontade para explorar e entrar em contato para mais informações :) <br />
                <br />
                ")
            </p>
        </div>`,
        `<div id="4" class="bg-white border-2 border-l-light-blue border-l-[0.75rem] rounded-lg justify-center p-4 ">
            <p class="font-semibold text-xl">
                &lt;html&gt; &lt;h1&gt;<br />
                <br />
                Bem Vindo ao meu portifólio, esse é uma pequena amostra dos meus conhecimentos, projetos e história relacionados a programação. <br />
                <br />
                Fique a vontade para explorar e entrar em contato para mais informações :) <br />
                <br />
                &lt;/h1&gt; &lt;/html&gt;
            </p>
        </div>`
    ];

    // Select a random element
    const randomIndex = Math.floor(Math.random() * elements.length);
    const selectedElement = elements[randomIndex];

    return (
        <div dangerouslySetInnerHTML={{ __html: selectedElement }} />
    );
}