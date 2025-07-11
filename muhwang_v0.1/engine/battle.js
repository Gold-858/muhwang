export function startBattle(player, enemy, render) {
  render(`전투 시작! ${player.name} vs ${enemy.name}`);
  while (player.hp > 0 && enemy.hp > 0) {
    enemy.hp -= Math.max(player.atk - 2, 1);
    render(`${player.name}의 공격! ${enemy.name}의 체력: ${enemy.hp}`);
    if (enemy.hp <= 0) break;
    player.hp -= Math.max(enemy.atk - 2, 1);
    render(`${enemy.name}의 반격! ${player.name}의 체력: ${player.hp}`);
  }
  const result = player.hp > 0 ? "승리!" : "패배...";
  render(`전투 종료: ${result}`);
}
