import { AppLink } from "@/components/atoms/AppLink";

type Props = {
  pathList: { name: string; href: string }[];
};

export const TopicPath = ({ pathList }: Props): JSX.Element => {
  return (
    <>
      <div className="my-1 mx-5">
        {pathList.map((path, index) => {
          return (
            <>
              {index !== 0 && `  ＞  `}
              <AppLink href={path.href} key={index}>
                {path.name}
              </AppLink>
            </>
          );
        })}
      </div>
      <hr className="border-gray-500 border-1 my-1" />
    </>
  );
};
