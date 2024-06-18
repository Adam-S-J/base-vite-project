import Button from '../components/Button/Button';
import useStore from '../store/store';

const Home = (): JSX.Element => {
  const { isLoading, setLoading } = useStore((state) => state);

  return (
    <>
      <div className="flex flex-col">
        <Button onClick={() => setLoading(!isLoading)}>Store Test Home</Button>
        <p>{isLoading.toString()}...</p>
      </div>
    </>
  );
};

export default Home;
