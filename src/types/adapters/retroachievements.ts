import { LastPlayedGame } from "../retroachievements";

export function adaptLastPlayedGameResponseToLastPlayedGame(
  response: any,
  retroachievementsBaseUrl: string
): LastPlayedGame {
  console.log({ response });

  return {
    gameId: response.GameID,
    consoleId: response.ConsoleID,
    title: response.Title,
    imageIcon: `${retroachievementsBaseUrl}${response.ImageIcon}`,
    imageTitle: `${retroachievementsBaseUrl}${response.ImageTitle}`,
    imageIngame: `${retroachievementsBaseUrl}${response.ImageIngame}`,
    imageBoxArt: `${retroachievementsBaseUrl}${response.ImageBoxArt}`,
    lastPlayed: new Date(response.LastPlayed + ' UTC'),
    achievementsTotal: response.AchievementsTotal,
    numPossibleAchievements: response.NumPossibleAchievements,
    possibleScore: response.PossibleScore,
    numAchieved: response.NumAchieved,
    scoreAchieved: response.ScoreAchieved,
    numAchievedHardcore: response.NumAchievedHardcore,
    scoreAchievedHardcore: response.ScoreAchievedHardcore,
  };
}
