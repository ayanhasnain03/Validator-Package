"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidator = void 0;
const zod_1 = require("zod");
// Email Validator with additional checks
exports.emailValidator = zod_1.z
    .string()
    .email({ message: "Must be a valid email" })
    .min(1, { message: "Required" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" }) // Basic format check
    .refine((email) => {
    const bannedDomains = ["example.com", "test.com"];
    const domain = email.split("@")[1];
    return !bannedDomains.includes(domain);
}, { message: "Email domain is not allowed" });
