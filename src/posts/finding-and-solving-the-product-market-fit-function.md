---
pathSegment: "finding-and-solving-the-product-market-fit-function"
date: "2025-07-13"
title: "The product market fit function"
---

Concept:


  - **Modeling**
    - Solving an equation is finding all the inputs that make the equation true.
      - Different permutations of inputs can have the same solution
      - Incorrect equations exist and have no solutions
    - Equations represent the how inputs relate to eachother and the output.
      - To model something is to predict it.


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
 - There exists an equation that predicts product market fit.
 - Why do people buy things?
 - What is the function that models my own wants?
 - What is the function that models my willingness to pay to have my wants satisifed?
 - The function exists in the consumer's mind
 - Testing the function
 - Iterate

Outline 2:
  - Assert that there is an equation that predicts customers willingness to buy which you can use to determine if you've reached product market fit. Thinking of the equation as a function that takes some inputs and predicts willingness to buy.
  - Defining the inputs
  - Defining the impl
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

There exists a function that predicts a person's willingness to buy a product. A business who sells products must find this function to be successful. 

The function takes as input the product and spits out whether a person is willing to buy it. Although this appears as one input, it's helpful to see the product as being comprised of a set of variables, or features. Just like regular mathematical functions, there can be many inputs that have negligible impact to the output. In our case, there may be many features of a product that a person doesn't care about. Seeing the input as many inputs allows us to not throw the baby out with the bath water. There may be some features that a person cares about in a product and others that they don't. How do we find the inputs that signficantly impact the output in a positive way?

Searching for the high impact inputs requires a deeper understanding of the output that we are trying to predict, a customer's willingness to buy. What makes a person willing to buy anything? What is buying?

A purchase is an exchange of money for a product or service. It's criticial to understand what it is that they are exchanging for what. Money is a representation of time and energy and is earned by expending those two things. It can be exchanged for two things: something that can be used to save you time and energy, or an experience. For example, buying a vacuum cleaner versus purchasing concert tickets. What makes people willing to make this exchange? Let's focus on the purchase a person would make to save them time and energy.

To understand whether they will buy your product, you first have to understand how valuable they perceive their time to be. A person making minimum wage is going to be much less likely to buy a $1,000 vacuum that saves them an hour worth of work a week, while a billioniare wouldn't hestitate. Every hour saved is extremely valuable to them. Secondly, you have to understand how much time and energy the product would save them. For simplicity, ignoring the enjoyment of the task, a person would be more likely to buy a product given that they spent less time and energy earning the money as they will save by using the product.

The areas of improvement, or where time and energy could be saved, in a person's life can be thought of as their needs. Their needs is what weights the impact of the inputs on the output. It is what determines what inputs actually matter. Their needs being multipled by the inputs and correlated to the other inputs is what comprises the function, this is the implementation. Their needs and the implementation of the function lives a person's mind. Without being them, we can only approximate what their needs may be.

To determine a person's needs requires interacting with their mind and observing how they react. The two things we are trying to extract out are: what are their needs and do our inputs actually satisify their needs? We may perfectly understand their needs but build a product that actually doesn't meet their needs. The function would take as input your product and all of the features would just be weighted down to zero as no needs were met.

There are many modes of interacting with a person to help build your function:
- physically asking
- selling the product
- observing them use the product
- questionaire
- waitlist

You may be able to build a cheap approximation of their needs without first building the product. Building the product can often be the most expensive part and you don't want to find out after the fact that the function  was existed soley in your mind does not actually predict their willingness to buy.

**References:**

- [Product Market Fit Definition](https://en.wikipedia.org/wiki/Product-market_fit)
- 
