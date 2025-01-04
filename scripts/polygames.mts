
//@ts-ignore
import nunjucks from "https://cdn.jsdelivr.net/npm/nunjucks@3.2.4/+esm";
//import * as nunjucks from "nunjucks";

async function render(template:string, model:any):Promise<string>
	{
	return new Promise<string>((resolve, reject) =>
		{
		try
			{
			resolve(nunjucks.render(template, model));
			}
		catch (error)
			{
			reject(error);
			}
		});
	}

async function init()
	{
	let response = await fetch("/temp/polygames.json");

	let json = await response.json();

	let events = json.agenda.events as Array<any>;

	let event = events[0];

	render("/temp/event.html", event).then(html =>
		{
		document.body.insertAdjacentHTML("beforeend", html);
		});
	}

init();
