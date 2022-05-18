import { Obj } from "../components/app/Obj";
import { useTime } from "../contexts/Time";
import { useSimpleHarmonicMotion } from "../hooks/useSimpleHarmonicMotion";

const SimpleHarmonicMotion = () => {
  const [t] = useTime();
  const [x] = useSimpleHarmonicMotion(2 * Math.PI, 200, 0, t);

  return (
    <div className="absolute h-1/2 w-1/2 inset-0 m-auto">
      <Obj width={10} height={10} shape="circle" x={x} className="bg-black" />
    </div>
  );
};

export default SimpleHarmonicMotion;
