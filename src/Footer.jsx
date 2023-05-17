import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
//aqui no supoe somo lograr que el css se pusiera por sobre boostrap , al importar me cambiaba todo
function Footer() {
  return (
    <footer>Galeria de imagenes hecha con React <span className="badge badge-primary">®</span></footer>
  )
}

export default Footer