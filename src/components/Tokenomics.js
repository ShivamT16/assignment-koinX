import "./tokenomics.css"
import token from "./images/tokenism.png"

export const Tokenomics = () => {
    return(
        <div className="token">
            <h2>Tokenomics</h2>
            <h3>Initial Distribution</h3>
            <img className="token-img" alt="token img" src={token} ></img>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
    )
}