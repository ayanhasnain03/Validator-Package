import { z } from "zod";
export declare const emailValidator: z.ZodEffects<z.ZodString, string, string>;
export type EmailValidator = z.infer<typeof emailValidator>;
