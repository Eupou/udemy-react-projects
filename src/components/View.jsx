import DefaultView from "./DefaultView"

export default function View({
  isAddingProject,
  onAddingProject,
  addProject,
  projects,
}) {
  function handleButtonClick() {
    addProject({
      title: "title 1",
      description: "bla bla bla",
      dueDate: "",
      tasks: [],
    })
  }

  return (
    <>
      {isAddingProject ? (
        <div>
          oiii
          <button onClick={handleButtonClick}>clicaaa</button>
        </div>
      ) : (
        <>
          {projects.length > 0 ? (
            <div>Tem coisa</div>
          ) : (
            <DefaultView addingProject={onAddingProject} />
          )}
        </>
      )}
    </>
  )
}
