import { useState } from "react"
import "./Container.css"

export function Container({ title, children }){
    const [collapsed, setCollapsed] = useState(true)
    
    const handleToggle = () => {
        setCollapsed(t => !t)
    }

    return (
        <div className="container">
            <div className="container-btn"><button onClick={handleToggle}>Toggle</button></div>
            {collapsed && (
                <>
                    <div className="container-title">{title}</div> 
                    <div className="container-content">{children}</div>
                </>    
            )}
        </div>
    )
}