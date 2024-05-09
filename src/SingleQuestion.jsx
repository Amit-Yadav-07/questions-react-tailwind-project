import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


let SingleQuestion = ({ question }) => {

    let [showInfo, setShowInfo] = useState(false);

    let { title, info } = question;

    return (
        <section className="shadow-lg bg-slate-200 my-5">
            <div className=" h-[auto] py-5 px-3 flex items-center justify-between">
                <h2 className="text-2xl pl-2">{title}</h2>
                <button type="button" className=" text-2xl bg-blue-400 w-[30px] h-[30px] rounded-[50%] text-white flex justify-center items-center" onClick={() => { setShowInfo(!showInfo) }}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </div>
            {showInfo && <p className="text-[1.2rem] p-3">{info}</p>}
        </section>

    )
}


export default SingleQuestion;