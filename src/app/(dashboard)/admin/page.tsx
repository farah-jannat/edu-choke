import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className=" flex flex-col md:flex-row p-4">
      {/* left  */}
      <div className="lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex gap-5 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>
        {/* middlecharts */}
        <div className="flex flex-col gap-4 h-screen lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:2/3 h-[450px] ">
          <AttendanceChart/>
          </div>
        </div>
        {/* bottom charts*/}

      </div>

      {/* right  */}
      <div className="lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
