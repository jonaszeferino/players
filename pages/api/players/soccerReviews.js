import client from "../../../mongoConnection";

export default async function handler(req, res) {
  const collection = client.db("players").collection("soccerPlayers");

  switch (req.method) {
    case "GET":
      const body = res.body;
      const getMongo = await collection.find().toArray();

      res.json({
        status: 200,
        data: getMongo,
      });
      break;

    default:
      break;
  }
}
