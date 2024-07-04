export default function View({ addingProject, addProject, projects }) {
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
      {addingProject ? (
        <div>
          oiii
          <button onClick={handleButtonClick}>clicaaa</button>
        </div>
      ) : (
        <>
          {projects.length > 0 ? <div>Tem coisa</div> : <div>nn tem nada</div>}
        </>
      )}
    </>
  )
}
