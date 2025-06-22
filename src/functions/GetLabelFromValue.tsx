import {
  ethnicities,
  genders,
  roles,
  sectors,
} from "@/components/constants/data";

type Category = "role" | "gender" | "ethnicity" | "sector";

export const getLabelFromValue = (
  value: string,
  category: Category
): string => {
  let list = [];

  switch (category) {
    case "role":
      list = roles;
      break;
    case "gender":
      list = genders;
      break;
    case "ethnicity":
      list = ethnicities;
      break;
    case "sector":
      list = sectors;
      break;
    default:
      return value;
  }

  const foundItem = list.find((item) => item.value === value);
  return foundItem ? foundItem.label : value;
};
