//UnitTypes.mono.isHidden = isHidden.true;
//bad
//Events.on(ClientLoadEvent, () => {
//Core.app.openURI("https://www.youtube.com/watch?v=fqlb0p11RcE");    
//})
Events.on(ClientLoadEvent, () => {
    if (Vars.mobile)
    {
    Core.app.post(() => {
        Vars.ui.showConfirm("hi", "do you want a good soundtrack?\n if yes plase enable shuffle and loop", () => {
          Core.app.openURI("https://www.youtube.com/watch?v=ENyxseq59YQ&list=PLDC670C4F09073B27");
          Events.run(Trigger.update, () => {
          Vars.control.sound.stop();
          });
          //Core.settings.musicvol = 0;
        });
    });
    }
})
//;