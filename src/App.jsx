import Sidebar from "./components/Sidebar"
import View from "./components/View"
import { useState } from "react"

function App() {
  const [addingProject, setAddingProject] = useState(false)
  const [projects, setProjects] = useState([])

  function handleOpenForm() {
    setAddingProject((prev) => (prev = true))
  }

  function handleCloseForm() {
    setAddingProject((prev) => (prev = false))
  }

  function handleAddProject(project) {
    handleCloseForm()
    setProjects((prevProjects) => {
      return [...prevProjects, project]
    })
  }

  console.log(projects)

  return (
    <>
      <main className="h-screen flex">
        <Sidebar addingProject={handleOpenForm} projects={projects} />
        <View
          isAddingProject={addingProject}
          onAddProject={handleOpenForm}
          onClose={handleCloseForm}
          addProject={handleAddProject}
          projects={projects}
        />
      </main>
    </>
  )
}

export default App
