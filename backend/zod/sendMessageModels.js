import {z} from 'zod'


export const sendMessageZodSchemaStudent= z.object({
    message: z.string()
})

export const sendMessageZodSchemaInstructor= z.object({
    studenId: z.string(),
    message: z.string()
})