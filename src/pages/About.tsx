import Button from '../components/Button/Button';
import useStore from '../store/store';

const About = (): JSX.Element => {
  const { isLoading, setLoading } = useStore((state) => state);

  return (
    <>
      <div className="flex flex-col">
        <Button onClick={() => setLoading(!isLoading)}>Store Test About</Button>
        <p>{isLoading.toString()}...</p>
      </div>
    </>
  );
};

export default About;
