
import DashCard from "../components/dashboard/DashCard";

const page = () => {
  return (
    <div className="bg-[#141414] min-h-[100vh] text-white">
      <h1 className="text-[45px] text-center font-bold">My Quiz</h1>
        <div className="p-4 grid grid-col-2 gap-4 lg:grid-cols-5 ">
      {/* Card 1 */}
      
      <DashCard locked={false}/>
      <DashCard/>
      <DashCard/>
      <DashCard/>
      <DashCard/>
    </div>
    </div>
    
  );
};

export default page;
