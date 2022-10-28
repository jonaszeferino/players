import { useEffect, useState } from "react";

const url = "http://localhost:3001/api/players/reviews";

export default function Tennis() {
  let [playerName, setPlayerName] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setPlayerName(result));
  }, []);

  console.log(playerName);

  return <div>Brow</div>;
}
