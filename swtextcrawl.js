
Hooks.on("renderJournalSheet", app => {
        if (app.object.data.name.includes("Text Crawl") && game.user.isGM == false) {
            app.setPosition({width: window.innerWidth, height: window.innerHeight})
        } 
});

