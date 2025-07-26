---
pathSegment: "solving-the-product-market-fit-equation"
date: "2025-07-13"
title: "The product market fit equation"
---

Concept:
  - Equations model things. They predict something. 
  - There exists a function that predicts whether someone will buy something. This function take's as inputs a person's needs and the set of features that comprise the product.
  - Each person has a different threshold for what they are willing to pay for something as a function of what their time is worth or how much they value experiences and the particular experience that you provide.
  - Functions like f(x) = 2x + 1 have a fixed set of solutions. It could model your current speed if you increased your speed by 2mph per minute starting at 1mph. A functon is fundamentally saying, given these inputs this is the output.
  - At the start of an business idea, you do not not know the function that models a customer's willingness to buy. The function for a particular person such as myself is the a mixture of weighted needs. The needs form an interface that could be met in various ways. If I have a need to have fun, that could be satisifed in many ways.
  - Example functions:
    - An example function might be my willingness to buy a vacuum cleaner. My need function for a utility product might be:
      needCalculation(timeSaved, amountHealthImproved, humanEnergySaved, enjoymentOfTask)
    This determines how much of a problem it is for me if not solved.
    - The function that determines my willingness to buy is determined by:
    willingnessToBuy(features, valueOfTime, valueOfEnergy, price, productLifeSpan)
    - This function can be broken into parts: features, selfWorth, cost. Do the features meet your needs and does the price given your value of time justify the purchase?
  - If someone was trying to model my buying behavior, they might have a function that overweights certain features that I don't care about. Or they have a function that takes as input features that I don't care about at all but they think predict my buying behavior. Even if a product could save someone time and energy does not mean that a particular consumer is willing to buy it. Their selfworth may indicate that it's too expensive. If one hour of my time is worth $10,000 then of course, I'm going to buy anything that can save me more time, but if I'm getting minimum wage, then I'll just do it myself the hard way.
  - In reality, this function is not made to model a single consumer, it's made to model the ideal consumer. Ideally the function that understands the weighted needs of the most amount of consumers that can fit the thing that you are trying to ultimately build.
  - So you are trying to find the function that correctly models someone's needs and how much they are willing to pay to get those needs met. The implementation of that function is your product. If you model the function incorrectly, you may implement unneccessary features or you may not implement the most important ones. Modeling this function correctly starts with understanding your customer. 
  - The only way to understand if your function correctly models their willingness to buy is to actually run the function, see if the customer will buy your product. The hard way to do this is to actually build the product and then test to see if your customer wants it which you will likely find that you built unneccessary features people don't use and you overestimated the features you thought people cared about. The correct function lies in the mind of the customer. There's a few ways to extract this function.
    - Ask them what the function is - that is, ask them what their needs are how much they are willing to pay to have those needs met. The answer could be $0.
    - People's time is valuable and they might not want to spend it answering your questions. You can get creative with how you get these questions answered.
    - Note that the answer to their questions may be biased, they be "too nice" and say they they would like a certain feature, but only when the product is on the shelf are they actually interested.
    - Incentivize them to answer your question.


Outline:
 - What is product market fit?
 - Why do people buy things?
 - What is the function that models my own wants?
 - What is the function that models my willingness to pay to have my wants satisifed?
 - The function exists in the consumer's mind
 - Testing the function
 - Iterate


 - Functions model / predict things. Finding the right function. 
   - Implementation doesn't matter outside of cost.
 - Weighted wants
   - the needs fn
   - what are the inputs
 - Willingness to buy
  - is it worth it?
- The function lies in the consumer's mind
  - Testing the function
    - w/ and w/ out the implementation
- The implementation only affects cost
- Iterate

# Post
Let's start by first understanding how product market fit was originally defined by Andy Rachleff. Product market fit is "a unique product offering that people desperately want." This is ultimately the goal of creating businesses and products, to create something people are willing to pay for. You know you haven't found product market fit if nobody is willing to buy your product. So, how do you find product market fit and what does it mean to try and "find" it?

When first have an idea for a product, you most likely do not also know the function that predicts whether someone is willing to pay for it. At best, you have a theory of what that function is. To find this function, you must understand why it is that people buy things at all.

People buy things for two reasons, either for utility or for experience. In buying for utility, you are buying to save yourself time and energy. This time and energy may be either used to save yourself more time and energy or can be spent on experience. In buying for experience, you are just buying for the experience. A utility purchase would be buying a vacuum while an experential one, a concert.

Based on each person's life, there exists areas of improvement whether that be to save them time in energy in what they do daily or to enhance their experience. To improve their situation, they have two choices, do it themselves or pay for something that does it or helps them do it. The set of things that a person would want to improve are their wants.

The first half of finding the function that predicts a person's willigness to buy is identifying if they even want the product. For example, let's take a fictious person Joe who works at Starbucks. Joe may want to spend less time and energy cleaning his house every week. It's boring and can take up the a couple hours in the morning. There is a function that models how much Joe wants to improve this problem. This function may be represented as: degreeOfWant(energySpent, healthSpent, timeSpent, enjoymentOfTask, difficultyOfTask). Inputs are areas of improvement in Joe's life weighted by how much he cares about those different facets. The output is how much he wants to solve the problem.

If I'm building a product that that is trying to sell to Joe, I may not fully understand what he wants or how much he wants what. If I'm trying to sell him a vacuum I may think that the most of the pain that Joe experiences in cleaning is from vacuuming when in reality it's getting the stains out of the carpet from his young children. My function would incorrectly predict his degree of want. 



Whether a customer wants a product is independent of whether a customer is willing to pay for it. If a customer had to stack rank all existing products on the market independent of price, the customer may not be willing to pay for any of the top 10 things because they can't afford it. 





**References:**

- [Product Market Fit Definition](https://en.wikipedia.org/wiki/Product-market_fit)
- 
