
const Footer = () => {
  return (
    <>
     <div className="mt-8 w-full bg-slate-600 px-8 md:px-[500px] flex
     md:flex-row flex-col space-y-4 md:space-y-8 items-start md:justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-slate-100">
            <p>Features Bloger</p>
            <p>Most views</p>
            <p>Reader choice</p>
        </div>

        <div className="flex flex-col text-slate-100">
            <p>Forums</p>
            <p>Supported</p>
            <p>Recents posts</p>
        </div>


        <div className="flex flex-col text-slate-100">
            <p>Privacy polities</p>
            <p>About blog</p>
            <p>Terms & Conditions</p>
            <p>Terms services</p>
        </div>
    </div>

    <p className="py-2 pb-2 text-center text-slate-100 bg-slate-600">
        Copyright reserved @Blog Marks 2023
    </p>
    </>
  )
}

export default Footer