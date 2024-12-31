import Header from "@/components/Header";

export default function Service() {
  return (
    <div>
      <Header />

      <div className="w-full">
        <div className="flex mx-auto xl:w-[1200px]">
          <div className="w-full">
            <div className="w-full bg-[#222] bg-custom-gradient bg-opacity-100 h-60 flex items-center justify-center flex-col text-white text-center space-y-2 rounded-2xl mt-36">
              <h1 className="text-4xl font-bold">Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
