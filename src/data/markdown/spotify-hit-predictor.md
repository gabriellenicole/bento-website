## Spotify Hit Predictor: Analyzing What Makes a Hit Song

This machine learning project aims to predict whether a song will be a hit or not based on its audio features provided by the Spotify API. By analyzing characteristics such as danceability, energy, tempo, and valence, we built models that can identify patterns common in hit songs.

### Dataset

The dataset used for this project consists of:

- 5,000+ songs from Spotify's API
- Audio features for each song (danceability, energy, loudness, etc.)
- Billboard Hot 100 data to label songs as hits or non-hits
- Release date information spanning from 2010 to 2023

### Methodology

We implemented and compared several machine learning algorithms:

1. **XGBoost**
2. **Naive Bayes**
3. **Decision Tree**
4. **Random Forest**

Each model was evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC

```python
# Feature importance analysis
import matplotlib.pyplot as plt
import seaborn as sns

# Get feature importances from the Random Forest model
feature_importances = rf_model.feature_importances_
features = X.columns

# Sort features by importance
sorted_idx = feature_importances.argsort()
plt.figure(figsize=(10, 8))
plt.barh(range(len(sorted_idx)), feature_importances[sorted_idx], align='center')
plt.yticks(range(len(sorted_idx)), [features[i] for i in sorted_idx])
plt.title('Feature Importance')
plt.tight_layout()
plt.show()
```

## Key Findings

Our analysis revealed several interesting insights:

1. **Danceability** and **Energy** are the most predictive features for hit songs
2. **Acousticness** tends to be lower in hit songs compared to non-hits
3. **Valence** (musical positiveness) shows a bimodal distribution in hit songs
4. Seasonal trends affect what types of songs become hits

## Model Performance

The Random Forest model achieved the highest performance with:

- 78.3% accuracy
- 0.81 ROC-AUC score
- 0.76 F1 score

## Applications

This model can be used by:

- Music producers to analyze songs before release
- Record labels to identify potential hits
- Streaming platforms to improve recommendation algorithms
- Artists to understand current trends in successful music

## Future Work

- Incorporate lyrical analysis using NLP
- Add genre-specific models
- Include social media and streaming data as features
- Develop a real-time prediction API
