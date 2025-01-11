import teamImg from "./images/teamImg.png"

export const Team = () => {
    return(
        <div className="text-slate-700 bg-white p-6 my-4 rounded-xl">

            <h2 className="text-2xl text-black font-bold">Team</h2>
            <p className="font-medium pr-4 pt-4">Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet ut labore et dolore magna aliqua.Lorem ipsum</p>

            <div className="flex flex-col md:flex-row gap-2 bg-blue-100 p-4 my-4 mx-2 rounded-xl items-center ">
                <div className="w-3/5 px-[10%] md:px-0">
                 <img className="h-24 md:mx-2 rounded-lg" alt="teamImg" src={teamImg}></img>
                 <p><strong>John Smith</strong></p>
                 <p className="text-xs">Designation here</p>
                </div>
                <p className="text-left px-2">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 bg-blue-100 p-4 my-4 mx-2 rounded-xl items-center ">
                <div className="w-3/5 px-[10%] md:px-0">
                 <img className="h-24 md:mx-2 rounded-lg" alt="teamImg" src={teamImg}></img>
                 <p><strong>John Smith</strong></p>
                 <p className="text-xs">Designation here</p>
                </div>
                <p className="text-left px-2">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 bg-blue-100 p-4 my-4 mx-2 rounded-xl items-center ">
                <div className="w-3/5 px-[10%] md:px-0">
                 <img className="h-24 md:mx-2 rounded-lg" alt="teamImg" src={teamImg}></img>
                 <p><strong>John Smith</strong></p>
                 <p className="text-xs">Designation here</p>
                </div>
                <p className="text-left px-2">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
            </div>
        </div>
    )
}
