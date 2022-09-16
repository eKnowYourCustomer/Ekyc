import React from 'react'

const Board = (props) => {
    const drop = e => {
        e.preventDefault();
        const card = document.getElementById(e.dataTransfer.getData('target_id'));
        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div
            id = {props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            width = {props.width}
        >
            {props.children}
        </div>
    )
}

export default Board