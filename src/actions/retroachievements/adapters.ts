import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";

export function adaptRetroachievementsUserProfileResponseToUserProfile(
  response: any,
  retroachievementsBaseUrl: string
): RetroachievementsUserProfile {
  return {
    contribCount: response.ContribCount,
    contribYield: response.ContribYield,
    id: response.ID,
    lastGameId: response.LastGameID,
    memberSince: new Date(`${response.MemberSince} UTC"`),
    motto: response.Motto,
    permissions: response.Permissions,
    richPresenceMsg: response.RichPresenceMsg,
    totalPoints: response.TotalPoints,
    totalSoftcorePoints: response.TotalSoftcorePoints,
    totalTruePoints: response.TotalTruePoints,
    ulid: response.ULID,
    untracked: response.Untracked,
    user: response.User,
    userPic: `${retroachievementsBaseUrl}${response.UserPic}`,
    userWallActive: response.UserWallActive,
  };
}

export function adaptLastPlayedGameResponseToLastPlayedGame(
  response: any,
  retroachievementsBaseUrl: string
): LastPlayedGame {
  return {
    achievementsTotal: response.AchievementsTotal,
    consoleId: response.ConsoleID,
    consoleName: response.ConsoleName,
    gameId: response.GameID,
    imageBoxArt: `${retroachievementsBaseUrl}${response.ImageBoxArt}`,
    imageIcon: `${retroachievementsBaseUrl}${response.ImageIcon}`,
    imageIngame: `${retroachievementsBaseUrl}${response.ImageIngame}`,
    imageTitle: `${retroachievementsBaseUrl}${response.ImageTitle}`,
    lastPlayed: new Date(`${response.LastPlayed} UTC`),
    numAchieved: response.NumAchieved,
    numAchievedHardcore: response.NumAchievedHardcore,
    numPossibleAchievements: response.NumPossibleAchievements,
    possibleScore: response.PossibleScore,
    scoreAchieved: response.ScoreAchieved,
    scoreAchievedHardcore: response.ScoreAchievedHardcore,
    title: response.Title,
  };
}
