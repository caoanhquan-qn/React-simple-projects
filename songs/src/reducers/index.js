import { combineReducers } from "redux";
const songs = [
  { Title: "Bad Habits", Duration: "3:51" },
  { Title: "Beggin", Duration: "3:32" },
  { Title: "Kiss Me More", Duration: "3:29" },
  { Title: "Run", Duration: "2:41" },
  { Title: "Perfect", Duration: "4:40" },
  { Title: "Thinking out loud", Duration: "4:57" },
];
export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};
export const listOfSongs = (oldListSongs = songs, _) => {
  return oldListSongs;
};

export default combineReducers({
  songs: listOfSongs,
  selectedSong: selectedSongReducer,
});
