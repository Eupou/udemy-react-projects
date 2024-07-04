import DefaultView from "./DefaultView"
import NewProjectForm from "./NewProjectForm"

export default function View({
  isAddingProject,
  onAddProject,
  onClose,
  addProject,
  projects,
}) {
  return (
    <>
      {isAddingProject ? (
        <NewProjectForm onClose={onClose} addProject={addProject} />
      ) : (
        <>
          {projects.length > 0 ? (
            <div>Tem coisa</div>
          ) : (
            <DefaultView addingProject={onAddProject} />
          )}
        </>
      )}
    </>
  )
}
