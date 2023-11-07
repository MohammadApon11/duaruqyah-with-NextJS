import SideNave from "@/components/sideNav/SideNave";
import Image from "next/image";

const Home = () => {
  return (
    <div className="z-0 lg:fixed lg:inset-x-0 xl:fixed xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:fixed 2xl:inset-x-0 3xl:p-10 3xl:pb-0 3xl:fixed 3xl:inset-x-0">
      <div className="relative grid gap-6 sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px]">
        <SideNave />
      </div>
    </div>
  );
};

export default Home;
