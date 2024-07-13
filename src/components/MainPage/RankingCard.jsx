import React from 'react';
import Card from './Card';
import useUserStore from '../../store/userStore';
import { quddies } from '../../constants/QuddyList';
import happyQuddy from '@assets/happyQuddy.svg'; // 기본 이미지 import

const RankingCard = () => {
  const userInfo = useUserStore((state) => ({
    diaryEmotion: state.diaryEmotion,
    maxEmotionNum: state.maxEmotionNum,
  }));
  const { diaryEmotion, maxEmotionNum } = userInfo;

  const quddy = quddies.find((quddy) => quddy.emotion === diaryEmotion);

  const quddyImgSrc = quddy ? quddy.imgSrc : happyQuddy;
  const quddyAlt = quddy ? quddy.emotion : 'happy';

  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center ">
          <h1 className="text-3xl font-bold">1위 쿼디</h1>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          {maxEmotionNum
            ? '현재 1순위 감정 쿼디예요.'
            : '일기를 작성하고 랭킹을 확인해보세요 !'}
        </div>

        <div className="my-12 ml-8">
          <img
            src={quddyImgSrc}
            alt={quddyAlt}
            className="w-[193px] h-[204px]"
          />
        </div>

        <div className="flex justify-end mr-6">
          <h1 className="text-[40px] font-medium">{maxEmotionNum} 회</h1>
        </div>
      </div>
    </Card>
  );
};

export default RankingCard;
