import Sidebar from "./components/Sidebar"
import View from "./components/View"
import { useState } from "react"

function App() {
  const [addingProject, setAddingProject] = useState(false)
  const [projects, setProjects] = useState([])

  function handleAddingProject() {
    setAddingProject((prev) => (prev = true))
  }

  function addProject(project) {
    setAddingProject((prev) => (prev = false))
    setProjects((prevProjects) => {
      return [...prevProjects, project]
    })
  }

  console.log(projects)

  return (
    <>
      <main className="h-screen flex">
        <Sidebar addingProject={handleAddingProject} />
        <View
          isAddingProject={addingProject}
          onAddingProject={handleAddingProject}
          addProject={addProject}
          projects={projects}
        />
      </main>
    </>
  )
}

export default App
