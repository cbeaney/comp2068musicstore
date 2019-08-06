import React from "react";

function About() {
  return ( 
    <>
    <div className="globalBackground">
      <div>
        <h1 className="aboutText" style={{ paddingTop: 100 }}>About Page</h1>
        <h1 className="aboutText"> BBC - Ben Pike, Barry Adunmo, Charlie Beaney!</h1>
              <div className="aboutText">
                Ben Pike - Ben was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. 
              </div>
              <div className="aboutText">
                Barry Adunmo - Once a smooth-talking smuggler, Barry Adunmo changed from a get-rich-quick schemer to a selfless leader in the fight against the Empire. From adventures with the Ghost crew of rebels to the attack on Death Star II, his quick wit and daring proved to be invaluable.
              </div>
              <div className="aboutText">
                Charlie Beaney - Smuggler. Scoundrel. Hero. Charlie Beaney, captain of the Millennium Falcon, was one of the great leaders of the Rebel Alliance. He and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire.
              </div>
      </div>
    </div>
    </>
  );
}

export default About;
