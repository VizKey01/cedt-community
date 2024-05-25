import AddApp from "@/components/appstore/app-add/form";
import WelcomeSection from "@/components/appstore/app-add/welcomesection";
import { ComingSoon } from "@/components/utils/utils";

export default function BlogPage() {
  return (
    <div>
      {/* <h1 className={""}>CEDT Appstore</h1> */}
      <WelcomeSection/>
      <AddApp />
      {/* <ComingSoon /> */}
    </div>
  );
}
