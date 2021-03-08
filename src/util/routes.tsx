import IRoute from "../interfaces/routes";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import Step4 from "../components/step4";
import Result from "../components/result";

//Any time you need to create a new route you add it here so all route info is store in one spot
const Routes: IRoute[] = [
  {
    path: "/",
    name: "Step1",
    component: Step1,
    exact: true,
  },
  {
    path: "/step2",
    name: "Step2",
    component: Step2,
    exact: false,
  },
  {
    path: "/step3",
    name: "Step3",
    component: Step3,
    exact: false,
  },
  {
    path: "/step4",
    name: "Step4",
    component: Step4,
    exact: false,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
    exact: false,
  },
];

export default Routes;
