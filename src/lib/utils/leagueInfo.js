/*   STEP 1   */
export const leagueID = "1124825409142132736"; // your league ID
export const leagueName = "Latest News"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
   <h3 style="color: #333;">Fantasy Football Draft Recap and Grades: The Good, The Bad, and The Bold</h3>

    <p>In a draft filled with surprises, gambles, and some downright head-scratchers, each team walked away with a roster they hope will carry them to fantasy glory. Here’s a closer look at how each team fared, complete with grades and a few chuckles along the way.</p>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">1. Purdy Good Odds</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Tyreek Hill</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> George Kittle</p>
        <p><span style="font-weight: bold;">Analysis:</span> Tyreek Hill is poised to "cheetah" his way through defenses, making this a solid WR1 pick. George Kittle is an elite tight end when healthy, but he’s as fragile as a porcelain doll. The RB depth? It’s more like a kiddie pool—shallow and concerning.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B+ (Could be an A if Kittle stays on the field and Hill outruns the competition.)</p>
    </div>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">2. Team rozdoyle</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Josh Allen</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Sam LaPorta</p>
        <p><span style="font-weight: bold;">Analysis:</span> Josh Allen brings elite QB production and is a potential MVP. But Sam LaPorta as your second pick is a bit of a head-scratcher, unless you’re in a tight end premium league—otherwise, it’s like reaching for the last donut only to realize it’s gluten-free.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: A (If McCaffrey doesn’t spontaneously combust, this is an A+ roster.)</p>
    </div>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">3. Auntie Ray</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> C.J. Stroud</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Cowboys Defense</p>
        <p><span style="font-weight: bold;">Analysis:</span> Drafting C.J. Stroud is like buying stock in a promising startup—high risk, high reward. But the Dallas Cowboys Defense in the 4th round? That’s like buying a snowblower in the middle of summer—there might be a better use for that pick. This team might strike gold with Stroud, but the Cowboys are more of a lump of coal.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B- (This team could either be the steal of the draft or an elaborate fantasy experiment gone wrong.)</p>
    </div>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">4. You're the Sucker</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Ja’Marr Chase</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Raheem Mostert</p>
        <p><span style="font-weight: bold;">Analysis:</span> Ja’Marr Chase is a home run pick—consistent, explosive, and a potential league winner if he’s paid. Chas-ing money off the field does not score any points in our scoring format. Old man Mostert is a serious risk, there’s a chance this team will have to sit down and have a tough conversation with him at some point this season.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B (If everyone is healthy, paid, happy, not too old, reaches their potential, and the stars align, they might make the playoffs.)</p>
    </div>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">5. Shots Fired</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Joe Burrow</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Ricky Pearsall</p>
        <p><span style="font-weight: bold;">Analysis:</span> Joe Burrow is the steady hand you want guiding your fantasy ship. However, the team owner should have known to stay away from Ricky Pearsall. We all know how dangerous San Francisco is, and the team should have taken that into consideration before taking him with their last pick. Still, the core of this team is solid, with Burrow leading the way.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: A- (This team is built to win, though a lot rests on the shoulders of Burrow’s golden arm and bleachy head.)</p>
    </div>

    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">6. Hall Passers</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Lamar Jackson</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Evan Engram</p>
        <p><span style="font-weight: bold;">Analysis:</span> Lamar Jackson is a high-upside QB who could single-handedly carry your team—if he stays healthy. Evan Engram could be a good pick considering that he was the second-best tight end last year. However, this team failed to consider the six years of mediocrity that plagued him previously. A regression to the mean may be in order.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B (This team has sky-high potential, but it’s also one pulled hamstring away from mediocrity.)</p>
    </div>
    <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">7. McMama</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Cameron Dicker</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Tua Tagovailoa</p>
        <p><span style="font-weight: bold;">Analysis:</span> A.J. Brown is a beast, and he’ll likely continue to eat up yardage like a buffet. Tua Tagovailoa, however, has the durability of a cell phone charger—always breaking when you need him the most. The rest of the roster has solid potential, but Chris Godwin could be a bust if he spends more time on the bench than the field. The biggest steal was grabbing Dicker the Kicker with her last pick!</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B- (If everyone stays healthy, this team will smash. But it’s a big “if.”)
</p>
    </div>
        <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">8. HurtsSoGood</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Jalen Hurts</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Tony Pollard</p>
        <p><span style="font-weight: bold;">Analysis:</span> A huge improvement from last year’s draft disaster. Pollard, though, is a bit of a gamble. He could be a steal, or he could spend more time riding the pine. Hurts gives this team a high floor, but Pollard’s talent could determine the ceiling.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: A- (This team has the potential to dominate, but it might be a bit too dependent on Mahomes' magic.)</p>
    </div>
        <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">9. Don't Juke Aiyuck</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Bijan Robinson</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Brandon Aiyuck</p>
        <p><span style="font-weight: bold;">Analysis:</span> Bijan Robinson could be the next big thing, or he could be the next big bust—only time will tell. Brandon Aiyuck’s situation is as murky as your friend’s Instagram filter. If he doesn’t return to form, this team might be in trouble. But if Robinson delivers, this could be a breakout season for Don't Juke Aiyuck.</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: B (Boom or bust, this team will either be a contender or a cautionary tale.)</p>
    </div>
        <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h2 style="color: #444;">10. Cereal Killers</h2>
        <p><span style="font-weight: bold; color: #555;">Best Pick:</span> Patrick Mahomes</p>
        <p><span style="font-weight: bold; color: #555;">Worst Pick:</span> Kyle Pitts</p>
        <p><span style="font-weight: bold;">Analysis: </span>Patrick Mahomes is the fantasy football equivalent of a cheat code—unstoppable and reliable. Kyle Pitts, on the other hand, has been all potential and little production—a pick that might leave you frustrated if his QB can’t get him the ball. This team has strong points, but this team could be left in the Pitts questioning every decision they have ever made</p>
        <p style="font-weight: bold; color: #007BFF;">Grade: C+ (If everything clicks, this team will be a force, but there are a few too many “ifs” for comfort.)</p>
    </div>

     </div>
        <div style="background-color: #fff; margin: 20px 0; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <p><span style="font-weight: bold;"></span>In the end, each team has the potential to shine—or crash and burn spectacularly. The season ahead will reveal who’s a genius and who’s been hoodwinked by their own draft-day optimism. Until then, let the trash-talking commence! Don't forget to set your lineups for Thursday</p>
    </div>

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Your Name",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Brooklyn", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    