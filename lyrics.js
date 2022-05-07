//********************************************************
// Lyrics for the album "A Violent Peace"
//********************************************************
const aViolentPeaceLyrics = document.querySelector('#aViolentPeaceLyrics');

aViolentPeaceLyrics.innerHTML = `
<!-- ------------------------------------------------------- -->
<!-- Lyrics for the album "A Violent Peace" -->
<!-- ------------------------------------------------------- -->

<div class="offcanvas-header">
    <h3>A Violent Peace</h3>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

<div class="offcanvas-body">

    <!-- ---------------------------------- -->
    <!-- Tablet & Mobile Viewport Tracklist -->
    <!-- ---------------------------------- -->
    <div class="row">
        <div class="col-12 d-none d-xxs-block d-xs-block d-sm-block d-md-block d-lg-none">
            <h3><u>Tracklist</u></h3>
            <p>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTheGreatDrowner" aria-expanded="false"
                    aria-controls="collapseExample">
                    1. The Great Drowner
                </button>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseAnchorage" aria-expanded="false"
                    aria-controls="collapseExample">
                    2. Anchorage
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseWar" aria-expanded="false" aria-controls="collapseExample">
                    3. War When You Wake
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOldFriend" aria-expanded="false" aria-controls="collapseExample">
                    4. Old Friend
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTheRains" aria-expanded="false" aria-controls="collapseExample">
                    5. The Rains
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTroglodyte" aria-expanded="false" aria-controls="collapseExample">
                    6. Troglodyte
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseInsideYourCoat" aria-expanded="false" aria-controls="collapseExample">
                    7. Inside Your Coat
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseYouveChanged" aria-expanded="false" aria-controls="collapseExample">
                    8. You've Changed
                </button>
            </p>
        </div>
    </div>

    <!-- ------------------------------ -->
    <!-- Large Viewport Tracklist -->
    <!-- ------------------------------ -->
    <div class="row justify-content-center">
        <div class="col-2 d-none d-lg-block rounded tracklist-container">
            <h3 class="mb-3"><u>Tracklist</u></h3>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTheGreatDrowner" aria-expanded="false" aria-controls="collapseExample">
                    1. The Great Drowner
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseAnchorage" aria-expanded="false" aria-controls="collapseExample">
                    2. Anchorage
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseWar" aria-expanded="false" aria-controls="collapseExample">
                    3. War When You Wake
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOldFriend" aria-expanded="false" aria-controls="collapseExample">
                    4. Old Friend
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTheRains" aria-expanded="false" aria-controls="collapseExample">
                    5. The Rains
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTroglodyte" aria-expanded="false" aria-controls="collapseExample">
                    6. Troglodyte
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseInsideYourCoat" aria-expanded="false" aria-controls="collapseExample">
                    7. Inside Your Coat
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseYouveChanged" aria-expanded="false" aria-controls="collapseExample">
                    8. You've Changed
                </button>
            </p>
        </div>

        <!-- Lyrics Display -->
        <div class="col-lg-6 col-md-12 rounded lyrics-box">
            <h3 class="text-center"><u>Lyrics</u></h3>

            <div class="collapse lyric-collapse" id="collapseTheGreatDrowner">
                <div class="card card-body rounded">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>The Great Drowner</h3>
                            <hr>
                            <p>Friend, have you gone? Are you now displeased?</p>
                            <p>Far underneath there were shadows with me</p>
                            <p>Patch it up for my mind always bleeds</p>
                            <p>the walls of frames and faces always in
                                streams.</p>
                            <br>
                            <p>And you ran down the lawn to where I fell</p>
                            <p>What hand undealt?</p>
                            <p>Oh what grace that can be felt</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Something so dear, somehow holds on so strong</p>
                            <p>I spent so long drying out up here.</p>
                            <p>I was never once for change, nor it for me and yet it came</p>
                            <p>A thousand miles of wind and rain, and as I drowned the waters sang,</p>
                            <p>"All hail, all hail, The Great Drowner of them all will fail.</p>
                            <p>What man can tell? For the number of his days are veiled."</p>
                            <br>
                            <p>And the sleeping lake, said "I've never learned to wake.</p>
                            <p>For my life you sank, what I've loved you have erased."</p>
                            <p>Oh, life, you've changed.</p>
                            <br>
                            <p>Love, take me home</p>
                            <p>Life so young</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseAnchorage">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Anchorage</h3>
                            <hr>
                            <p>Taken to the east when I was young.</p>
                            <p>Carved by the mountains, we filled our lungs.</p>
                            <p>But it's hard to breathe deeply when it's all so close</p>
                            <p>and it's all that you've known.</p>
                            <br>
                            <p>You've lost all control, now lets see where you go.</p>
                            <br>
                            <p>Tell me, ocean, where do I come from?</p>
                            <p>Cuz your other side has kept me for so long.</p>
                            <p>And it's hard to be far from the places you've grown</p>
                            <p>but this place it was home.
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>You've lost all control, to the sails of your boat.</p>
                            <p>I know it's not mine, but I'm reaching for time.</p>
                            <p>This sea's always changing, lets anchor our aging.</p>
                            <br>
                            <p>Oh, God, it's too soon, when I settle you move.</p>
                            <p>I'm scared with each year, I'll forget what was here.</p>
                            <p>If homesickness hurts, then I'm aching like hell.</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseWar">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>War When You Wake</h3>
                            <hr>
                            <p>Child, how you strain</p>
                            <p>and your words they don't sound the same.</p>
                            <p>It's a silent cage, locked in silent ways.</p>
                            <br>
                            <p>With all your thoughts worn, what could be said plain</p>
                            <p>of the world in your brain?</p>
                            <p>For the world it is strange.</p>
                            <br>
                            <p>You're slipping out the door, but you'll crawl back when you fall poor.</p>
                            <p>May your feet find a place for your mind</p>
                            <p>a place for your kind.</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Child, they're away with their old friend decay</p>
                            <p>with a thief who is never late</p>
                            <p>they don't know restraint.</p>
                            <br>
                            <p>And with your tears comes a war when you wake</p>
                            <p>with a violent ache.</p>
                            <p>for it's all you can take.</p>
                            <br>
                            <p>A cloth a branch has worn, but you'll hold on as you are torn.</p>
                            <p>May the trees find, a place for your mind</p>
                            <p>a place for your kind.</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseOldFriend">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Old Friend</h3>
                            <hr>
                            <p>(instrumental)</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseTheRains">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>The Rains</h3>
                            <hr>
                            <p>Oh the rains would erase my name</p>
                            <p>oh, my Lord, have I gone too far?</p>
                            <p>I've built an empire for myself, oh the wealth of need found in gain.</p>
                            <br>
                            <p>Day subsides, all our cares untied in their rooms and under their sheets.</p>
                            <p>But when you rise, will you wear your pride with the blood of what you don't need?
                            </p>

                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Blind decay, how we choose to stay</p>
                            <p>every sense so quickly misplaced.</p>
                            <p>In shade of walls I have watched love hang, as the ropes will carry the blame.</p>
                            <br>
                            <p>So dig your holes for their swords and spears, but it's the minds of man that I fear.
                            </p>
                            <p>Slaves of none, what our wills have done will be seen when all come unclean.</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseTroglodyte">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Troglodyte</h3>
                            <hr>
                            <p>And the pain in your eyes is unspoken</p>
                            <p>all the words put under the shade.</p>
                            <p> Still a light you will be for another</p>
                            <p>if you'd only learn how to wait.</p>
                            <br>
                            <p>Troglodyte, is that you in the open?</p>
                            <p>Have you come to settle down?</p>
                            <p>Still today there are words for tomorrow</p>
                            <p>and a light to bring you home.</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>How you've drifted away</p>
                            <p>to a cold house enough, to bear your thoughts</p>
                            <p>to hold your words, til the end of the day.</p>
                            <p>A table for us, set so plain</p>
                            <p>to relieve your weight</p>
                            <p>then you go on your way.</p>
                            <br>
                            <p>And you stand in the fields with your Father</p>
                            <p>and you ask how could this be real?</p>
                            <p>There were days when it seemed you were nowhere...</p>
                            <p>Have I lost all sense of feel?</p>
                            <br>
                            <p>Troglodyte, is that you in the open?</p>
                            <p>Have you come to settle down?</p>
                            <p>Still today there are words for tomorrow</p>
                            <p>and a light to bring you home.</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseInsideYourCoat">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Inside Your Coat</h3>
                            <hr>
                            <p>Swept aside, an ash of my own flame.</p>
                            <p>I tried to run, oh I tried to hide.</p>
                            <p>I cried, "Heal my eyes, for a fire burns that should have no fuel!"</p>
                            <p>Oh, God, be here...</p>
                            <br>
                            <p>Hem me in, inside your coat my love</p>
                            <p>so I can be close to you.</p>
                            <p>Just take me out, when this world must be seen and pain be felt</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>You say, "See my motives, see my heart</p>
                            <p>see this love it had no start."</p>
                            <br>
                            <p>Just a smell can take me there, to all the places you felt near</p>
                            <p>The warmth in the night</p>
                            <p>all the drives.</p>
                            <p>These questions flooded my heart</p>
                            <br>
                            <p>Where is the one you keep for me?</p>
                            <p>Will they see past my own sin?</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseYouveChanged">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>You've Changed</h3>
                            <hr>
                            <p>We set out for lights of a thousand boats, sunk our lines</p>
                            <p>far from sight, shores of houses hide, still waves shine.</p>
                            <p>Fire floats, and bursts the night</p>
                            <p>oh life, you've changed.</p>
                            <br>
                            <p>Some years before was a boy on these shores</p>
                            <p>In a house among trees, in a violent peace</p>
                            <p>And our youth has traced every wall in this place</p>
                            <p>But I wake these days, and I'm fearful of age so soon</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>You've lost all control to the sails of your boat</p>
                            <p>Now what will you choose as your anchors break loose?</p>
                            <p>Oh, Father, I'll be but a wake in your breeze</p>
                            <p>An ash in your coat, dug in gardens ungrown</p>
                            <p>And I'll see you soon when we finally bloom</p>
                            <p>Oh crux of my bones, oh incomparable home</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

<!-- ------------------------------------------------------- -->
<!-- End of Lyrics for the album "A Violent Peace" -->
<!-- ------------------------------------------------------- -->
`;

