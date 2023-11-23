import { AppLink } from "../../atoms/AppLink";
import { Text } from "../../atoms/Text";
import { Category } from "../../../types/categories";

type Props = {
  category: Category;
};

export const CategoryLink = ({ category }: Props): JSX.Element => {
  return (
    <AppLink href={`/categories/${category.id}`}>
      <Text>{category.name}</Text>
    </AppLink>
  );
};
