export default function Sidebar({ addingProject }) {
  return (
    <aside className="h-full w-1/3 bg-stone-900 text-xl">
      <div className="m-auto w-[90%]">
        <h1 className="text-3xl font-bold text-stone-100 my-4">
          Your projects
        </h1>
        <button
          onClick={addingProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + add Project
        </button>
      </div>
      <ul className="m-auto w-[90%]">
        <li className="flex p-2 justify-between my-4 text-stone-200 hover:bg-stone-800">
          <button>projeto 1</button>
        </li>
        <li className="flex p-2 justify-between my-4 text-stone-200 hover:bg-stone-800">
          projeto 2
        </li>
      </ul>
    </aside>
  )
}
