//import nunjucks from "https://cdn.jsdelivr.net/npm/nunjucks@3.2.4/+esm";
import * as nunjucks from "nunjucks";
//nunjucks.precompile()
async function render(template, model) {
    return new Promise((resolve, reject) => {
        try {
            resolve(nunjucks.render(template, model));
        }
        catch (error) {
            reject(error);
        }
    });
}
async function init() {
    let response = await fetch("/temp/polygames.json");
    let json = await response.json();
    let events = json.agenda.events;
    let event = events[0];
    render("/temp/templates/event.html", event).then(html => {
        document.body.insertAdjacentHTML("beforeend", html);
    });
}
init();
