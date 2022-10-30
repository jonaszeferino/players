import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const url = "http://localhost:3000/api/players/soccerReviews";

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
      <h3 className={styles.title}>My Soccer Players Reviews</h3>
      <br />
      <div className={styles.grid}>
        {playerName &&
          playerName.map((player) => (
            <div className={styles.card} key={player._id}>
              <span>Player: {player.name}</span>
              <br />
              <span>Age: {player.age}</span>
              <br />
              <span>Team: {player.franchise}</span>
              <br />
              <span>Position: {player.position}</span>
              <br />
              <span>Foot: {player.foot}</span>
              <br />
              <span>Speed: {player.speeding}</span>
              <br />
              <span>Defending: {player.defending}</span>
              <br />
              <span>Physical: {player.physical}</span>
              <br />
              <span>Hability: {player.hability}</span>
              <br />
              <span>Shooting: {player.shooting}</span>
              <br />
              <span>Rate: {player.rate}</span>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}
