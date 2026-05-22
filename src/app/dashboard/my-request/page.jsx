"use client";

const myRequestPage = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto rounded-xl  bg-[#FBF8F3] ">
        <table className="table w-full  text-white">
          <thead>
            <tr className=" text-[#5C5C5C] text-sm font-semibold">
              <th className=" bg-[#FBF8F3]  text-[#5C5C5C]">Pet Name</th>
              <th className=" bg-[#FBF8F3]  text-[#5C5C5C]">Request Date</th>
              <th className=" bg-[#FBF8F3]  text-[#5C5C5C]">Pickup Date</th>
              <th className=" bg-[#FBF8F3]  text-[#5C5C5C]">Status</th>
              <th className=" bg-[#FBF8F3]  text-[#5C5C5C] text-right">
                <div className="badge badge-soft badge-success">Success</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default myRequestPage;
