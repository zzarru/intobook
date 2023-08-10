import axiosInstance from './axiosConfig';

// 책별 통계 가져오기
export const getUserBookStatistics = async (userBookPk) => {
  try {
    const res = await axiosInstance.get(`/statistics/userBook/${userBookPk}`);
    return res.data;
  } catch (err) {
    return err
  }
};

// 유저 통계 가져오기
export const getUserStatistics = async () => {
  try {
    const res = await axiosInstance.get(`/statistics/user`);
    return res.data;
  } catch (err) {
    return err
  }
};

// 주간 통계 가져오기
// export const getWeeklyStatistics = async () => {
//   try {
//     const res = await axiosInstance.get(`/statistics/week`, {
//       params: {
//         weekCnt: weekCnt
//       }
//     });
//     return res.data;
//   } catch (err) {
//     return err
//   }
// };