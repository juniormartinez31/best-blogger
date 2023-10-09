import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePost from "../components/ProfilePost"

const Profile = () => {
  return (
    <div>
        <Navbar />
           <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse
           md:items-start items-start">
              <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
                <h1 className="text-xl font-bold mb-4">
                  the posts:
                </h1>
                <ProfilePost />
                <ProfilePost />
                <ProfilePost />
              </div>

              {/* second item */}
        <div className="md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">

          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-xl font-bold mb-4">profile</h1>

            <input
              type="text"
              className="outline-none px-4 py-2 text-slate-500"
              placeholder="enter username"
            />

            <input
              type="email"
              className="outline-none px-4 py-2 text-slate-500"
              placeholder="enter email"
            />


            <input
              type="password"
              className="outline-none px-4 py-2 text-slate-500"
              placeholder="enter password"
            />


            {/* third item */}
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-slate-100 font-semibold bg-slate-700
  px-4 py-2 hover:text-black hover:bg-slate-400">
                updating
              </button>

              <button className="text-slate-100 font-semibold bg-slate-700
  px-4 py-2 hover:text-black hover:bg-slate-400">
                deleting
              </button>

            </div>
          </div>
              </div>
           </div>
        <Footer />
    </div>
  )
}

export default Profile