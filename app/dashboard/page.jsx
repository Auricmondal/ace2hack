
import DashCard from "../components/dashboard/DashCard";

const page = () => {
  return (
    <div className="p-4 grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <DashCard locked={false}/>
      <DashCard/>
      <DashCard/>
      <DashCard/>
      <DashCard/>
    </div>
  );
};

export default page;
