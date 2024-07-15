import spinner from '@assets/spinner.svg';

const ModalLoadingSpinner = () => (
  <div className="flex flex-col h-screen items-center justify-center gap-10">
    <p className="font-meetme text-3xl">로딩중이에요 . . .</p>
    <img src={spinner} alt="spinner" className="animate-spin w-10" />
  </div>
);

export default ModalLoadingSpinner;
