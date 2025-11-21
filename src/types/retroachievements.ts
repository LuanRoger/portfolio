export interface RetroachievementsUserProfile {
  user: string;
  ulid: string;
  userPic: string;
  memberSince: Date;
  richPresenceMsg: string;
  lastGameId: number;
  contribCount: number;
  contribYield: number;
  totalPoints: number;
  totalSoftcorePoints: number;
  totalTruePoints: number;
  permissions: number;
  untracked: number;
  id: number;
  userWallActive: boolean;
  motto: string;
}

export interface LastPlayedGame {
  gameId: number;
  consoleId: number;
  consoleName: string;
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
