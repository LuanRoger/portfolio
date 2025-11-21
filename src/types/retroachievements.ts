export interface LastPlayedGame {
  gameId: number;
  consoleId: number;
  title: string;
  imageIcon: string;
  imageTitle: string;
  imageIngame: string;
  imageBoxArt: string;
  lastPlayed: Date;
  achievementsTotal: number;
  numPossibleAchievements: number;
  possibleScore: number;
  numAchieved: number;
  scoreAchieved: number;
  numAchievedHardcore: number;
  scoreAchievedHardcore: number;
}