//********************************************************
// End of lyrics for the album "A Violent Peace"
//********************************************************

//********************************************************
// Lyrics for the EP "Joys of Kin"
//********************************************************
const joysOfKinEpLyrics = document.querySelector('#joysOfKinEpLyrics');

joysOfKinEpLyrics.innerHTML = `
<!-- ------------------------------------------------------- -->
<!-- Lyrics for the EP "Joys of Kin" -->
<!-- ------------------------------------------------------- -->

<div class="offcanvas-header">
    <h3>Joys of Kin | EP</h3>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

<div class="offcanvas-body">

    <!-- ---------------------------------- -->
    <!-- Tablet & Mobile Viewport Tracklist -->
    <!-- ---------------------------------- -->
    <div class="row">
        <div class="col-12 d-none d-xxs-block d-xs-block d-sm-block d-md-block d-lg-none">
            <h3><u>Tracklist</u></h3>
            <p>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseJoysOfKinDemo" aria-expanded="false"
                    aria-controls="collapseExample">
                    1. Joys of Kin
                </button>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOrpheusDemo" aria-expanded="false"
                    aria-controls="collapseExample">
                    2. Orpheus
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseShiftingsDemo" aria-expanded="false" aria-controls="collapseExample">
                    3. Shiftings
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseNoMeasuresDemo" aria-expanded="false" aria-controls="collapseExample">
                    4. No Measures
                </button>
            </p>
        </div>
    </div>

    <!-- ------------------------------ -->
    <!-- Large Viewport Tracklist -->
    <!-- ------------------------------ -->
    <div class="row justify-content-center">
        <div class="col-2 d-none d-lg-block rounded tracklist-container">
            <h3 class="mb-3"><u>Tracklist</u></h3>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseJoysOfKinDemo" aria-expanded="false" aria-controls="collapseExample">
                    1. Joys of Kin
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOrpheusDemo" aria-expanded="false" aria-controls="collapseExample">
                    2. Orpheus
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseShiftingsDemo" aria-expanded="false" aria-controls="collapseExample">
                    3. Shiftings
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseNoMeasuresDemo" aria-expanded="false" aria-controls="collapseExample">
                    4. No Measures
                </button>
            </p>
        </div>

        <!-- Lyrics Display -->
        <div class="col-lg-6 col-md-12 rounded lyrics-box">
            <h3 class="text-center"><u>Lyrics</u></h3>

            <div class="collapse lyric-collapse" id="collapseJoysOfKinDemo">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Joys of Kin</h3>
                            <hr>
                            <p>That train, the hounds, your core</p>
                            <p>What bellows out trying to figure out what's before?</p>
                            <p>With your head against the glass, do you ever tend to wander out and be gone?</p>
                            <br>
                            <p>Come now the joys of kin, as the warmest sound ever heard in your lasting years</p>
                            <p>For in my family's glow, I will not be ashamed of us</p>
                            <br>
                            <p>I've not let go of us, they found a way to burn through the nerve 'til we've
                                never
                                had</p>
                            <p>As they come to speak in tones like I have faced the facts, when anymore I,</p>
                            <p>I still wonder how it will work itself out where we're fine</p>
                            <p>And the headlights will turn through the snow in the blinds</p>
                            <br>
                            <p>The light shoots through the marks, like a million stars splintered out in a flash
                                and
                                flurr</p>
                            <p>To the specks of distant worlds</p>
                            <p>Such a smallness, life existing now on the glass you watch</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>I've not let go of us, they found a way to burn through the nerve 'til we've
                                never
                                had</p>
                            <p>As they come to speak in tones like i have faced the facts, when anymore I,</p>
                            <p>I still wonder how it will work itself out where we're fine, and the headlights will
                                turn
                                through the snow in the blinds</p>
                            <br>
                            <p>You are never very far off</p>
                            <p>You are never really gone</p>
                            <br>
                            <p>You came through my room, yet you were withdrawn</p>
                            <p>How's your hope?</p>
                            <p>Do the lights lie unstring, cuz it just seems wrong to ever be fine, when the man you
                                returned is the boy you refined?</p>
                            <br>
                            <p>And all the days that crept into your smile</p>
                            <p>Withhold from you the severance of time</p>
                            <p>And rid the town of every vacant sight</p>
                            <p>To be alone with you one more mile</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseOrpheusDemo">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Orpheus</h3>
                            <hr>
                            <p>You were some course that offered me miles, a friend in my trials</p>
                            <p>And her, what she stirred, well it hurts of worthwhile</p>
                            <p>What if I stayed 'til old and im swollen in my veins,</p>
                            <p>where you could trace the man I've been who wore you thin</p>
                            <br>
                            <p>I love you the girl of my youth</p>
                            <p>Don't you wonder how</p>
                            <br>
                            <p>And the mornings that broke you down, you search for the boy you seldomly found</p>
                            <p>If your arms could just pull him out, he wants you still</p>
                            <p>Yeah, I always will</p>
                            <br>
                            <p>I'll miss your soul the moment it goes,</p>
                            <p>but I should have known just how much I've kept from those I know best</p>
                            <p>How selfish my crown</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Out in their lores for hours, I've had my fill</p>
                            <p>I took the worms for cowards, but how they kill</p>
                            <p>I look forward to life as the father of kids</p>
                            <p>Have you reserved my heart for this</p>
                            <p>Could you show me how?</p>
                            <br>
                            <p>Have I told you my honest doubts, well I'm still not sure I'll ever dry out</p>
                            <p>Cuz you'll be hard to do without</p>
                            <p>I'll want you still,</p>
                            <p>Yeah I always will</p>
                            <br>
                            <p>Cuz I'll miss your soul the moment it goes and slips through these folds</p>
                            <p>But how long will death take to make sense, when none can be found?</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseShiftingsDemo">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Shiftings</h3>
                            <hr>
                            <p>Watch for despair has followed you out, so fast upon your heels</p>
                            <p>Your staggering work to grip the earth has left you struck to every nerve</p>
                            <p>And you returned for whom the strangeness lurks and is a commonness</p>
                            <p>Said, “come on down, the wind blows heavy now and you are overrun”</p>
                            <br>
                            <p>The strength of a woman to walk this yard, when at the door you cant explain</p>
                            <p>How something’s changed—the walls awake with shiftings of a wandering ghost</p>
                            <p>And the billows rose in asking where you’ll go now, should it all remain?</p>
                            <p>For what has begun, nothing’s won</p>
                            <p>But you can learn to cope this way</p>
                            <br>
                            <p>And now your stretch yearns</p>
                            <p>To find the breadth of relief</p>
                            <p>That anyone can just leave and be gone</p>
                            <p>A solemn mender</p>
                            <p>The final hold of release, and when it’s gone I will need it again</p>
                            <br>
                            <p>I wish for dreams, the glow of lights at sea,</p>
                            <p>I wish too many things</p>
                            <p>But i will bring that coast what’s left of me</p>
                            <p>And I will dream</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Darling, relent your restless arms</p>
                            <p>Come along just leave his room</p>
                            <p>He is strong, his mother’s strong, nothing's wrong the morning’s</p>
                            <p>Soon he’ll be home, he’s on his own, he is grown, just let him loose</p>
                            <p>He is strong, his mother’s strong, nothing’s wrong, he’s just like</p>
                            <p>You bent to heave a clambering heart</p>
                            <p>Rattled son, you have been harmed</p>
                            <p>But you’re strong, your child’s strong, it is wrong but carry</p>
                            <p>Through everything, your every part felt much more of hurt before any car the
                                metals
                                tore</p>
                            <p>You were gone, you have been wronged</p>
                            <br>
                            <p>Careless the ropes that wore to bone</p>
                            <p>Calloused my hands that never learned how to let go</p>
                            <p>Careless to kill the stars, a son</p>
                            <p>Calloused my will to never forgive what was done</p>
                            <p>If i could start to heal for once</p>
                            <p>Those labored eyes where all of my anger is lost</p>
                            <p>While any fervency is mine</p>
                            <p>I’ll make this right if I’m less alive when it’s done</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseNoMeasuresDemo">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>No Measures</h3>
                            <hr>
                            <p>You look to the storm with a shuddering, back from farther days</p>
                            <p>That you might have been through and yet you lose the path which you came from</p>
                            <p>When the obvious part you've learned is she will never fold, for your worst has shown
                            </p>
                            <p>But you bore your mistakes with another, that you offered to always find</p>
                            <p>You always tried
                                <br>
                            <p>It comes from the north as a hollowing, the chimes that shook you first</p>
                            <p>The times when the coffee takes so long to ever be raised to the muscles beneath your
                                face</p>
                            <p>They left you old somehow, like the kids who had pulled your sleeves and wore you
                                down, as they led you unmade</p>
                            <p>But you look farther out, to the holds of a state, and I could not get over it</p>
                            <p>Have I offered an honest life?</p>
                            <p>I always tried</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Somehow all worth comes passing by before you rush outside</p>
                            <p>To say, "Once I'd known it, even owned, yet chased for my whole life"</p>
                            <p>And every ounce was you</p>
                            <p>So get up</p>
                            <p>Just get up! I can hear the bells stop, and bonds forgot</p>
                            <p>No measures must you ever take to find me here, still under the arbor</p>
                            <p>Well you're such a precious sight</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>

</div>

<!-- ------------------------------------------------------- -->
<!-- End of lyrics for the EP "Joys of Kin" -->
<!-- ------------------------------------------------------- -->
`;

