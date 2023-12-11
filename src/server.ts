import Express from "express";
import { router } from "./routes";
import { TrocaController } from "./Controller/TrocaController";

const app = Express();
app.use(Express.json());
app.use(router);
const PORT = 8000;

app.get("/", (request, response) => {
	new TrocaController().troca();
	return response.send({message: "Hello World!"});
});

app.listen(PORT, () => {
	console.log("Server is running in port " + PORT);
});
