import nameCover from '@assets/nameCover.svg';
import sketchBackground from '@assets/sketchBackground.png';
import CountCard from './CountCard';
import ProfileCard from './ProfileCard';
import RankingCard from './RankingCard';

const AnalysisSection = () => {
  return (
    <>
      {/* 상단 여백 색상 */}
      <div className="bg-[#E8DBCF] h-32"></div>

      <div
        className="grid bg-[#E8DBCF] bg-cover bg-center h-[947px] "
        style={{ backgroundImage: `url(${sketchBackground})` }}
      >
        {/* 사용자별 문구 */}
        <div className="flex items-center justify-center mt-40 relative">
          <img src={nameCover} alt="nameCover" className="absolute" />
          <h1 className="z-10 font-meetme text-5xl">
            성나영 님의 하루를 기록해봐요 !
          </h1>
        </div>

        {/* 카드 */}
        <div className="flex gap-4 items-center justify-center mb-20">
          <ProfileCard />
          <CountCard />
          <RankingCard />
        </div>
      </div>
    </>
  );
};

export default AnalysisSection;
