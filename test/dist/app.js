"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validhasnain_validatorator_1 = require("validhasnain-validatorator"); // Import your validator
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
app.post("/", (req, res) => {
    const { email } = req.body;
    // Validate email using safeParse
    const parsedEmail = validhasnain_validatorator_1.emailValidator.safeParse(email);
    // If validation fails, send a 400 response with error messages
    if (!parsedEmail.success) {
        return res.status(400).json({
            success: false,
            errors: parsedEmail.error.errors,
        });
    }
    // If validation is successful, return the validated email
    res.json({
        success: true,
        validatedEmail: parsedEmail.data,
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
