//UnitTypes.mono.isHidden = isHidden.true;
//bad
//Events.on(ClientLoadEvent, () => {
//Core.app.openURI("https://www.youtube.com/watch?v=fqlb0p11RcE");    
//})
Events.on(ClientLoadEvent, () => {
    Core.app.post(() => {
        Vars.ui.showConfirm("hi", "do you want a good soundtrack?\n if you are on pc and you choose yes plase enable shuffle and loop\n if on phone i dont know how to use spotify make an account", () => {
          if (!Vars.mobile)
          {
              Core.app.openURI("https://www.youtube.com/watch?v=xkjUPbjqt-c&list=PLamnoxId_aK3_7bEKLSCQkGKkldsYsZwP");
          }
          else
          {
            Core.app.openURI("https://open.spotify.com/album/0mL0e9FMnDXyZieyyrpH1q?highlight=spotify:track:2dnzBAOPi0XTGhy1DHiBbK");
          }
          //poor phone users cant hear YR music
          Events.run(Trigger.update, () => {
          Vars.control.sound.stop();
          });
          // ^
          // | and this how to know that i am bad at scripting
          //Core.settings.musicvol = 0;
        });
    });
})
//;