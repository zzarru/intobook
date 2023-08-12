import React from 'react';
import { MyResponsiveBar } from './';


const WeeklyStatistic = (weeklyData) => {
  
  const day = ['월', '화', '수', '목', '금', '토', '일']
  const lastWeek = weeklyData?.lastWeek
  const thisWeek = weeklyData?.thisWeek
  
  const data = [];

  if (lastWeek && thisWeek) {
    for (let i = 0; i < day.length; i++) {
      const item = {
        day: day[i],
        lastweek: lastWeek[i],
        thisweek: thisWeek[i]
      };
      data.push(item);
    }
  };

  return (
    <div style={{height: '300px', width:'320px'}}>
      <p>나를 이겨라~~! 주간 그래프</p>
      <MyResponsiveBar data={data} />
    </div>
  );
};

export default WeeklyStatistic;
