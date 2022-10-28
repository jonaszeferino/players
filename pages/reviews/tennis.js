import { useEffect, useState } from "react";

const url = "http://localhost:3000/api/players/reviews";

export default function Tennis() {
  let [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setPlayerName(result));
  }, []);

  console.log(playerName);

  return (
    <div>
      {playerName &&
        playerName.map((player) => <div key={player._id}>{player.name}</div>)}
    </div>
  );
}
