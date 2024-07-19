import { useEffect, useState } from 'react';
import Button from '../../common/button/Button';
import { addMonths, format } from 'date-fns';
import { getMonthStatic, postShortWordToNextMonth } from '../../../apis/user';

const MemoSection = ({ currentDate, shortWord, setShortWord }) => {
  const [text, setText] = useState('');
  const [nextMonth, setNextMonth] = useState('');
  const [nextMonthOnly, setNextMonthOnly] = useState('');

  const maxLength = 150;
  const [comment, setComment] = useState('');
  const [lastComment, setLastComment] = useState('');

  const date = new Date(currentDate).toISOString().slice(0, -14);

  // useEffect(() => {
  //   const getComment = async () => {
  //     try {
  //       const res = await getMonthStatic(date);
  //       const monthComment = res.monthComment;
  //       setLastComment(monthComment);
  //     } catch (error) {
  //       throw new Error('데이터 불러오기에 실패하였습니다.');
  //     }
  //   };
  //   getComment();
  // }, []);
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await getMonthStatic(date);
        const monthComment = res.monthComment;
        setShortWord(monthComment);
      } catch (error) {
        throw new Error('데이터 불러오기에 실패하였습니다.');
      }
    };
    getComment();
  }, [currentDate]);

  useEffect(() => {
    const nextMonthDate = addMonths(currentDate, 1);
    const formattedNextMonth = format(nextMonthDate, 'yyyy-MM-dd');
    setNextMonth(formattedNextMonth);
    const formattedNextMonthonly = format(nextMonthDate, 'yyyy-MM');
    setNextMonthOnly(formattedNextMonthonly);
    console.log(formattedNextMonthonly);
  }, [currentDate]);

  const saveComment = async () => {
    try {
      const comment = {
        chooseMonth: nextMonthOnly,
        monthComment: text,
      };
      const res = await postShortWordToNextMonth(comment);
      console.log(res);
    } catch (error) {
      throw new Error('데이터 불러오기에 실패하였습니다.');
    }
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
          onChange={(e) => setText(e.target.value)}
          className="w-full h-[180px] text-lg p-4 bg-white rounded-2xl border-[1px] border-black resize-none"
        />
        <div className="absolute bottom-4 right-6 text-neutral-400">{`${text.length} / ${maxLength}`}</div>
      </div>
      <Button onClick={saveComment} className="self-end mr-2 my-5">
        <p className="text-lg px-16 font-normal">저장</p>
      </Button>
    </div>
  );
};

export default MemoSection;
