import './App.css';
import './styles/global.css'
import { useState } from 'react';
import { Modal, FloatButton, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const { TextArea } = Input;

function App() {
  const rootStyles = getComputedStyle(document.documentElement);

  const colorPrimario = rootStyles.getPropertyValue('--color-primario');
  const colorFondo = rootStyles.getPropertyValue('--color-fondo');
  const colorSecundario = rootStyles.getPropertyValue('--color-secundario');
  const color4 = rootStyles.getPropertyValue('--color4');
  const color5 = rootStyles.getPropertyValue('--color5');

  const [modalAddNote, setModalAddNote] = useState(false);
  const [noteText, setNoteText] = useState("");

  /**
   * Función para manejar el cambio de texto del input y actualizar estado
   *
   * @param {Object} txt - objecto de input para acceder a valores
   */
  const handleChangeInput = (txt) => {
    setNoteText(txt.target.value)
  }

  /**
   * Función para mostrar y reiniciar valores de texto de input
   */
  const handleShowModal = () => {
    setNoteText("");
    setModalAddNote(!modalAddNote)
  }

  return (
    <div className="App">
      <h1>Aplicación para crear notas</h1>
      {/* Buscador */}

      {/* Modal agregar nota */}
      <Modal
        title="Agregar nota"
        centered
        open={modalAddNote}
        onOk={() => setModalAddNote(false)}
        okText="Guardar"
        onCancel={() => setModalAddNote(false)}
        cancelText="Cancelar"
        okButtonProps={{
          style: {
            background: colorPrimario,
            borderColor: colorPrimario,
            color: '#fff',
          },
        }}
      >
        <TextArea value={noteText} onChange={handleChangeInput} rows={3} placeholder='Escribe una nota...' />
      </Modal>

      {/* Botón flotante mostrar modal */}
      <FloatButton 
        onClick={() => handleShowModal()} 
        type='secondary'
        icon={<PlusOutlined />}
        size="large"
        style={{
          backgroundColor: colorPrimario,
          color: '#fff'
        }}
      />
    </div>
  );
}

export default App;
