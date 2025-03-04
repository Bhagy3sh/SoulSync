import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post("/api/signup", (req, res) => {
  res.json({ message: "User signed up successfully" });
});

app.post("/api/signin", (req, res) => {
  res.json({ message: "Logged in" });
});

app.get("/api/profile", (req, res) => {
  res.json({ message: "User details fetched" });
});

app.post("/api/mood", (req, res) => {
  res.json({ message: "Mood recorded" });
});

app.get("/api/calendar", (req, res) => {
  res.json({ message: "Calendar data retrieved" });
});

app.get("/api/conversations", (req, res) => {
  res.json({ message: "Conversations fetched" });
});

app.get("/api/insights", (req, res) => {
  res.json({ message: "Insights generated" });
});

app.get("/api/notifications", (req, res) => {
  res.json({ message: "Notifications retrieved" });
});

app.get("/api/badges_streaks", (req, res) => {
  res.json({ message: "Badges and streaks updated" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
