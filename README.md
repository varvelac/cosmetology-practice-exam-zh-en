# cosmetology-practice-exam-zh-en
Sloppy, poorly planned app that has english/chinese translations of the CA Cosmetology Exam. has a couple neat features like unformatted list parsing.

# why poorly planned
Though the app is entirely functional, I initially thought that there would be a monolith of a test of 2000 questions coming in 2 files(2000 english and 2000 chinese).    This ended up not being the case.  My wife, who is the sole reason for creating this app, and therefore the sole source of ground truth, did not inform me of how many 50 question chunked up files were to be used.  You may think, well, when you understood that there was going to be a bit more complexity, why did you not refactor for a more convenient way of loading questions.  Possibly by externalizing the dang questions.  Well, dear reader, my wife is not a project manager, so she has no idea how important it is to know about updates ahead of time.  Each additional file added came with the thought that this would be the last. This was a painful app.  not because it needed to be, but because of a non-technical person giving business reqs.

# did you really write this novel to dog on your wife's lack of technical project management experience?
yes.  because if I don't, that means that means I am responsible for all the wasted time spent re-deploying an entire app rather than just updating a free database of questions.  And that just won't do.  Next time I'll be using a SSR framework like next.js or something.

# dependencies
-npm install
-maybe a firebase install type thing

# run locally
-ng serve

# update and deploy
-ng build
-firebase deploy
