import * as z from "zod";

const authSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(6).nonempty(),
});
export default authSchema;
