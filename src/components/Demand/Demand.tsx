
interface DemandBody {
    responsavelPhoto: any;
    demanda: string;
    descricao: string;
    projeto: string;
    status: string;
    prazo: string;
}


const Demand = (props: DemandBody) => {
    return (
        <div className=" group flex flew-row gap-5 border-2 border-solid border-[#1951A070] rounded-xl p-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-[1] hover:bg-bgHouverOrange hover:border-transparent ">

            <div className="basis-1/12 flex justify-center items-center">
                <div className="w-full flex justify-center bg-[#F7F8FA] dark:bg-gray-900 rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <img className="select-none rounded-full w-11" src={props.responsavelPhoto} />
                </div>
            </div>

            <div className=" basis-1/5 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center bg-[#F7F8FA] dark:bg-gray-900  rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <label className="select-none w-full text-sm transition ease-in-out delay-100 group-hover:text-white dark:text-gray-400">{props.demanda}</label>
                </div>
            </div>

            <div className="basis-1/3 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center bg-[#F7F8FA] dark:bg-gray-900 rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <label className="select-none w-full text-sm transition ease-in-out delay-100 group-hover:text-white dark:text-gray-400">
                        {props.descricao.length > 50 ? props.descricao.substring(0, 50) + "..." : props.descricao}
                    </label>
                </div>
            </div>

            <div className=" basis-1/6 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center bg-[#F7F8FA] dark:bg-gray-900 rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <label className="select-none w-full text-sm transition ease-in-out delay-100 group-hover:text-white dark:text-gray-400">{props.projeto}</label>
                </div>
            </div>

            <div className=" basis-1/12 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center bg-[#F7F8FA] dark:bg-gray-900 rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <label className="select-none w-full text-sm transition ease-in-out delay-100 group-hover:text-white dark:text-gray-400">{props.status}</label>
                </div>
            </div>

            <div className="basis-1/12 flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center bg-[#F7F8FA] dark:bg-gray-900 rounded-xl p-2 transition ease-in-out delay-100 group-hover:bg-transparent">
                    <label className="select-none w-full text-sm transition ease-in-out delay-100 group-hover:text-white dark:text-gray-400">{props.prazo}</label>
                </div>
            </div>

        </div>
    )
}
export default Demand