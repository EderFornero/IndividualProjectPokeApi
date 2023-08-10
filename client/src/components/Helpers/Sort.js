export const sortOptions = {
  nameAsc: (a, b) => a.name.localeCompare(b.name),
  nameDes: (a, b) => b.name.localeCompare(a.name),
  attackDes: (a, b) => a.attack - b.attack,
  attackAsc: (a, b) => b.attack - a.attack
};


