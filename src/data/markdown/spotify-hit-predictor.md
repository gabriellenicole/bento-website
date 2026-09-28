**tl;dr** can a computer tell if a song will be a hit just from how it sounds? kind of!

## the idea

spotify gives every song a bunch of audio features: danceability, energy, tempo, valence (how happy it sounds), and more. we took thousands of songs, labeled the hits using the billboard hot 100, and trained models to guess which is which.

## the contestants

decision tree, naive bayes, logistic regression, XGBoost and random forest.

the winner: **random forest**, with an AUROC of about 0.90 (XGBoost was right behind at 0.89). the decision tree came last at 0.75.

## what we found

- **danceability** and **energy** matter the most. hits want you to move.
- hits tend to be less **acoustic**.
- happiness is split: hits lean either pretty happy or pretty sad, less often in between.

## if we did it again

add the lyrics (NLP), train separate models per genre, and throw in streaming and social data.
