type props = {
  name: string;
  age: number;
};
const SampleComponent = ({ name, age }: props) => {
  return (
    <div>
      {name} {age}
    </div>
  );
};

export default SampleComponent;
