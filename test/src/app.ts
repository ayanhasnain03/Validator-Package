import express, { Request, Response } from "express";
import { emailValidator } from "validhasnain-validatorator";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  const { email } = req.body;

  const parsedEmail = emailValidator.safeParse(email);

  if (!parsedEmail.success) {
    return res.status(400).json({
      success: false,
      errors: parsedEmail.error.errors,
    });
  }

  res.json({
    success: true,
    validatedEmail: parsedEmail.data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
