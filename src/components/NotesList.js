import React from 'react'
import NoteCard from './NoteCard'
import '../styles/notes.css';

export default function NotesList({notes}) {
    return (
        <div className='container-notes-list'>
            {notes.map((nt) => (
                <NoteCard note={nt}/>
            ))}
        </div>
    )
}
