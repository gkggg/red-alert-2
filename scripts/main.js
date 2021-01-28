//UnitTypes.mono.isHidden = isHidden.true;
//bad
//Events.on(ClientLoadEvent, () => {
//Core.app.openURI("https://www.youtube.com/watch?v=fqlb0p11RcE");    
//})
Events.on(ClientLoadEvent, () => {
    Core.app.post(() => {
        Vars.ui.showConfirm("hi", "good soundtrack?", () => {
          Core.app.openURI("https://www.youtube.com/watch?v=fqlb0p11RcE");
        });
    });
})
//;