import Button from '../common/button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDiary } from '../../apis/diary';
import { useNavigate } from 'react-router-dom';

const EditBar = ({ diaryId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  return (
    <div className="flex justify-end gap-4 mt-8 mb-4">
      <Button
        color="lightBeige"
        className="border-black rounded-[10px] text-xl"
      >
        북마크하기
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
