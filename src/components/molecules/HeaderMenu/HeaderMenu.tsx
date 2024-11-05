import { BsPersonCircle } from "react-icons/bs";
import { AppLink } from "@/components/atoms/AppLink";

type Props = {};

export const HeaderMenu = ({}: Props) => {
  return (
    <div>
      <AppLink href="/profile">
        <BsPersonCircle size="2em" />
      </AppLink>
    </div>
  );
};
