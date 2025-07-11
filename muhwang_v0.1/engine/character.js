export function createCharacter(name) {
  return {
    name,
    maxHp: 100,
    hp: 100,
    atk: 10,
    def: 5,
    skills: [],
    relics: []
  };
}
