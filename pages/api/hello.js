import jsonStuff from "../../json/stuff.json";

export default function handler(req, res) {
  if (req.method === "POST") {
    req.body === "data" ? res.status(200).json(jsonStuff) : res.status(404);
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
