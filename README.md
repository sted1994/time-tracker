# Summary

Time Trader is a tokenized platform where users are able to trade their time and expertise. By assisting other users you can gain tokens which you can then trade for the time of other users. The purpose of this application is to give users who would like to do something on their own(DIY) the ability to connect with subject matter experts by giving back and helping others.

### User Profiles

Users will be able to create a profile and advertise their areas of expertise, interests, references, profile photos, location(optional) and bio. Areas of expertise will be able to have 3 states, "verified", "un-verified", and "verification removed". References will need to be submitted from other users in the community. Interests can have a status of "looking for help" or "no help needed".

### User Interactions

#### "Tokenomics"

By interacting through video or audio call the assisting user acquires tokens based on the amount of time on spent on the call. Tokens are traded between users at a rate of 1 token for every minute the call is connected. Once a user completes their registration they will receive 15 complementary tokens which represents the amount of time someone would likely need for a smaller task or question.

#### Verification

After receiving assistance a user is then able to endorse the assisting users Areas of expertise. If a users area of expertise is endorsed once that expertise will receive a status of verified. If the user receiving assistance is not happy with the help they received they are able to dispute the assisting users areas of expertise. If a users area of expertise is disputed more than 3 times before receiving a status of verified a user will no longer be able to claim this area of expertise. Once a user has received the status of verified they will need to maintain an appropriate ratio of endorsements and disputes.

#### Interests

Once a user changes an interests status to looking for help their profile will be added to a job board style feed. Users interested in assisting in this area are then able to browse this list indicate their willingness to help. The user interested in receiving assistance is then able to select from the list of those interested in helping and submit a request through the users profile.

### Use Case

````
user_1: {
    areaOfExpertise: [{field: MECHANIC, status: VERIFIED, endorsementRatio: 0.8}],
    interests: [{field: CARPENTRY, status: HELP}]
}
user_3: {
    areaOfExpertise: [{field: CARPENTRY, status: VERIFIED, endorsementRatio: 0.99}],
    interests: [{field: TAX, status: HELP}]
}
user_3: {
    areaOfExpertise: [{field: TAX, status: VERIFIED, endorsementRatio: 0.86}],
    interests: [{field: MECHANIC, status: HELP}]
}
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
```
````
