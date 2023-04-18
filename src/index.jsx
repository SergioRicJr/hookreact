import {useState, useMemo, useCallback} from 'react'

export const Teste = () => {
    const [currentName, setName] = useState("sergio")
    const [currentAge, setAge] = useState(26)

    const handleChangeName = () => {
        setName(prev=> prev==="josé"?"sergio":"josé")
    }

    // const handleChangeAge = () => {
        
    // }

    const handleChangeAge = useCallback(()=>{
        const newAge = 10* currentAge
        setAge(prev=> prev===32?26:32)
        console.log(newAge)
    }, [currentAge])

    // useEffect(()=>{
    //     alert("renderizando")
    // }, [currentName])

    // toda vez que o comonente é chamado/renderizado ele faz tudo isso de novo
    // console.log("renderizou")

    const calculo = useMemo(()=> {
        console.log("calculou") 
        return 10*23123
    }, [])

    
    return (
        <>
        <div>{calculo}</div>
        <div>{currentName}</div>
        <div>{currentAge}</div>
        <button onClick={handleChangeName}>alt nome</button>
        <button onClick={handleChangeAge}>alt idade</button>
        </>
    )
}
