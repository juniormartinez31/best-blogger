
const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
        {/* left side */}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img 
            src="https://m.media-amazon.com/images/I/7146HyEZZML._AC_SX569_.jpg" 
            alt="" 
            className="h-full w-full object-cover" 
            />
        </div>

        {/* right side */}
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            Powerman Jr. Juguete interactivo inteligente que lee en la mente juguete para niños Bailando.
            </h1>

            <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center 
            justify-center md:mb-4">
                <p>@lexibook</p>

                <div className="flex space-x-2">
                    <p>18/04/2023</p>
                    <p>15:10</p>
                </div>
            </div>

            <p className="text-sm md:text-lg">
            Tu nuevo amigo: un robot explorador que baila, reproduce música, <br /> 
             reproduce sonidos de animales y mucho más. Con toneladas de sorpresas.
            </p>
        </div>
    </div>
  )
}

export default HomePost