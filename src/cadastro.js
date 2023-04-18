import { useEffect, useState } from "react"

export const Cadastro = () => {
    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState(["sergio", "josé"])
    const [conta, setConta] = useState(2)

    useEffect(()=>{
        setConta(usuarios.length)
    }, [usuarios])

    function adicionaUsuario() {
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    return (
        <div>
            <h1>Total: {conta}</h1>
            <input onChange={(event)=> setUsuario(event.target.value)} value={usuario}></input>
            <input type="button" 
                onClick={adicionaUsuario}
            ></input>
            {usuarios.map((pessoa)=>{ return (<p>{pessoa}</p>)})}
        </div>
    )
}