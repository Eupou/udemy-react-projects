import DefaultView from "./DefaultView"
import NewProjectForm from "./NewProjectForm"
import Project from "./Project"

export default function View({
  isAddingProject,
  onAddProject,
  onClose,
  onRemoveProject,
  addProject,
  projects,
  onRemoveTask,
  onAddTask,
}) {
  const selectedProject = projects.filter((project) => project.selected).pop()

  return (
    <>
      {isAddingProject ? (
        <NewProjectForm onClose={onClose} addProject={addProject} />
      ) : (
        <>
          {projects.length > 0 ? (
            <Project
              project={selectedProject}
              onRemoveProject={onRemoveProject}
              onAddTask={onAddTask}
              onRemoveTask={onRemoveTask}
            />
          ) : (
            <DefaultView addingProject={onAddProject} />
          )}
        </>
      )}
    </>
  )
}
