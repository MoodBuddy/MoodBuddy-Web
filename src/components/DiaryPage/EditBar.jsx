import Button from '../common/button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDiary, getFindAllByEmotion, getFindOne } from '../../apis/diary';
import { useNavigate, useParams } from 'react-router-dom';
import { bookMarkToggle } from '../../apis/bookMark';
import { useEffect, useState } from 'react';

const EditBar = ({ diaryId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isBookMark, setIsBookMark] = useState(false);

  const getDiaryId = async (id) => {
    if (id) {
      const res = await getFindOne(id);
      return res;
    }
  };
  useEffect(() => {
    const diaryId = async () => {
      try {
        const res = await getDiaryId(id);
        console.log(res);
        if (res) {
          console.log(res.diaryBookMarkCheck);
          setIsBookMark(res.diaryBookMarkCheck);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    if (id) {
      diaryId();
    }
  }, [id]);
  const mutation = useMutation({
    mutationFn: (id) => deleteDiary(id),
    onSuccess: () => {
      queryClient.invalidateQueries('diaries');
      navigate('/searchList');
    },
  });

  const handleDelete = () => {
    if (window.confirm('정말로 이 일기를 삭제하시겠습니까?')) {
      mutation.mutate(diaryId);
    }
  };
  const handleBookMark = async () => {
    try {
      const response = await bookMarkToggle(id);

      if (response) {
        console.log(
          `${isBookMark ? `${id} 번째 일기 북마크 성공` : `${id} 번째 일기 북마크 취소`}`,
        );
        setIsBookMark(!isBookMark);
      } else {
        console.error('데이터 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex justify-end gap-4 mt-8 mb-4">
      <Button
        onClick={handleBookMark}
        color="lightBeige"
        className="border-black rounded-[10px] text-xl"
      >
        {isBookMark ? '북마크취소' : '북마크하기'}
      </Button>
      <Button
        color="lightBeige"
        className="border-black rounded-[10px] text-xl"
      >
        <p className="px-6">수정</p>
      </Button>
      <Button
        color="lightBeige"
        className="border-black rounded-[10px] text-xl"
        onClick={handleDelete}
      >
        <p className="px-6">삭제</p>
      </Button>
    </div>
  );
};

export default EditBar;
