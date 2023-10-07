import React from 'react'
import { Button } from 'antd'
import { DeleteFilled, CheckCircleFilled } from '@ant-design/icons';

export default function NoteCard({note, completarNota}) {
    const handleCompletarNota = () => {
        // Llama a la función completarTarea para cambiar el sstado
        completarNota(note.id);
    };
    return (
        <div className={note.noteDone ? "note-done-card" : "note-card"}>
            <div className='note-detail'>
                <h3 className='note-title'>{note.note}</h3>
            </div>
            <div className='note-options'>
                {note.noteDone !== true && (
                    <div>
                        <Button 
                            shape="circle" 
                            icon={<CheckCircleFilled />} 
                            className="icon-done" 
                            onClick={handleCompletarNota}
                        />
                        <Button 
                            shape="circle" 
                            icon={<DeleteFilled />} 
                            className="icon-delete" 
                            onClick={() => console.log("PRESS DELETE")}
                        />
                    </div>
                )}
                {note.noteDone && (
                    <div style={{display:'flex'}}>
                        <CheckCircleFilled className='icon-note-done' />
                        <h4 className='note-title'>Completada</h4>
                    </div>
                )}
                    
            </div>
        </div>
    )
}
