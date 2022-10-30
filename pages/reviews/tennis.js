import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const url = "http://localhost:3000/api/players/reviews";

export default function Tennis() {
  let [playerName, setPlayerName] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setPlayerName(result.data));
  }, []);

  console.log(playerName);

  return (
    <div>
      <h3 className={styles.title}>My Teenis Players Reviews</h3>
      <br />
      <div className={styles.grid}>
        {playerName &&
          playerName.map((player) => (
            <div className={styles.card} key={player._id}>
              <span>Player: {player.name}</span>
              <br />
              <span>Age: {player.age}</span>
              <br />
              <span>Hand: {player.hand}</span>
              <br />
              <span>Plays: {player.plays}</span>
              <br />
              <span>Service: {player.sacks}</span>
              <br />
              <span>Hability: {player.hability}</span>
              <br />
              <span>Phisycal: {player.physical}</span>
              <br />
              <span>Rating: {player.rate}</span>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}
