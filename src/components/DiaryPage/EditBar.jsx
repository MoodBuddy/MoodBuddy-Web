import Button from '../common/button/Button';

const EditBar = () => {
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
      >
        <p className="px-6">삭제</p>
      </Button>
    </div>
  );
};

export default EditBar;
