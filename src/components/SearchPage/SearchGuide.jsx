import halfHappyQuddy from '@assets/halfHappyQuddy.svg';

const SearchGuide = () => {
  return (
    <div className="space-y-6 relative z-0">
      <h1 className="font-meetme text-6xl">
        일기를 통해 추억회상을 해보세요 !
      </h1>
      <div className="relative">
        <img
          src={halfHappyQuddy}
          alt="halfHappyQuddy"
          className="w-[600px] h-[425px] transform translate-y-8"
        />
      </div>
    </div>
  );
};

export default SearchGuide;
