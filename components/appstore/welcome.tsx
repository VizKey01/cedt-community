import { pageWording } from "@/config/wording";
import { Logo } from "../icons";
import { Button } from "@nextui-org/button";

function AddingButtons() {
    return (
        <Button color="primary" variant="shadow" size="lg" radius="md">
            <p className="text-white">Add Your App</p>
        </Button>  
    )
}

function LogoAndWelcomeMessage() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <div className="flex justify-center m-0 p-0">
        <Logo size={125} />
      </div>
      <span className="flex gap-0 justify-center">
        <h1 className="text-primary">{pageWording.appstore.heroTitle1}&nbsp;</h1>
        <h1 className="text-inherit">{pageWording.appstore.heroTitle2}&nbsp;</h1>
      </span>
      <h3 className="my-8 text-inherit">{pageWording.appstore.subTitles}</h3>
      <AddingButtons />
    </div>
  );
}

export default function Welcomesection() {
  return (
    <>
      <LogoAndWelcomeMessage />
    </>
  );
}
