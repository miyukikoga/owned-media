import { BsPersonCircle } from "react-icons/bs";
import { AppLink } from "@/components/atoms/AppLink";

type Props = {};

export const HeaderMenu = ({}: Props): JSX.Element => {
  return (
    <div>
      <AppLink href="/profile">
        <BsPersonCircle color="grey" size="2em" />
      </AppLink>
    </div>
  );
};
