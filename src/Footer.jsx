import Badge from 'react-bootstrap/Badge';
import React from 'react'
//aqui no supoe somo lograr que el css se pusiera por sobre boostrap , al importar me cambiaba todo
function Footer() {
  return (
    <footer>Galeria de imagenes hecha con React<Badge bg="secondary">®</Badge></footer>
  )
}

export default Footer
