export interface RetroachievementsUserProfile {
  contribCount: number;
  contribYield: number;
  id: number;
  lastGameId: number;
  memberSince: Date;
  motto: string;
  permissions: number;
  richPresenceMsg: string;
  totalPoints: number;
  totalSoftcorePoints: number;
  totalTruePoints: number;
  ulid: string;
  untracked: number;
  user: string;
  userPic: string;
  userWallActive: boolean;
}

export interface LastPlayedGame {
  achievementsTotal: number;
  consoleId: number;
  consoleName: string;
  gameId: number;
  imageBoxArt: string;
  imageIcon: string;
  imageIngame: string;
  imageTitle: string;
  lastPlayed: Date;
  numAchieved: number;
  numAchievedHardcore: number;
  numPossibleAchievements: number;
  possibleScore: number;
  scoreAchieved: number;
  scoreAchievedHardcore: number;
  title: string;
}
