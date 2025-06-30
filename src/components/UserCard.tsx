import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className=" odd:bg-lamaPurple even:bg-lamaYellow  flex-1  p-4  rounded-2xl min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="bg-white text-[10px] text-green-600 rounded-full px-2 py-1">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h2 className="font-semibold text-2xl my-4">6,564</h2>
      <h2 className="capitalize font-medium text-xs text-gray-500">{type}s</h2>
    </div>
  );
};
export default UserCard;
