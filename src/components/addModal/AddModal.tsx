import { useRef } from "react"

const AddModal = ( {set} ) => {

    console.log(set);
    

    const prikaz = useRef()
    const otchet = useRef()

    const prikazClick = () =>{
        prikaz.current.click()
    }

    const otchetClick = () =>{
        otchet.current.click()
    }

    const cancelHandle = () =>{
        set()
    }

  return (
    <div className="top-0 left-0 bg-black/[.4] w-[100vw] h-[100vh] fixed flex justify-center items-center" onClick={()=>set()}>
    <div className="border border-[2px] border-[black] w-[350px] m-auto flex flex-col p-[20px] bg-white rounded-[20px]" onClick={(e)=>e.stopPropagation()} >
        <input type="text" placeholder="Командировка" />
        <label htmlFor="">Тип командировки:</label>
        <select name="" id="">
            <option value="">Служебная</option>
            <option value="">Приглвссительная</option>
        </select>
        <label htmlFor="">Вид командировки:</label>
        <select name="" id="">
            <option value="">Внутренняя</option>
            <option value="">Внешняя</option>
        </select>
        <input type="text" placeholder="Страна командировки" />
        <div className="flex justify-between">
            <div>
                <label htmlFor="dateStart" className="block">Дата начала</label>
                <input type="date" name="dateStart"/>
            </div>
            <div>
                <label htmlFor="endDate" className="block">Дата окончания</label>
                <input type="date" name="endDate"/>
            </div>
        </div>
        <input type="text" placeholder="ФИО сотрудника" className="p-[5px]" />
        <input type="text" placeholder="№ и дата приказа" />
        <button onClick={prikazClick}>Документ приказа</button>
        <input 
            ref={prikaz}
            type="file" 
            placeholder="Документ приказа"
            className="opacity-0 w-0 h-0"
        />
        <button onClick={otchetClick}>Отчет командировки</button>
        <input 
            ref={otchet}
            type="file"
            placeholder="Отчет командировки"
            className="opacity-0 w-0 h-0"
        />
        <div className="flex justify-around">
            <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]" onClick={cancelHandle}>Отменить</button>
            <button className="border border-[2px] p-[5px] rounded-[10px] hover:text-[white] hover:bg-[blue]">Добавить</button>
        </div>
    </div>
    </div>
  )
}

export default AddModal