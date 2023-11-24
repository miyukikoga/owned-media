import { ProfileHeader } from "@/components/organisms/ProfileHeader";
import { ProfileTable } from "@/components/organisms/ProfileTable";

type Props = {};

export const Profile = ({}: Props): JSX.Element => {
  return (
    <section className="grid place-items-center w-screen">
      <ProfileHeader />
      <ProfileTable />
    </section>
  );
};
