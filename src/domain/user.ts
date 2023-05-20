export type UserName = String;
export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

export function hasAllergy(user: User, ingredient: Ingredient) {
  return user.allergies.includes(ingredient);
}

export function hasPreference(user: User, ingredient: Ingredient) {
  return user.preferences.includes(ingredient);
}
