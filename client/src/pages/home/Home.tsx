import { Sidebar } from "@/components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="flex-grow">
        home
      </div>
    </div>
  );
};

export default Home;
