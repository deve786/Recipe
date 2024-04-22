import React, { useState } from 'react'

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={`accordion ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
                {title}
            </button>
            {isOpen && <div className="panel">
                <p>{children}</p>
            </div>}
        </div>
  )
}

export default Accordion