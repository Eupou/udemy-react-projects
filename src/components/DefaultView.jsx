import img from "../assets/no-projects.png"

export default function DefaultView({ addingProject }) {
  return (
    <div className="grow flex justify-center ">
      <div className="flex flex-col items-center mt-20">
        <img className="w-[100px]" src={img} alt="You have no projects yet" />
        <h2 className="text-xl font-bold text-stone-700 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-600 text-lg mb-4">
          Select a project or get started with a new one
        </p>
        <button
          onClick={addingProject}
          className="text-lg px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950"
        >
          Create new project
        </button>
      </div>
    </div>
  )
}
