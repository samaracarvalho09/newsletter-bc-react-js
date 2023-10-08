import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());


app.use(
  cors({
    origin: "*",
  })
);

const port = 3001;

const emails = [];

app.post("/api/emails", (req, res) => {
  const { email } = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ message: "Email inválido" });
  }
  emails.push(email);
  console.log("email cadastrado", emails);

  res.status(200).json({ message: "Email cadastrado com sucesso" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



