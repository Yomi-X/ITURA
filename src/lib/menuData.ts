
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: "Coffee" | "Bakery" | "Food";
};

export const menuItems: MenuItem[] = [
  {
    name: "ÌTURA Signature Latte",
    description: "Smooth espresso with silky steamed milk.",                                                                                                                                                                                                                                       
    price: "₦3,500",
    category: "Coffee",
  },
  {
    name: "Honey Cinnamon Flat White",
    description: "A comforting flat white with honey and spice.",
    price: "₦4,000",
    category: "Coffee",
  },
  {
    name: "Butter Croissant",
    description: "A golden, flaky pastry for slow mornings.",
    price: "₦2,500",
    category: "Bakery",
  },
];
