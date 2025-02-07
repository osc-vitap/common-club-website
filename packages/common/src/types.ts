import z from "zod"

export const loginschema = z.object({
    name: z.string(),
    age: z.number(),
})

export const loginschema2 = z.object({
    name: z.string(),
    age: z.number(),
})