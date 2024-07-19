import { useEffect, useState } from 'react';
import Button from '../../common/button/Button';
import { addMonths, format } from 'date-fns';
import {
  getMonthStatic,
  postShortWordToNextMonth,
  updateShortWordToNextMonth,
} from '../../../apis/user';

const MemoSection = ({ currentDate, shortWord, setShortWord }) => {
  const [text, setText] = useState('');
  const [nextMonthOnly, setNextMonthOnly] = useState('');
  const [isFirst, setIsFirst] = useState(false);
  const [existingComment, setExistingComment] = useState('');

  const maxLength = 150;

  const date = new Date(currentDate).toISOString().slice(0, -14);
  const nextMonthDate = addMonths(currentDate, 1);
  const formattedNextMonthonly = format(nextMonthDate, 'yyyy-MM');
  useEffect(() => {
    const isFirstComment = async () => {
      try {
        const res = await getMonthStatic(formattedNextMonthonly);

        console.log(res.error);
        if (res.error === 'Bad Request') {
        } else {
          isFirst(true);
        }
        //     const existing = res.monthComment;
        //     if (existing) {
        //       setText(existing);
        //       console.log(existingComment);
        //       setExistingComment(existing);
        //       console.log(existingComment);
        //     }
        //   } else {
        //     setIsFirst(true);
        //     setText('');
        //   }
        // } catch (error) {
        //   throw new Error(
        //     '다음 달 한 마디가 있는지 여부 불러오기에 실패하였습니다.',
        //   );
      } catch (error) {
        throw new Error(
          '다음 달 한 마디가 있는지 여부 불러오기에 실패하였습니다.',
        );
      }
    };
    isFirstComment();
  }, [currentDate]);

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
    setNextMonthOnly(formattedNextMonthonly);
    setText('');
    console.log(formattedNextMonthonly);
  }, [currentDate]);

  const saveComment = async () => {
    console.log(existingComment);
    if (!existingComment) {
      console.log(existingComment);
      try {
        const comment = {
          chooseMonth: nextMonthOnly,
          monthComment: text,
        };
        const res = await postShortWordToNextMonth(comment);
        console.log(res);
        alert('저장되었습니다!');
      } catch (error) {
        throw new Error('데이터 불러오기에 실패하였습니다.');
      }
    } else {
      try {
        console.log(existingComment);
        const comment = {
          chooseMonth: nextMonthOnly,
          monthComment: text,
        };
        const res = await updateShortWordToNextMonth(comment);
        console.log(res);
        alert('저장되었습니다!');
      } catch (error) {
        throw new Error('데이터 불러오기에 실패하였습니다.');
      }
    }
  };

  return (
    <div className="px-8 flex flex-col items-center mb-10">
      <h1 className="text-2xl font-semibold self-start mb-8 ml-3">
        다음 달 나에게 짧은 한 마디
      </h1>

      {isFirst ? (
        <div className="relative w-[1000px]">
          <div className="w-full h-[180px] text-lg p-4 bg-white rounded-2xl border-[1px] border-black resize-none"></div>
        </div>
      ) : (
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
      )}

      {!isFirst && (
        <Button onClick={saveComment} className="self-end mr-2 my-5">
          <p className="text-lg px-16 font-normal">저장</p>
        </Button>
      )}
    </div>
  );
};

export default MemoSection;
