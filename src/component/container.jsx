


export default function Container(props) {
    // console.log( Object.keys(props.data).length)
    return(
        <div className="bg-[hsl(217,19%,24%)] flex flex-col max-w-[510px] min-w-[320px] w-[90%] h-fit px-[30px] justify-center items-center py-[45px] relative rounded-2xl">
            <div>
                <p className=" text-[1.6rem] text-[hsl(150,100%,66%)] mb-[20px]">
                    #ADVICE { props.data.slip.id }
                </p>
            </div>
            <div>
                <h1 className=" text-[2.8rem] font-extrabold text-[hsl(193,38%,86%)] w-fit text-center mb-[20px]">
                    {props.data.slip.advice }
                </h1>
            </div>
            <div className=" mb-[20px]">
                <img src="./images/pattern-divider-mobile.svg" alt="" />
            </div>
            <button className=" bg-[hsl(150,100%,66%)] w-[60px] h-[60px] rounded-full flex justify-center items-center absolute top-[91%] md:top-[89%]" onClick={() => props.func()}>
                <img src="./images/icon-dice.svg" alt="" />
            </button>
        </div>
    )
}