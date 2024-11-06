import { AppLink } from "@/app/components/elements/AppLink";

type Props = {
  pathList: { name: string; href: string }[];
};

export const TopicPath = ({ pathList }: Props) => {
  return (
    <>
      <div className="my-1 mx-5">
        {pathList.map((path, index) => {
          return (
            <span key={index}>
              {index !== 0 && `  ＞  `}
              <AppLink href={path.href} key={index}>
                {path.name}
              </AppLink>
            </span>
          );
        })}
      </div>
      <hr className="border-gray-500 border-1 my-1" />
    </>
  );
};
