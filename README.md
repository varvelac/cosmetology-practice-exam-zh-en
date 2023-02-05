# cosmetology-practice-exam-zh-en
Sloppy, poorly planned app that has english/chinese translations of the CA Cosmetology Exam. has a couple neat features like unformatted list parsing.

# why poorly planned?  why a billion files with ranging file naming conventions?
It's complicated.  At the time, I thought this was going to be a truly 1 page app, so i didn't make a plan for services.  
I just tucked a couple files in the assets folder.  I also was sloppy in the components.  
I had a general idea, but the scope just started growing.  I also didn't stick to much typescript standards.  
I thought this was a one night type thing.  Each new file or feature that was included added to the complexity and need for refactor.  
I thought the test exam this was aiding was coming up soon, so I never wanted to invest the time to make this clean. 
All in All, this is not representative of my work.  this is a reminder to myself to always plan as if it was a real project with scale.  
Just yesterday, I saw some python code I wrote:

y = some data frame column names
x = some data frame column value_counts()

plot('barplot',
  y = x,
  x = y,
  data = data,
  etc
)

the heck is wrong with me?


# dependencies
-npm install
-maybe a firebase install type thing

# run locally
-ng serve

# update and deploy
-ng build
-firebase deploy
