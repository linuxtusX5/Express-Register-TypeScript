import { Express,Request,Response } from "express";
import validateResource from './middleware/validateResource';
import { createUserSchema } from "./schema/user.schema";
import { CreateUserHandler } from "./controller/user.controller";
import { createUserSessionHandler } from "./controller/session.controller";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
    app.post('/api/users', validateResource(createUserSchema), CreateUserHandler)
    app.post('/api/sessions', validateResource(createUserSchema),createUserSessionHandler);
}
export default routes;