//********************************************************
// End of lyrics for the EP "Joys of Kin"
//********************************************************

//********************************************************
// Lyrics for the album "Does it Feel Like I'm Not There?"
//********************************************************
const doesItFeelLyrics = document.querySelector('#doesItFeelLyrics');

doesItFeelLyrics.innerHTML = `
<!-- ------------------------------------------------------- -->
<!-- Lyrics for the album "Does it Feel Like I'm Not There?" -->
<!-- ------------------------------------------------------- -->

<div class="offcanvas-header">
    <h3 id="offcanvasLyricsLabel">does it feel like i'm not there?</h3>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>

<div class="offcanvas-body">

    <!-- ---------------------------------- -->
    <!-- Tablet & Mobile Viewport Tracklist -->
    <!-- ---------------------------------- -->
    <div class="row">
        <div class="col-12 d-none d-xxs-block d-xs-block d-sm-block d-md-block d-lg-none">
            <h3><u>Tracklist</u></h3>
            <p>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseAWoman" aria-expanded="false"
                    aria-controls="collapseExample">
                    1. A Woman
                </button>
                <button class="lyric-button-sm btn btn-outline-light inline-block" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseMacon" aria-expanded="false"
                    aria-controls="collapseExample">
                    2. Macon
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseKeening" aria-expanded="false" aria-controls="collapseExample">
                    3. Keening
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseShiftings" aria-expanded="false" aria-controls="collapseExample">
                    4. Shiftings
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseMostOfYou" aria-expanded="false" aria-controls="collapseExample">
                    5. Most of You
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseJoysOfKin" aria-expanded="false" aria-controls="collapseExample">
                    6. Joys of Kin
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseKickingTheColdOut" aria-expanded="false"
                    aria-controls="collapseExample">
                    7. Kicking the Cold Out
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOrpheus" aria-expanded="false" aria-controls="collapseExample">
                    8. Orpheus
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseLakeRedman" aria-expanded="false" aria-controls="collapseExample">
                    9. Lake Redman
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseLongYear" aria-expanded="false" aria-controls="collapseExample">
                    10. Long Year
                </button>
                <button class="lyric-button-sm btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseNoMeasures" aria-expanded="false" aria-controls="collapseExample">
                    11. No Measures
                </button>
            </p>
        </div>
    </div>

    <!-- ------------------------------ -->
    <!-- Large Viewport Tracklist -->
    <!-- ------------------------------ -->
    <div class="row justify-content-center">
        <div class="col-2 d-none d-lg-block rounded tracklist-container">
            <h3 class="mb-3"><u>Tracklist</u></h3>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseAWoman" aria-expanded="false" aria-controls="collapseExample">
                    1. A Woman
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseMacon" aria-expanded="false" aria-controls="collapseExample">
                    2. Macon
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseKeening" aria-expanded="false" aria-controls="collapseExample">
                    3. Keening
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseShiftings" aria-expanded="false" aria-controls="collapseExample">
                    4. Shiftings
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseMostOfYou" aria-expanded="false" aria-controls="collapseExample">
                    5. Most of You
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseJoysOfKin" aria-expanded="false" aria-controls="collapseExample">
                    6. Joys of Kin
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseKickingTheColdOut" aria-expanded="false"
                    aria-controls="collapseExample">
                    7. Kicking the Cold Out
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOrpheus" aria-expanded="false" aria-controls="collapseExample">
                    8. Orpheus
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseLakeRedman" aria-expanded="false" aria-controls="collapseExample">
                    9. Lake Redman
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseLongYear" aria-expanded="false" aria-controls="collapseExample">
                    10. Long Year
                </button>
            </p>

            <p>
                <button class="lyric-button btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseNoMeasures" aria-expanded="false" aria-controls="collapseExample">
                    11. No Measures
                </button>
            </p>
        </div>

        <!-- Lyrics Display -->
        <div class="col-lg-6 col-md-12 rounded lyrics-box">
            <h3 class="text-center"><u>Lyrics</u></h3>

            <div class="collapse lyric-collapse" id="collapseAWoman">
                <div class="card card-body rounded">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>A Woman</h3>
                            <hr>
                            <p>This falling backwards</p>
                            <p>This dim-lit room,</p>
                            <p>Smoke and shroud</p>
                            <p>Moon that held no face</p>
                            <p>And you were the smallest frame I saw</p>
                            <p>The nurse turns in the sailor's hands</p>
                            <p>The smallest woman, the smallest man</p>
                            <br>
                            <p>I don’t want just once for us</p>
                            <p>I don’t want just once for us</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Where’d you run?</p>
                            <p>Just a body that’s lingering on</p>
                            <p>There wells a water that congeals to your eye, and you falter</p>
                            <p>For somewhere within you</p>
                            <p>Is a time when he stood in your place</p>
                            <p>And felt a loss</p>
                            <p>From a love that had chose to move on</p>
                            <br>
                            <p>The light spoke the darkest of news to our home,</p>
                            <p>You were gone</p>
                            <p>I welled up the moment you moved,</p>
                            <p>wrapped in muslin</p>
                            <p>There you go</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseMacon">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Macon</h3>
                            <hr>
                            <p>Would you let go your plights?</p>
                            <p>Just be rid of your mind</p>
                            <p>And bear the lengths of another back road</p>
                            <p>For there is no sense in what's bound for Macon tonight</p>
                            <p>In your mothers hardest drive</p>
                            <br>
                            <p>Every terror's a coal respite restokes</p>
                            <p>And it leaps from eyes to the porch when you run out</p>
                            <p>In a rushing blindly forward just to drag him inside</p>
                            <p>Hear the morning in reprise</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Start to reel a while</p>
                            <p>Lose your town</p>
                            <p>An empty child</p>
                            <p>A Red Lion house</p>
                            <br>
                            <p>If honesty finds you out</p>
                            <p>Shove it down</p>
                            <p>I want that it be like it was</p>
                            <p>Was ever there fairness found?</p>
                            <p>Not once, not once!</p>
                            <p>I want that it be like it was..</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseKeening">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Keening</h3>
                            <hr>
                            <p>Some sanity’s last throes</p>
                            <p>The shadows tend to revolt</p>
                            <p>And listless the arms swing</p>
                            <p>As if they have finally broken out from contested control</p>
                            <br>
                            <p>But I am the same</p>
                            <p>I am still my own</p>
                            <p>But I could be wrong</p>
                            <p>See how he turns for far too long</p>
                            <p>I’m not my own</p>
                            <br>
                            <p>And surely your heart steers</p>
                            <p>for those whom you choose to reign it for</p>
                            <p>That it should bring you here</p>
                            <p>to send for the thundering blow and shake through the house it awoke</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Laid out on the lawn</p>
                            <p>I am still my own</p>
                            <p>But I could be wrong</p>
                            <p>See how the blurs are so prolonged</p>
                            <p>I’m not my own</p>
                            <br>
                            <p>And maybe I’ve gone too soon</p>
                            <p>Maybe I could be better</p>
                            <p>These stars spin me ‘round the room, like a stone to the driveway</p>
                            <p>And all your centered to</p>
                            <p>Is a planet shifting loose</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseShiftings">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Shiftings</h3>
                            <hr>
                            <p>Watch for despair has followed you out, so fast upon your heels</p>
                            <p>Your staggering work to grip the earth has left you struck to every nerve</p>
                            <p>And you returned for whom the strangeness lurks and is a commonness</p>
                            <p>Said, “come on down, the wind blows heavy now and you are overrun”</p>
                            <br>
                            <p>The strength of a woman to walk this yard, when at the door you cant explain</p>
                            <p>How something’s changed—the walls awake with shiftings of a wandering ghost</p>
                            <p>And the billows rose in asking where you’ll go now, should it all remain?</p>
                            <p>For what has begun, nothing’s won</p>
                            <p>But you can learn to cope this way</p>
                            <br>
                            <p>And now your stretch yearns</p>
                            <p>To find the breadth of relief</p>
                            <p>That anyone can just leave and be gone</p>
                            <p>A solemn mender</p>
                            <p>The final hold of release, and when it’s gone I will need it again</p>
                            <br>
                            <p>I wish for dreams, the glow of lights at sea,</p>
                            <p>I wish too many things</p>
                            <p>But i will bring that coast what’s left of me</p>
                            <p>And I will dream</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Darling, relent your restless arms</p>
                            <p>Come along just leave his room</p>
                            <p>He is strong, his mother’s strong, nothing's wrong the morning’s</p>
                            <p>Soon he’ll be home, he’s on his own, he is grown, just let him loose</p>
                            <p>He is strong, his mother’s strong, nothing’s wrong, he’s just like</p>
                            <p>You bent to heave a clambering heart</p>
                            <p>Rattled son, you have been harmed</p>
                            <p>But you’re strong, your child’s strong, it is wrong but carry</p>
                            <p>Through everything, your every part felt much more of hurt before any car the
                                metals
                                tore</p>
                            <p>You were gone, you have been wronged</p>
                            <br>
                            <p>Careless the ropes that wore to bone</p>
                            <p>Calloused my hands that never learned how to let go</p>
                            <p>Careless to kill the stars, a son</p>
                            <p>Calloused my will to never forgive what was done</p>
                            <p>If i could start to heal for once</p>
                            <p>Those labored eyes where all of my anger is lost</p>
                            <p>While any fervency is mine</p>
                            <p>I’ll make this right if I’m less alive when it’s done</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseMostOfYou">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Most of You</h3>
                            <hr>
                            <p>While you slept, Christmas came</p>
                            <p>A town moved onward</p>
                            <p>The dogs took the bedspace</p>
                            <p>And there you stretch, counting through</p>
                            <p>The things that keep you from losing today</p>
                            <br>
                            <p>But down in the hall, the creaks of floors</p>
                            <p>Your every intent to sing in a dark place</p>
                            <p>Is anything not leftover of us?</p>
                            <p>I can pretend, if you can’t return</p>
                            <br>
                            <p>Tell them most of you</p>
                            <p>Tell them most of you believes he’s gone</p>
                            <br>
                            <p>Careful you watch</p>
                            <p>Come on, lover, lead me to war</p>
                            <p>Cuz ive had enough of the ways im starting to lose hold of us</p>
                            <br>
                            <p>There the past’s warm embrace</p>
                            <p>The avid wanderer returns through the driveway</p>
                            <p>The trembling latch, shattered plates</p>
                            <p>No nothing comes back the least like it was</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>But down in the hall, the creaks of floors</p>
                            <p>Your every intent to sing in a dark place</p>
                            <p>Is anything not leftover of us?</p>
                            <p>I can pretend, if you can’t return</p>
                            <br>
                            <p>Tell them most of you</p>
                            <p>Tell them most of you believes he’s gone</p>
                            <br>
                            <p>Careful you watch</p>
                            <p>Come on, lover, lead me to war</p>
                            <p>Cuz I've had enough of the ways im starting to lose hold</p>
                            <br>
                            <p>As you’re keeping your head close</p>
                            <p>To the markings and stains from God only knows</p>
                            <p>Does it feel like I'm not there?</p>
                            <p>Does it feel like I'm not there?</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseJoysOfKin">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Joys of Kin</h3>
                            <hr>
                            <p>That train, the hounds, your core</p>
                            <p>What bellows out trying to figure out what's before?</p>
                            <p>With your head against the glass, do you ever tend to wander out and be gone?</p>
                            <br>
                            <p>Come now the joys of kin, as the warmest sound ever heard in your lasting years</p>
                            <p>For in my family's glow, I will not be ashamed of us</p>
                            <br>
                            <p>I've not let go of us, they found a way to burn through the nerve 'til we've
                                never
                                had</p>
                            <p>As they come to speak in tones like I have faced the facts, when anymore I,</p>
                            <p>I still wonder how it will work itself out where we're fine</p>
                            <p>And the headlights will turn through the snow in the blinds</p>
                            <br>
                            <p>The light shoots through the marks, like a million stars splintered out in a flash
                                and
                                flurr</p>
                            <p>To the specks of distant worlds</p>
                            <p>Such a smallness, life existing now on the glass you watch</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>I've not let go of us, they found a way to burn through the nerve 'til we've
                                never
                                had</p>
                            <p>As they come to speak in tones like i have faced the facts, when anymore I,</p>
                            <p>I still wonder how it will work itself out where we're fine, and the headlights will
                                turn
                                through the snow in the blinds</p>
                            <br>
                            <p>You are never very far off</p>
                            <p>You are never really gone</p>
                            <br>
                            <p>You came through my room, yet you were withdrawn</p>
                            <p>How's your hope?</p>
                            <p>Do the lights lie unstring, cuz it just seems wrong to ever be fine, when the man you
                                returned is the boy you refined?</p>
                            <br>
                            <p>And all the days that crept into your smile</p>
                            <p>Withhold from you the severance of time</p>
                            <p>And rid the town of every vacant sight</p>
                            <p>To be alone with you one more mile</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseKickingTheColdOut">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Kicking the Cold Out</h3>
                            <hr>
                            <p>It's hard to be stable I hope, because I've never been close</p>
                            <p>And it seems like insane arose to a prominent state,</p>
                            <p>like some horse jumped the gate</p>
                            <p>and it harnessed my leg</p>
                            <br>
                            <p>Collect me like dust at your table, on the long vacant space</p>
                            <p>where you draw out your shapes as you pass through your day</p>
                            <p>It's simple it seems</p>
                            <p>And the world may never be</p>
                            <p>Yet there's some found release in the floating debris</p>
                            <p>Don't settle for all you've felt if you've never felt like yourself,</p>
                            <p>because I lost that way</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>What wonder you are</p>
                            <p>You're kicking the cold out</p>
                            <p>unraveling strains</p>
                            <p>You spin through the yard, but it seems so hard when it's as a stage</p>
                            <p>'Til all of the crowd goes, you dance with your eyes closed,</p>
                            <p>Just forget that they're there</p>
                            <p>And some things remain strewn,</p>
                            <p>A brother of mine, stole</p>
                            <p>But you're proof that He's fair</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseOrpheus">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Orpheus</h3>
                            <hr>
                            <p>You were some course that offered me miles, a friend in my trials</p>
                            <p>And her, what she stirred, well it hurts of worthwhile</p>
                            <p>What if I stayed 'til old and im swollen in my veins,</p>
                            <p>where you could trace the man I've been who wore you thin</p>
                            <br>
                            <p>I love you the girl of my youth</p>
                            <p>Don't you wonder how</p>
                            <br>
                            <p>And the mornings that broke you down, you search for the boy you seldomly found</p>
                            <p>If your arms could just pull him out, he wants you still</p>
                            <p>Yeah, I always will</p>
                            <br>
                            <p>I'll miss your soul the moment it goes,</p>
                            <p>but I should have known just how much I've kept from those I know best</p>
                            <p>How selfish my crown</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Out in their lores for hours, I've had my fill</p>
                            <p>I took the worms for cowards, but how they kill</p>
                            <p>I look forward to life as the father of kids</p>
                            <p>Have you reserved my heart for this</p>
                            <p>Could you show me how?</p>
                            <br>
                            <p>Have I told you my honest doubts, well I'm still not sure I'll ever dry out</p>
                            <p>Cuz you'll be hard to do without</p>
                            <p>I'll want you still,</p>
                            <p>Yeah I always will</p>
                            <br>
                            <p>Cuz I'll miss your soul the moment it goes and slips through these folds</p>
                            <p>But how long will death take to make sense, when none can be found?</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseLakeRedman">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Lake Redman</h3>
                            <hr>
                            <p>I woke up this morning after you</p>
                            <p>I figured out how i would lose</p>
                            <p>The road takes me farther than i choose</p>
                            <p>And i go blind to the other man</p>
                            <br>
                            <p>As he was
                            <p>See how he never waits for more?</p>
                            <p>This heart isn't right—it never was</p>
                            <p>See how it severs every part of who you have loved</p>
                            <p>It's a long way back to you now</p>
                            <br>
                            <p>Whatever those waters seem to prove
                            <p>And what control i had thought i knew</p>
                            <p>Still all of our failings follow blood right through</p>
                            <p>Into the veins of a better man</p>
                            <br>
                            <p>As someone
                            <p>See how he never waits for more?</p>
                            <p>This heart isn't right—it never was</p>
                            <p>See how it severs every part</p>
                            <p>And still how it goes</p>
                            <p>But isn't it strange how i can be farther than you want</p>
                            <p>Yet be there the same</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>You found your sister there, at only four years old</p>
                            <p>At the bottom of the stairs she cracked her head and when she went your father met
                            </p>
                            <p>the escape of drunkenness</p>
                            <p>All my tries, dear, to not be the same</p>
                            <br>
                            <p>When it comes as the heaviest sheets</p>
                            <p>As the water before i can breath</p>
                            <p>And you look back—the way that it was</p>
                            <p>What is progress but means to be lost?</p>
                            <br>
                            <p>But peace is not absence of strife</p>
                            <p>Not the slumped walk and egress of war</p>
                            <p>But it comes as the presence of one</p>
                            <p>Who has ravaged all distance to me</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseLongYear">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>Long Year</h3>
                            <hr>
                            <p>There from the corner comes a laughter that you cannot contain</p>
                            <p>Amid all of your own doubts</p>
                            <p>Your salvation—what it is, what it seems, what it looks like</p>
                            <br>
                            <p>But all that enigmatic recourse</p>
                            <p>I see it before you</p>
                            <p>I know how you wake up with all that’s ever happened as all that's never done</p>
                            <p>It’s been a long year</p>
                            <p>Some part of you lingers to wait at the door</p>
                            <br>
                            <p>As all of us lower the old ways,</p>
                            <p>I hope that you feel light</p>
                            <p>But how do you find your place in this?</p>
                            <p>How is it normal</p>
                            <p>Fumbling with your legs on the same floor?</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>But all that enigmatic recourse</p>
                            <p>I see it before you</p>
                            <p>I know how you wake up with all that's ever happened as all that's never done</p>
                            <p>It's been a long year</p>
                            <p>Some part of you lingers to wait at the door</p>
                            <br>
                            <p>Where the three that were on your mind</p>
                            <p>Left you worried all the time</p>
                            <p>Were there in that picture when you came home that day</p>
                            <p>Left you rendered still without answer</p>
                            <p>How did it get there?</p>
                            <p>It just feels like someone saying goodbye</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="collapse lyric-collapse" id="collapseNoMeasures">
                <div class="card card-body">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h3>No Measures</h3>
                            <hr>
                            <p>You look to the storm with a shuddering, back from farther days</p>
                            <p>That you might have been through and yet you lose the path which you came from</p>
                            <p>When the obvious part you've learned is she will never fold, for your worst has shown
                            </p>
                            <p>But you bore your mistakes with another, that you offered to always find</p>
                            <p>You always tried
                                <br>
                            <p>It comes from the north as a hollowing, the chimes that shook you first</p>
                            <p>The times when the coffee takes so long to ever be raised to the muscles beneath your
                                face</p>
                            <p>They left you old somehow, like the kids who had pulled your sleeves and wore you
                                down, as they led you unmade</p>
                            <p>But you look farther out, to the holds of a state, and I could not get over it</p>
                            <p>Have I offered an honest life?</p>
                            <p>I always tried</p>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <p>Somehow all worth comes passing by before you rush outside</p>
                            <p>To say, "Once I'd known it, even owned, yet chased for my whole life"</p>
                            <p>And every ounce was you</p>
                            <p>So get up</p>
                            <p>Just get up! I can hear the bells stop, and bonds forgot</p>
                            <p>No measures must you ever take to find me here, still under the arbor</p>
                            <p>Well you're such a precious sight</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>

</div>

<!-- -------------------------------------------------------------- -->
<!-- End of lyrics for the album "Does it Feel Like I'm Not There?" -->
<!-- -------------------------------------------------------------- -->
`;

//***************************************************************
// End of lyrics for the album "Does it Feel Like I'm Not There?"
//***************************************************************
