
Hooks.on("renderJournalSheet", app => {
    if (app.title === "Text Crawl") app.setPosition({width: window.innerWidth, height: window.innerHeight})
});