import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

const Comments = () => {
  return (
    <div className="px-2 py-2 bg-slate-400 rounded-lg my-2">
    <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-500">
            @lexibook
        </h3>

        <div className="flex justify-center items-center space-x-4">
            <p className="text-slate-500 text-sm">18/04/2023</p>
            <p className="text-slate-500 text-sm">15:10</p>

              <div className="flex items-center justify-center space-x-2">
                  <p><BiEdit /></p>
                  <p><MdDelete /></p>
              </div>
        </div>
    </div>

    {/* another comment */}
    <p className="px-4 mt-2">
        this information is for learning more about destress rob
    </p>
</div>
  )
}

export default Comments