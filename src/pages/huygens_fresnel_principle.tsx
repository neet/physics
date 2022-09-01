import clsx from "clsx";
import type { NextPage } from "next";
import { Provider } from "react-redux";

import { Wave } from "../components/app/Wave";
import { store } from "../features/store";

const HuygensFresnelPrinciple: NextPage = () => {
  return (
    <Provider store={store}>
      <div
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "w-full",
          "h-full",
          "bg-black"
        )}
      >
        <div className={clsx("absolute", "w-0", "h-0")}>
          <Wave waveId="w1" />
        </div>
      </div>
    </Provider>
  );
};

export default HuygensFresnelPrinciple;
