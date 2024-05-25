import { ComingSoon } from "@/components/utils/utils";
import Welcomesection from "@/components/appstore/welcome";
import Store from "@/components/appstore/store";

export default function BlogPage() {
  return (
    <div>
      {/* <h1 className={""}>CEDT Appstore</h1> */}
      <Welcomesection></Welcomesection>
      <Store></Store>
      {/* <ComingSoon /> */}
    </div>
  );
}
