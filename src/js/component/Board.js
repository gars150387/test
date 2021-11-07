import React from "react";

export const Board = (props)=>{
    const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer("card_id");
        const card = document.getElementById(card_id);
        card.style.display = "block";

        e.target.appendChild(card);
    }
    const dragOver = e =>{
        e.preventDefault();
    }

    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}