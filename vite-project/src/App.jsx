import { useState } from 'react'
import Header from './components/Header' //impor component Header
import Calon from './components/Calon'
import './App.css'

function App() {
  const [suaraSatu, setsuaraSatu] = useState(0)
  const [suaraDua, setsuaraDua] = useState(0)
  const [suaraTiga, setsuaraTiga] = useState(0)
  const [suaraEmpat, setsuaraEmpat] = useState(0)

  const handleClickSatu = () => setsuaraSatu(suaraSatu+1)
  const handleClickDua = () => setsuaraDua(suaraDua+1)
  const handleClickTiga = () => setsuaraTiga(suaraTiga+1)
  const handleClickEmpat = () => setsuaraTiga(suaraEmpat+1)

  return (
    <>
    {/* panggil component header */}
      <Header />
      <Calon nama="Fitri Nandri" perolehansuara={suaraSatu} onClick={handleClickSatu} />
      <Calon nama="RD PS" perolehansuara={suaraDua} onClick={handleClickDua}/>
      <Calon nama="Yudha Bahar" perolehansuara={suaraTiga} onClick={handleClickTiga}/>
      <Calon nama="Tidak Sah" perolehansuara={suaraEmpat} onClick={handleClickEmpat}/>
    </>
  )
}

export default App
