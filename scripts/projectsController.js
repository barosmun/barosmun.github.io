function showSnail(){
  $("#projectInfo").empty().append(`
    <h2 id="snail"> Snail Game </h2>
    <p>
      I have a small project I've monikered <em>Unsalted</em> that revolves around
      "snail-based gameplay", which simply means I have a little wall climb mechanic going on.
      I'm not sure where to take this project, I've considered adding a secondary mechanic
      where you can hide in your shell and subsequently you are subject to momentum and can
      get launched around the map like a koopa shell in Mario. Not sure.
    </p>
    <video src="videos/snail1.mp4"
           width="480" height="240" autoplay muted loop>
      Your browser does not support video. I am very sorry.
    </video>
    <video src="videos/snail2.mp4"
           width="480" height="240" autoplay muted loop>
      Your browser does not support video. I am very sorry.
    </video>
    <br><hr><br>
    `);
}

function showStealth(){
  $("#projectInfo").empty().append(`
    <h2 id="stealth"> Stealth Demo </h2>
    <p>
      This is more of a proof of concept than anything. I just wanted to make a
      "vision cone" based stealth game. I got the basics working and then added
      solid walls which block movement and vision. Followed by glass, which blocks
      movement but not vision. And then a sort of smoke which blocks vision but
      allows movement.
    </p>
    <img src="images/stealth1.png" width=240 height=240>
    <img src="images/stealth2.png" width=400 height=240><br>
    <img src="images/stealth3.png" width=450 height=360>
    <img src="images/stealth4.png" width=450 height=360>
    <br><hr><br>
  `);
}

function showCaveman(){
  $("#projectInfo").empty().append(`
    <h2 id="caveman"> Caveman Concept </h2>
    <p>
      This project is weird becuase it's one of the only times I've started with art,
      as opposed to gameplay. I really don't have any path forward for this game at the
      moment. I think it would play more as a story-driven campaign than a gameplay-heavy
      project. Either way, it's some of the only art I've done I'm somewhat fond of.
    </p>
    <img src="images/caveman1.png">
    <img src="images/caveman2.png">
    <img src="images/caveman3.png">
    <img src="images/fire.gif"><br>
    <img src="images/dog1.png" width=220 height=160>
    <img src="images/dog2.png" width=220 height=160>
    <img src="images/auroch.gif">
    <br><hr><br>
  `);
}

function showOnline(){
  $("#projectInfo").empty().append(`
    <h2 id="antc2"> At Night They Come 2 </h2>
    <p>
      This is the bane of my exisitence. Since we made At Night They Come back in
      2016, we've thought of making a sequel or at least a renovated version. I
      thought it would be a great opportunity to try and tackle an online multiplayer.
      I was very wrong. I spent months obsessing over this project, every tiny addition
      would pretty much break it. I thought I had a good undertstanding of buffers and
      networking - and at times the project looked very promising. I could host a game server
      from my laptop, and get my friends to connect to it from their home computers to play along.
      But after many months of terminal errors and bug chasing, I had to lay it to rest...
      at least for the time being!
    </p>
    <img src="images/antc2.png">
    <img src="images/antc2_1.png" width=30% height=30%>
    <img src="images/antc2_2.png">
    <br><hr><br>
  `);
}
