import { AppLink } from "@/components/atoms/AppLink";
import { profile } from "@/constants/media";

type Props = {};

export const ProfileTable = ({}: Props): JSX.Element => {
  return (
    <table className="w-2/3">
      <thead></thead>
      <tbody>
        <tr className="border">
          <td>
            <div className="ml-2">名前</div>
            <div className="ml-2">{profile.author}</div>
          </td>
        </tr>
        <tr className="border">
          <td>
            <div className="ml-2">GitHub</div>
            <AppLink
              className="ml-2 underline"
              href={profile.githubUrl}
              target="_blank"
            >
              {profile.githubUrl}
            </AppLink>
          </td>
        </tr>
        <tr className="border">
          <td>
            <div className="ml-2">Qiita</div>
            <AppLink
              className="ml-2 underline"
              href={profile.qiitaUrl}
              target="_blank"
            >
              {profile.qiitaUrl}
            </AppLink>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
