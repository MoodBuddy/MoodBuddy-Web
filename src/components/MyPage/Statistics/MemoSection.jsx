import { useState } from 'react';
import Button from '../../common/button/Button';

const MemoSection = () => {
  const [text, setText] = useState('');
  const maxLength = 150;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="px-8 flex flex-col items-center mb-10">
      <h1 className="text-2xl font-semibold self-start mb-8 ml-3">
        다음 달 나에게 짧은 한 마디
      </h1>
      <div className="relative w-[1000px]">
        <textarea
          type="text"
          maxLength={maxLength}
          value={text}
          onChange={handleChange}
          className="w-full h-[180px] text-lg p-4 bg-white rounded-2xl border-[1px] border-black resize-none"
        />
        <div className="absolute bottom-4 right-6 text-neutral-400">{`${text.length} / ${maxLength}`}</div>
      </div>
      <Button className="self-end mr-2 my-5">
        <p className="text-lg px-16 font-normal">저장</p>
      </Button>
    </div>
  );
};

export default MemoSection;
