


const Cards1Data = [
    {
      title: "Current Streak",
      icon: "/assets/achievements/fire.png",
      value: "12 days",
    },
    {
      title: "Bank",
      icon: "/assets/achievements/ranking-badge.png",
      value: "Peace Ambassador",
    },
    {
      title: "Achievements",
      icon: "/assets/achievements/achivement.png",
      value: "5/10",
    },
    {
      title: "Next Level",
      icon: "/assets/achievements/level-up.png",
      value: "9",
      additionalInfo: "> 250 points needed",
    },
  ];
  







const StreakAchievement = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] ">
        {Cards1Data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4  gap-4 shadow-sm rounded-[12px] border border-[rgba(217,217,217,0.10)] bg-[#28303F]"
          >
            {/* Top Section: Icon and Title */}
            <div className="flex justify-between flex-row-reverse items-center">
              {/* Icon */}
              <div className="w-10 h-10 lg:w-15 lg:h-10 rounded-full flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-6 h-6 lg:w-9 lg:h-9 object-cover"
                />
              </div>
  
              {/* Title */}
              <h1 className="text-white font-[Readex_Pro] text-[20px] font-bold">
                {item.title}
              </h1>
            </div>
  
            {/* Middle Section: Value and Additional Info */}
            <div className="">
              <div className="flex items-center gap-2 text-[28px] font-[Readex_Pro] font-bold text-white">
                
               <h1>{item.value}</h1> 
                {item.additionalInfo && (
                  <span className="text-[15px] font-semibold">
                    {item.additionalInfo}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default StreakAchievement