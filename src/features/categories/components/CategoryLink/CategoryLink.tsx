import { AppLink } from "@/app/components/elements/AppLink";
import { Text } from "@/app/components/elements/Text";
import { Category } from "@/features/categories/types/categoryTypes";

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
