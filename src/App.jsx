import data from "../data.json";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl">
            <div className="bg-[#4534f2] text-white px-12 py-5 grid grid-cols-1 justify-center items-center rounded-2xl text-center">
                <p className="text-gray-300 pb-8 font-semibold">Your Result</p>
                <div className="bg-[#462fe2] rounded-full grid grid-cols-1 justify-center items-center div-rounded">
                    <p className="text-[40px] font-bold">76</p>
                    <p className="text-gray-400 text-[12px] font-semibold">of 100</p>
                </div>
                <p className="mt-3 text-[22px] font-semibold">Great</p>
                <p className="text-gray-300 text-[12px] font-semibold mt-1">
                    You scored higher than 65% of
                </p>
                <p className="text-gray-300 text-[12px] font-semibold">
                    the people who have taken
                </p>
                <p className="text-gray-300 text-[12px] font-semibold">
                    these tests.
                </p>
            </div>
            <div className="px-5">
                <p className="pt-4 font-bold text-[18px]">Summary</p>
                {data.length > 0 && data.map((elm) => {
                    var background = "";
                    var color = "";

                    switch (elm.category) {
                        case "Reaction":
                            background = "bg-[#fff6f7]";
                            color = "hsl(0, 100%, 67%)";
                            break;
                        case "Memory":
                            background = "bg-[#fffaf4]";
                            color = "hsl(39, 100%, 56%)";
                            break;
                        case "Verbal":
                            background = "bg-[#f2fdf9]";
                            color = "hsl(166, 100%, 37%)";
                            break;
                        case "Visual":
                            background = "bg-[#f4f4fe]";
                            color = "hsl(234, 85%, 45%)";
                            break;
                        default:
                            break;
                    }

                    return (
                        <Card
                            key={elm.category}
                            category={elm.category}
                            background={background}
                            color={color}
                            icon={elm.icon}
                            score={elm.score}
                        />
                    );
                })}
                <button className="bg-[#303b59] text-[14px] mt-5 mb-8 w-full text-center text-white p-2 rounded-2xl cursor-pointer">
                    Continue
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
