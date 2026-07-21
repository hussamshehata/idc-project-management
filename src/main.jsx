import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProjectsProvider } from "@/context/ProjectsContext";
import { TasksProvider } from "@/context/TasksContext";
createRoot(document.getElementById('root')).render(
    <ProjectsProvider>
        <TasksProvider>

            <App />

        </TasksProvider>
    </ProjectsProvider>
)
