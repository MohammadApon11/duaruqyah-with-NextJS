import Header from "@/components/header/Header";
import MainWrapper from "@/components/mainContent/mainWrapper";
import SideNave from "@/components/sideNav/SideNave";

const Home = () => {
  return (
    <div className="p-10 pb-0 flex gap-[30px] fixed w-[100vw]">
      <SideNave />
      <MainWrapper />
    </div>
  );
};

export default Home;
