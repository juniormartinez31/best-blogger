import { useState } from "react"
import Footer from "../components/Footer"
import { ImCross } from "react-icons/im"
import Navbar from "../components/Navbar"

const EditedPost = () => {

    const [categod, setCategod] = useState("")

    const [cats, setCats] = useState([])

    const deleteCategory = (i) => {
       let updateCat = [...cats]

       updateCat.splice(i)

       setCats(updateCat)
    }

    const addCategory = () => {
       let updateCat = [...cats]

       updateCat.push(categod)

       setCategod("")

       setCats(updateCat)
    }

  return (
    <div>
          <Navbar />
         {/* create first element */}
         <div className="px-6 md:px-[200px] mt-0">
            <h1 className="font-bold md:text-2xl text-xl">
                updating post
            </h1>

            <form className="w-full flex flex-col space-y-2 md:space-y-8 mt-6">
                <input 
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="create posted"
                />

                  <input
                      type="file"
                      className="px-4"
                  />


                  {/* other element */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <input
                        value={categod}
                        onChange={(e) => setCategod(e.target.value)}
                        type="text"
                        className="px-4 py-2 outline-none"
                        placeholder="enter category"
                        />

                        <div 
                        onClick={addCategory}
                        className="bg-black text-slate-100 px-4 py-2
                        font-semibold cursor-pointer">
                            add
                        </div>
                    </div>


                     {/* categorys */}
                    {/* third element */}
                      <div className="flex px-4 mt-3">
                        {cats?.map((d, i) => (
                            <div key={i} className="flex justify-center items-center space-x-2 mr-4
                            bg-slate-200 px-2 py-1 rounded-md">
                                      <p>{d}</p>
                                      <p
                                      onChange={deleteCategory(i)}
                                          className="text-slate-100 bg-slate-600 rounded-full
                                cursor-pointer p-1 text-sm"
                                      >
                                          <ImCross />
                                      </p>
                                  </div>
                        ))}
                      </div>
                  </div>

                  {/* more information */}
                  <textarea
                  rows={15}
                  cols={30}
                  className="px-4 py-2 outline-none"
                  placeholder="enter description"
                  />

                  <button
                  className="bg-slate-700 w-full md:w-[20%] mx-auto text-slate-100
                  font-semibold px-4 py-2 md:text-xl text-lg">
                    updating
                  </button>
            </form>
         </div>
        <Footer />
    </div>
  )
}

export default EditedPost