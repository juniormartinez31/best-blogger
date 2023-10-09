import { BiEdit } from "react-icons/bi"
import { MdDelete } from 'react-icons/md'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Comments from "../components/Comments"

const PostDetail = () => {
  return (
    <div>
        <Navbar />
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-amber-900 md:text-3xl">
                Powerman Jr. Juguete interactivo inteligente que lee en la mente juguete para niños Bailando.
                </h1>

                <div className="flex items-center justify-center space-x-2">
                    <p><BiEdit /></p>
                    <p><MdDelete /></p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2 md:mt-4">
                  <p>@lexibook</p>

                  <div className="flex space-x-2">
                      <p>18/04/2023</p>
                      <p>15:10</p>
                  </div>
            </div>

            <img 
            src="https://m.media-amazon.com/images/I/7146HyEZZML._AC_SX569_.jpg" 
            className="w-full mx-auto mt-8" 
            />

            <p className="mx-auto mt-8">
            Repite después de ti - Con la función de reproducción y grabación, <br />
             puede repetir lo que dices con su divertida voz de robot. Incluye una función <br />
              de karaoke, donde repetirá en música! También reutilizará más tarde lo que se le enseñe.
            </p>

            <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Category:</p>


                {/* first item */}

                <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-400 rounded-lg px-3 py-3">
                        novel prime-tech
                    </div>
             
                       {/* second item */}
                    <div className="bg-gray-400 rounded-lg px-3 py-3">
                        ia
                    </div>
                </div>

                {/* third item */}

                <div className="flex flex-col mt-4">
                    <h3 className="mt-6 mb-4 font-semibold">
                        commentary:
                    </h3>

                     <Comments />
                     <Comments />
                   
                </div> 

                {/* write comments */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input 
                    type="text" 
                    className="md:w-[70%] outline-none py-2 px-4 mt-4 md:mt-0" 
                    placeholder="write comments"
                    />

                    <button className="bg-black text-sm text-slate-100 px-4 py-2
                    md:w-[20%] mt-4 md:mt-0">
                        add comment
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostDetail