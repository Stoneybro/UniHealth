
const page = () => {



return(
  <div className="flex w-full gap-8 ">
    <div className="bg-white  h-full p-4 flex flex-col gap-4 flex-[0.65]">
      <div className="text-2xl">Medical Record</div>
      <div className="flex gap-2">
        <button className="text-white border border-[#97A3B0] rounded-full py-1 px-4 bg-[#3263CF]">General</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">prescription</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Vaccination</button>
        <button className="text-[#97A3B0] border border-[#97A3B0] rounded-full py-1 px-4">Sugery</button>
      </div>

      <div className=" flex flex-col gap-4">
        <div className="text-xl font-medium">Diagnosis</div>
        <div className="flex flex-wrap gap-4">
        <div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[45%] border-[#97A3B030] px-3 py-2">
          <div className="flex justify-between">
            <div className="w-5 h-3 rounded-full bg-orange-400"></div>
            <div className=" text-sm">14.12.2023</div>
          </div>
          <div className="font-semibold">Anaphylactic Reaction</div>
        </div>
        <div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[45%] border-[#97A3B030] px-3 py-2">
          <div className="flex justify-between">
            <div className="w-5 h-3 rounded-full bg-orange-400"></div>
            <div className=" text-sm">14.12.2023</div>
          </div>
          <div className="font-semibold">Anaphylactic Reaction</div>
        </div>
        <div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[45%] border-[#97A3B030] px-3 py-2">
          <div className="flex justify-between">
            <div className="w-5 h-3 rounded-full bg-orange-400"></div>
            <div className=" text-sm">14.12.2023</div>
          </div>
          <div className="font-semibold">Anaphylactic Reaction</div>
        </div>
        <div className="bg-[#FCFDFF] border rounded-md min-h-[5rem] flex flex-col justify-start w-[45%] border-[#97A3B030] px-3 py-2">
          <div className="flex justify-between">
            <div className="w-5 h-3 rounded-full bg-orange-400"></div>
            <div className=" text-sm">14.12.2023</div>
          </div>
          <div className="font-semibold">Anaphylactic Reaction</div>
        </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">Medication</div>
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
            <div className="flex flex-col  gap-4 bg-[#FCFDFF] border rounded-md w-[23%] border-[#97A3B030] px-3 py-2">
              <div className="font-semibold text-lg">Atenolol</div>
              <div className="text-[#97A3B0]">200mg oral tablet</div>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-white   h-full flex-[0.35]  py-4">
      <div className="flex flex-col gap-4">


        <div className=" text-2xl px-4">
        Patient Information
        </div>


        <div className="bg-[#EBF1F8] w-full px-4 py-4">
          <div className="text-[#808080]">DID</div>
          <div className="text-lg">8WG....2983e29</div>
        </div>



        <div className="flex w-full justify-between  px-4">

          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Date of birth</div>
              <div className="font-semibold">June 27th, 1989 (34.y.o.)</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Gender</div>
              <div className="font-semibold">M</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Height</div>
              <div className="font-semibold">172 cm</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Weight</div>
              <div className="font-semibold">86 kg</div>
            </div>
            <div className="">
              <div className="text-[#808080]">BMI</div>
              <div className="font-semibold">30</div>
            </div>
          </div>


          <div className="flex flex-1 flex-col">
            <div className="">
              <div className="text-[#808080]">Phone number</div>
              <div className="font-semibold">273-2738-438</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Email</div>
              <div className="font-semibold">jshdm@gmail.com</div>
            </div>
            <div className="">
              <div className="text-[#808080]">Address</div>
              <div className="font-semibold">89, kella way, Ikeja, Lagos, Nigeria</div>
            </div>
          </div>


        </div>


      </div>
    </div>
  </div>
)

}

export default page

