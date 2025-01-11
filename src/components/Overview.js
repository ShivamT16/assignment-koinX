import performance from "./images/performance.png"

export const Overview = () => {
  return (
    <div className="mb-4">
     <div className="flex flex-wrap border-b mx-1 my-3 border-slate-400 justify-between font-medium" > 
      <p className="border-b-2 border-blue-800 pb-1 text-blue-800">Overview</p>
      <p>Fundamentals</p>
      <p>News Insights</p>
      <p>Sentiments</p>
      <p>Team</p>
      <p>Technicals</p>
      <p>Tokenomics</p>
     </div>
      <img className="bg-white p-10 rounded-xl" src={performance} alt="performanceFigure" />
    </div>
    )
}