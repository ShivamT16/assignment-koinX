import token from "./images/tokenism.png"

export const Tokenomics = () => {
    return(
        <div className="text-slate-600 bg-white p-6 my-4 rounded-xl font-medium">
            <h2 className="text-2xl text-black font-bold">Tokenomics</h2>
            <h3 className="text-lg font-bold text-black py-3">Initial Distribution</h3>
            <img className="w-[40%] py-2" alt="token img" src={token} ></img>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vel</p>
        </div>
    )
}