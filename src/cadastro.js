import { useState } from "react"

export const Cadastro = () => {
    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState(["sergio", "josé"])
    
    function adicionaUsuario() {
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    return (
        <div>
            <input onChange={(event)=> setUsuario(event.target.value)} value={usuario}></input>
            <input type="button" 
                onClick={adicionaUsuario}
            ></input>
            {usuarios.map((pessoa)=>((<p>{pessoa}</p>)))}
        </div>
    )
}