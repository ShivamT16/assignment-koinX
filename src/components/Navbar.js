import koinXlogo from "./images/koinXlogo.png"

export const Navbar = () => {
    return(
        <nav className="flex gap-4 justify-between bg-white px-10 py-2 shadow">
          <img className="h-6 m-4" alt="KoinX-Logo" src={koinXlogo} />

          <div className="hidden md:flex gap-8 items-center font-semibold text-lg">
            <p>Cryto Taxes</p>
            <p>Free Tools</p>
            <p>Resources Centre</p>
            <button className="border bg-blue-600 rounded-xl font-medium text-white px-4 py-1" >Get Started</button>
          </div>

          <button className="text-3xl font-bold md:hidden"> ≡ </button>

        </nav>
    )
}