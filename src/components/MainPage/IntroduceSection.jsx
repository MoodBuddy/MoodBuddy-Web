import mainQuddy from '@assets/mainQuddy.svg';

const IntroduceSection = () => {
  return (
    <div className="flex items-center justify-center bg-[#F4EDE7] text-3xl py-12">
      <div>
        <h1 className="font-meetme text-8xl mb-12">Quddy 쿼디</h1>
        <p className="text-2xl">
          안녕하세요! 저는 쿼디, 호기심 많은 쿼카예요.
          <br /> 자연을 사랑하고 새로운 친구들을 사귀는 걸 좋아해요.
          <br /> 세계를 여행하며 다양한 생물들을 만나고, 경험을 일기에 <br />
          기록하는 게 제 꿈이에요. 저는 항상 긍정적인 마음으로 <br />
          용기와 희망을 전하는 쿼카랍니다!
        </p>
      </div>

      <img src={mainQuddy} alt="mainQuddy" />
    </div>
  );
};
export default IntroduceSection;
