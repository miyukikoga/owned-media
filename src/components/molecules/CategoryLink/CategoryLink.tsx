import { AppLink } from "../../atoms/AppLink";
import { Text } from "../../atoms/Text";
import { Category } from "../../../types/categories";

type Props = {
  category: Category;
  handleClick: () => void;
};

export const CategoryLink = ({ category, handleClick }: Props) => {
  return (
    <AppLink href={`/categories/${category.id}`} onClick={handleClick}>
      <Text>{category.name}</Text>
    </AppLink>
  );
};
