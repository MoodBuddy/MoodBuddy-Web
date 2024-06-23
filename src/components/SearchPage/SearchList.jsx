import { diaryData } from '../../mocks/mockData';
import { weatherList } from '../../constants/WeatherList';

const SearchList = () => {
  return (
    <div className="bg-[#F7F3EF] w-[1080px] h-screen rounded-[36px] p-6 my-10">
      <div className="h-full overflow-y-scroll custom-scrollbar">
        {diaryData.map((item) => (
          <div key={item.id}>
            <div className="flex p-4 items-center justify-between">
              <div className="flex flex-col space-y-3">
                <p className="text-zinc-400 text-xl">{item.date}</p>
                <h1 className="font-meetme text-3xl font-bold mb-2">
                  {item.title}
                </h1>
                <p className="text-zinc-400 text-lg text-ellipsis w-[700px] truncate">
                  {item.content}
                </p>
              </div>

              {item.image ? (
                <div className="rounded-full border overflow-hidden">
                  <img
                    src={item.image}
                    alt="Diary Image"
                    className="w-[106px] h-[106px] object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-full border border-[#B98D6C] p-5">
                  <img
                    src={weatherList[item.weather]}
                    alt={item.weather}
                    className="w-16 h-16"
                  />
                </div>
              )}
            </div>

            <div className="h-[1px] my-3 w-full bg-stone-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
