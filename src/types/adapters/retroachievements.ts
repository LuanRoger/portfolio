import {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "../retroachievements";

export function adaptRetroachievementsUserProfileResponseToUserProfile(
  response: any,
  retroachievementsBaseUrl: string,
): RetroachievementsUserProfile {
  return {
    user: response.User,
    ulid: response.ULID,
    userPic: `${retroachievementsBaseUrl}${response.UserPic}`,
    memberSince: new Date(response.MemberSince + " UTC"),
    richPresenceMsg: response.RichPresenceMsg,
    lastGameId: response.LastGameID,
    contribCount: response.ContribCount,
    contribYield: response.ContribYield,
    totalPoints: response.TotalPoints,
    totalSoftcorePoints: response.TotalSoftcorePoints,
    totalTruePoints: response.TotalTruePoints,
    permissions: response.Permissions,
    untracked: response.Untracked,
    id: response.ID,
    userWallActive: response.UserWallActive,
    motto: response.Motto,
  };
}

export function adaptLastPlayedGameResponseToLastPlayedGame(
  response: any,
  retroachievementsBaseUrl: string,
): LastPlayedGame {
  return {
    gameId: response.GameID,
    consoleId: response.ConsoleID,
    consoleName: response.ConsoleName,
    title: response.Title,
    imageIcon: `${retroachievementsBaseUrl}${response.ImageIcon}`,
    imageTitle: `${retroachievementsBaseUrl}${response.ImageTitle}`,
    imageIngame: `${retroachievementsBaseUrl}${response.ImageIngame}`,
    imageBoxArt: `${retroachievementsBaseUrl}${response.ImageBoxArt}`,
    lastPlayed: new Date(response.LastPlayed + " UTC"),
    achievementsTotal: response.AchievementsTotal,
    numPossibleAchievements: response.NumPossibleAchievements,
    possibleScore: response.PossibleScore,
    numAchieved: response.NumAchieved,
    scoreAchieved: response.ScoreAchieved,
    numAchievedHardcore: response.NumAchievedHardcore,
    scoreAchievedHardcore: response.ScoreAchievedHardcore,
  };
}
