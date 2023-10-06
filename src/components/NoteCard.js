import React from 'react'
export default function NoteCard({note}) {
    return (
        <div className='note-card'>
            {note.note}
        </div>
    )
}
