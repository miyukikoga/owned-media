import { ProfileHeader } from "@/features/profile/components/ProfileHeader";
import { ProfileTable } from "@/features/profile/components/ProfileTable";

type Props = {};

export const Profile = ({}: Props) => {
  return (
    <section className="grid place-items-center w-screen">
      <ProfileHeader />
      <ProfileTable />
    </section>
  );
};
