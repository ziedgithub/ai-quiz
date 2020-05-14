import QuizTypes from "./quiz.types";
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = {
  quizes: [
    {
      question: "1.	What is true about deductive reasoning:",
      responses: [
        {
          label: "It uses a top-down approach",
          valid: true,
          checked: false
        },
        {
          label: "the conclusions are probabilistic",
          valid: false,
          explication: "This is inductive reasoning. In deductive, reasoning uses available facts, information, or knowledge to assume a valid conclusion",
          checked: false
        },
        {
          label: "It moves from generalized statement to an effective conclusion ",
          valid: true,
          checked: false
        },
        {
          label: "fast and easy, as we need evidence instead of true facts",
          valid: false,
          explication: "Wrong. In contrast, it is difficult because we need facts to be true",
          checked: false
        }
      ]
    },
    {
      question: "2.	Univariate, bivariate and multivariate data differ in:",
      responses: [
        {
          label: "The number of dependent variables",
          valid: true,
          checked: false
        },
        {
          label: "How to deal with causes and relationships",
          valid: false,
          explication: "Wrong, because in univariate data we have one variable. Our main purpose is to describe data and find patterns",
          checked: false
        },
        {
          label: "How to perform analysis in data",
          valid: true,
          explication: "That’s right. The ways to perform analysis in data depends on the goals we want to achieve",
          checked: false
        }
      ]
    },
    {
      question: "3. What is skewed data:",
      responses: [
        {
          label: "Normal distribution of data",
          valid: false,
          checked: false
        },
        {
          label: "Not symmetric distribution",
          valid: true,
          checked: false
        },
        {
          label: "Any data that contains outliers",
          valid: false,
          checked: false
        }
      ]
    },
    {
      question: "4. Data wrangling:",
      responses: [
        {
          label: "Known as data Munging",
          valid: true,
          checked: false
        },
        {
          label: "Convert raw data to an appropriate form to advanced tasks",
          valid: true,
          checked: false
        },
        {
          label: "Last step in Data preprocessing",
          valid: true,
          checked: false
        },
        {
          label: "Convert raw data to a clean form",
          valid: false,
          explication: "Wrong. This is preprocessing",
          checked: false
        },
        {
          label: "Convert data from a given form to more usable and informative form",
          valid: false,
          explication: "Wrong, this is Processing of data",
          checked: false
        }
      ]
    },
    {
      question: "5. Independent variable in a dataset:",
      responses: [
        {
          label: "Feature",
          valid: true,
          checked: false
        },
        {
          label: "Input",
          valid: true,
          checked: false
        },
        {
          label: "Label",
          valid: false,
          explication: "Wrong. This is called dependent variable",
          checked: false
        },
        {
          label: "Outcome",
          valid: false,
          explication: "Wrong. This is called dependent variable",
          checked: false
        }
      ]
    },
    {
      question: "6. Methods to detect and remove noise in a dataset:",
      responses: [
        {
          label: "K-fold validation",
          valid: true,
          checked: false
        },
        {
          label: "One class SVM",
          valid: true,
          checked: false
        },
        {
          label: "Neural network",
          valid: true,
          checked: false
        },
        {
          label: "Auto encoder",
          valid: true,
          checked: false
        },
        {
          label: "Clustering",
          valid: true,
          checked: false
        },
        {
          label: "Density-based algorithms",
          valid: true,
          checked: false
        },
      ]
    },
    {
      question: "7. How can we handle missing data effectively:",
      responses: [
        {
          label: "Always delete data rows with missing values ",
          valid: false,
          explication: "We can’t do this all the time because we will lose a lot of information; it is possible only when percentage of missing values is (<5%) or almost values in the row are missing",
          checked: false
        },
        {
          label: "Drop column with missing data and pretend that the variable does not existed",
          valid: true,
          explication: "Right in condition that 15% of data is missing in that column",
          checked: false
        },
        {
          label: "Replace the missing value with the previous or next value",
          valid: false,
          explication: "This does not solve the problem, because we risk to have missing value also in the next or previous value",
          checked: false
        }
      ]
    },
    {
      question: "8.	Data Leakage is",
      responses: [
        {
          label: "Less data",
          valid: false
        },
        {
          label: "The training data contains information about the target which will not be available when predicting.",
          valid: true
        },
        {	label: " It leads to poor performances in on the training set, but high prediction performances",
          valid: false,
          explication: "In contrary"
        },
        {	label: "Not carefully distinguish training data from validation data",
          valid: true
        },
        {	label:"Variables updated (or created) after the target value is realized is included",
          valid: false,
          explication: "To prevent this type of data leakage, any variable updated (or created) after the target value is realized should be excluded."
        }
      ]
    },
    {
      question: "9.	What is true about the following statements",
      responses:[
        {
          label:" If the data is skewed then, missing values can be imputed or replaced by mean of the all observations of the dataset",
          valid: false,
          explication:"This is the case for normally distributed data."
        },
        {
          label:"If the data is skewed then, it is better to impute or replace the missing values by Median of all observations of the dataset.",
          valid: true
        },
        {
          label: "Median is the middle value in a dataset",
          valid: true,
          explication: "Alright. Mean is the average of a dataset, and mode is the most frequently observation in a dataset"
        }
      ]
    },
    {
      question: "10.	What are dummy variables",
      responses:[
        {
          label: "New variables created from categories presented in categorical variable",
          valid: true
        },
        {
          label: "Variables created to transform categorical data to numbers",
          valid: true
        },
        {
          label: "Independent variables",
          valid: false,
          explication:" They could be applied to both dependent and indepedent variables"
        },
        {
          label: "Created using one hot encoding",
          valid: true
        }
      ]
    },
    {
      question:"11.	Data Binning",
      responses:[
        {
          label:" Transform categorical variables into numerical",
          valid:false,
          explication:"In  contrary"
        },
        {
          label:"Data processing method",
          valid:false,
          explication:" It is data preprocessing"
        },
        {
          label:"Quantization technique to handle continuous variables",
          valid:true
        },
        {
          label:"Fixed-width binning is based on domain knowledge to create fix width bins",
          valid:true
        },
        {
          label:"In fixed-width binning, data distribution decides bin ranges for itself",
          valid:false,
          explication:"Wrong. This is called adaptive binning"
        }
      ]
    },
    {
      question:"12.	What is true about normalization",
      responses:[
        {
          label:"Normalization is the process of rescaling feature so that they will follow normal distribution",
          valid: false,
          explication:" Of course not. This is called standardization"
        },
        {
          label:"Normalization shrinks the range of  data so that the range is fixed between 0 and 1.",
          valid:true
        }
      ]
    },
    {
      question:"13.	In the case of imbalanced data",
      responses:[
        {
          label:"Accuracy is the best metric to use",
          valid: false,
          explication:" It can be very misleading. Althought, we can use confusion matrix, precision, recall, F1:score"
        },
        {
          label:"Decision trees frequently perform well on imbalanced data",
          valid:true
        },
        {
          label:"Resampling techniques like oversample minority class or under sample majority class are beneficial in case of imbalanced data",
          valid:true,
          explication:"Warning!! oversampling should be done after data splitting into test and train"
        },
        {
          label:"SMOTE uses KNN to generate synthetic training data",
          valid: true
        }
      ]
    },
    {
      question:"14.	What is true about feature extraction and feature selection",
      responses:[
        {
          label:"Feature selection is choosing some feature based on domain knowledge",
          valid:true
        },
        {
          label:"Feature extraction is creating new data from original one",
          valid:true
        },
        {
          label:"Feature selection create new subset of new data while feature extraction extract some variables from dataset",
          valid: false
        }
      ]
    },
    {
      question:"15.	what is mulicollinearity?",
      responses:[
        {
          label:"It means that two variables are parallel and not related",
          valid: false,
          explication:"It is totally the contrary. it means they arehighly correlated"
        },
        {
          label:" creating new variable from existing one could cause colinearity",
          valid:true
        },
        {
          label:"High correlation",
          valid:true,
          explication: "We could discover correlation between two variables with a scatter plot, and strength of correlation with the correlation matrix"
        },
        {
          label:"Reduce multicolinearity by adding more data",
          valid:true
        }
      ]
    },
    {
      question:"16.	Principal component analysis, PCA",
      responses:[
        {
          label:"is a technique of feature selection",
          valid:false,
          explication:"This is a very common error. PCA select some variables from original dataset then create new ones"
        },
        {
          label:"Searches for a linear combination of variables that best separates 2 classes",
          valid:true
        },
        {
          label:"It is a supervised algorithm that reduce dimensionality and classify data",
          valid:false,
          explication:"PCA is usupervised and dedicated to dimensionality reduction only"
        },
        {
          label:"Standardization is a must before PCA",
          valid:true,
          explication:"Scaling data is a requirement for the optimal performance of PCA"
        },
        {
          label:"The core of coponent analysis is built on the concept of eigenvectors and eigenvalues",
          valid:true,
          explication:"The technique of Eigenvectors and Eigenvalues are used to compress the data.Eigenvectors are used to make linear transformation understandable. "
        }
      ]
    },
    {
      question:"17.	Linear Discriminant analysis",
      responses:[
        {
          label:"It is a way to reduce ‘dimensionality’ while at the same time preserving as much of the class discrimination information as possible.",
          valid:true,
          explication:"Perfectly right. LDA is a supervised algorithm that takes into consideration the class label"
        },
        {
          label:"Performs better  when we have few samples per class",
          valid:false,
          explication:"PCA is better in this case. Whereas LDA works better with large dataset having multiple classes"
        },
        {
          label:"It finds centroid for each class then projects data points on a line so that clusters are as separated as possible",
          valid:true
        },

        {
          label:"Unlike PCA. It makes assumptions about normally distributed classes and equal class covariances",
          valid:true
        }
      ]
    },
    {
      question:"18.	Regression analysis",
      responses:[
        {
          label:"It's all about finding relationship between dependent variables and independent variables",
          valid:true
        },
        {
          label:"Applicable only if the solution is linear",
          valid:true
        },
        {
          label:"Independent variables may be continuous or discrete, while dependent variable is discrete",
          valid:false,
          explication: "Independent variables may be continuous or discrete, while dependent variable is continuous"
        },
        {
          label:"Logistic regression is a classification algorithm where dependent variable is binary.",
          valid:true
        },
        {
          label:"In the Polynomial Regression, the best fit line is a straight line",
          valid:false,
          explication:"Nope! it can be a curve line which can fit the model perfectly"
        },
        {
          label:"Stepwise regression fits the regression model by adding/dropping predictors on each step based on a specified criterion.",
          valid:true,
          explication:"It aims to maximize the prediction power with minimum number of predictors."
        }
      ]
    },
    {
      question:"19.	What are regression loss functions?",
      responses:[
        {
          label:"Mean Square Error (L2 loss)",
          valid:true,
          explication:"It is a measure of how close a fitted line is to actual data points."
        },
        {
          label:"Root Mean Square Error",
          valid:false
        },
        {
          label:"Mean Absolute Error(L1 loss)",
          valid:true,
          explication:"It measures the magnitude of error without considering their direction. MAE is more robust to outliers since it does not make use of square."
        },
        {
          label:"Huber Loss",
          valid:true,
          explication:"It is less sensitive to outliers in data. it is an Absolute error but when the Error is small then it becomes MSE"
        },
        {
          label:"Log-Cos h Loss",
          valid:true,
          explication:"Log-cosh is the logarithm of the hyperbolic cosine function of the prediction error."
        }
      ]
    },
    {
      question:"20.	Sigmoid function",
      responses:[
        {
          label:"It takes real value as an input and gives probability which is in between 0 and 1",
          valid:true
        },
        {
          label:"It is linear in nature",
          valid:false
        },
        {
          label:"It convert high values to 0 and low values to 1",
          valid:true
        }
      ]
    },
    {
      question:"21.	Logistic regression",
      responses:[
        {
          label:"Linear relationship between dependent and independent variables is required",
          valid:false
        },
        {
          label:"The independent variable should not be correlated with each other",
          valid:true
        },
        {
          label:"The data is modeled using a straight line",
          valid:false,
          explication:"The probability of events is represented as a linear function of a combination of independent variables"
        }
      ]
    },
    {
      question:"22.	KNN classifier",
      responses:[
        {
          label:"assumes that similar things exist in close proximity",
          valid:true
        },
        {
          label:"For categorical variables it uses Euclidean, Manhattan or Minkowski distances",
          valid:false,
          explication:" Those distances are used for numerical variables. However with categorical variables, the hamming distance must be used."
        },
        {
          label:"It is an eager learner",
          valid:false,
          explication:"It is a lazy learner. Because it doesn’t learn a discriminative function from the training data but memorizes the training dataset instead."
        },
        {
          label:"It does require a lot of training to find the nearest neighbor",
          valid:false,
          explication:"There is no training time in KNN. Simply because it is lazy :p"
        },
        {
          label:"It doesn't work well when the number of inputs is very large neither with high dimensional data",
          valid:true
        }
      ]
    },
    {
      question:"23.	Naive bayes (NB)",
      responses:[
        {
          label:"Assumes that all features are independent of each other",
          valid:true,
          explication:" Well that's the secret behind naive adjective. ;)"
        },
        {
          label:"It is a discriminative classifier",
          valid:false,
          explication:"It is a generative classifier. It ?learns the joint probability distribution p (x, y). It predicts the conditional probability with the help of Bayes Theorem. A Discriminative model ?models the decision boundary between the classes. A Discriminative model ?learns the conditional probability distribution p (y |x)."
        },
        {
          label:"Sometimes it become unable to make a prediction",
          valid:true,
          explication:"when the test data contain a categorie which didn't exist in training data"
        }
      ]
    },
    {
      question:"24.	Tree-based models",
      responses:[
        {
          label:"It uses many trees, and it makes a prediction by averaging the predictions of each component tree. ",
          valid:false,
          explication:"This is random forest. They perform better than one decision tree"
        },
        {
          label:"Calculate the probability of a given record and classify it by assigning it to the most likely class",
          valid:true
        },
        {
          label:"It is a parametric model",
          valid:false,
          explication:"It is non parametric model"
        },
        {
          label:"A very good classifier with continuous data",
          valid:false,
          explication:"It performs better with categorical data. But with continuous data it uses the variance to choose the best split with preference to lowest variance."
        },
        {
          label:"Underfitting is when a decision tree fails to capture important distinctions and patterns in the data, so it performs poorly even in training data.",
          valid:true,
          explication:"overfitting is where a model matches the training data almost perfectly, but does poorly in validation and other new data."
        }
      ]
    },
    {
      question:"25.	How to deal with categorical variables",
      responses:[
        {
          label:"In one hot encoding there is no ordering in the categorical data.",
          valid:true
        },
        {
          label:"One hot encoding assigns each unique value to a different integer.",
          valid:false,
          explication:"This is label encoding. While one hot encoding creates new columns indicating the presence (or absence) of each possible value in the original data."
        },
        {
          label:"Label encoding replaces each categorical value with the number of times it appears in the dataset",
          valid:false,
          explication:"It is Count encoding."
        },
        {
          label:"Catboost encoding replaces a categorical value with the average value of the target for that value of the feature.",
          valid:false,
          explication:"Wrong. This is called target encoding"
        },
        {
          label:"Target encoding replaces a categorical value with the average value of the target for that value of the feature.",
          valid:true
        }
      ]
    }
  ],
  submitted: false
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.SET_CHECKBOX:
      const {checked, quizIdx, optionIdx} = action.payload;
      let newState = cloneDeep(state);
      newState.quizes[quizIdx].responses[optionIdx].checked = checked;
      return newState;
    case QuizTypes.SET_SUBMITTED:
      const {submitted} = action.payload;
      return {
        ...state,
        submitted
      };
    default:
      return state;
  }
};

export default quizReducer;