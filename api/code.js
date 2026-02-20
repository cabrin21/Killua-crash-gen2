// api/code.js
export default function handler(req, res) {
  // Générer un code KILLUA de 8 chiffres
  const code = Math.floor(10000000 + Math.random() * 90000000).toString();
  res.status(200).json({ code });
}
