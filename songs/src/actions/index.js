// action creator
export const selectedSong = (song) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
