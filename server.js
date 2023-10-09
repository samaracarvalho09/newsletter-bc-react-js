import mongoose from "mongoose";

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

// mongoDB:
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const emailSchema = new mongoose.Schema({
  email: String,
});

const EmailModel = mongoose.model("Email", emailSchema);

//

const emails = [];

app.post("/api/emails", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ message: "Email inválido" });
  }

  try {
    const newEmail = new EmailModel({ email });
    await newEmail.save();
    console.log("Email cadastrado:", email);
    res.status(200).json({ message: "Email cadastrado com sucesso" });
  } catch (error) {
    console.error("Erro ao salvar o email:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
    emails.push(email);

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log('test server started');


app.get("/api/emails", async (req, res) => {
  try {
    const emails = await EmailModel.find(); // Consulta todos os e-mails no banco de dados
    res.status(200).json(emails);
  } catch (error) {
    console.error("Erro ao buscar a lista de e-mails:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});
