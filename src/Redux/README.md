# Redux Implementation

## What 'Is' Redux?

Redux is a widely used implementation of the [flux architecture](<https://en.wikipedia.org/wiki/React_(web_framework)#Use_of_the_Flux_architecture>) that centralizes and organizes your app's state.

## Why Use Redux?

Pro: It basically lets any component read/write that centralized state (automatically triggering updates to other components); as a consequence, it lets you drastically reduce the amount of threading of data between components using props/callbacks. This massively simplifies refactoring for medium-to-complex web apps.

Con: redux adds a fair amount of boilerplate and takes some time to get used to. However, it's worth it in the long run and react hooks has greatly improved (viz. reduced) the required boilerplate.

## Quick Tutorial

### Key Terminology

Skip this section if you're NOT a beginner.

A redux architecture consists of the following pieces of terminology: 'store', 'reducers', 'selectors' and the 'dispatching' of 'actions'.

### Store

The 'store' is just redux's wrapper around a single central js object. It represents the [SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth) for the app's state. The terms 'store' and 'state' are sometimes used interchangeably. Redux is integrated into the react app so that changes to the store trigger corresponding re-renderings of the app's appearance (much the way changes to a react component's props/state trigger re-renders of that component.

### Reducers

We define our store by defining a 'reducer' function. This reducer function takes two arguments:

1. state: a js object representing the present state of the app,
2. action: a js object that contains the information needed to update the app's state.

The 'action' object always has a `type` property that takes a string-like value, and, optionally, a `payload` property that can take any value. The main body of a reducer function takes the form of a switch statement. When an action gets 'dispatched' somewhere in the app, the action gets passed to the reducer function we define and, when its type property matches a section of the switch statement, a block of code is fired that updates the state. A simple store that tracks just two properties for a user and email might have a reducer like the following

```ts
export function AppReducer(
  state = { username: 'unknown', email: 'unknown' },
  action: { type: 'SET_USER'; payload: string } | { type: 'SET_EMAIL'; payload: string }
) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      };
    }
    case 'SET_EMAIL': {
      return {
        ...state,
        email: action.payload
      };
    }
    default:
      return state;
  }
}
```

Notice that the reducer does not mutate the state object but first copies state using the spread operator followed by a change to one (or more) properties. This is important. Redux will only trigger rerenderings when the entire object changes!

In practice, the store is broken into separate objects that can be updated indepedently. This helps with code clarity and helps keep the app efficient by not requiring copies/rerenders across the entire app for even trivial updates. To accomplish this, we define multiple reducer functions in practice, and then combine them into a single store-defining reducer function using a tool provided by the redux library called `combineReducers`.

### Beware the Word 'type'!

Quick note: beware that use of the word 'type' can be confusing when learning redux with typescript because we need to distinguish between:

1. the _property_ of the js object that we call 'action', which is always labeled 'type', and
2. the typescript type of the action.

### Creating Actions

As mentioned, actions are just js objects of the form `{type: string; payload?: any;}`. Redux provides a `dispatch` function that one uses to pass an action through the app's reducer function (thereby updating the store in general and triggering an associated re-render).

Because we want to define each action in coordination with the reducer function that will process that action, we want to keep tight and centralized exactly what actions our app can produce. As such it is considered good practice in redux codebases to avoid calling `dispatch` with a raw js object (e.g. `dispatch({type: 'SET_USER', payload: 'harry'})`). Instead, it's more common to define a function that returns an action (e.g. `dispatch(setUser('harry'))`). Such a function is called an 'action creator', and is typically defined in a file/folder close to the file/folder where the reducer is defined that will process the action created by that function.

It is also common practice to define the `action.type` property using enums instead of strings for added tightness.

In this repo, we're taking a class-based approach to action creators as this provides a convenient means of defining a constructor for objects of the form `{type: enum, payload: any}` that, being a class, can also be used as a typescript type.

### Selectors

Once the store is set up, and one is able to update it by dispatching actions, we now need to connect the store to act like props in our components. I.e. just as a component will re-render when its props changes, so we want the component to re-render when specific properties of our store changes.

Before 'react hooks' was a thing, one needed some hefty boilerplate to accomplish this. But redux now ships with hooks that make it INSANELY more enjoyable and easy to connect your component to read/write to store!

The first we mentioned is the `useDispatch` hook that lets you update the store from any component. Bye-bye props-state-callback-threading hell! Second, redux provides a hook called `useSelector` that lets you 'select' bits from the store for use in the component. `useSelector` takes a function as argument that maps your `state` object to, typically, some subpart of that state. In the above example, this could be `const username = useSelector(state => state.user)`. This function is called a 'selector'.

Again, similar to how we chose to centralize all our action creators, so we likewise centralize all of our selector functions.

### Working Example

To see a very simple redux setup, consult this codebase before it got complex at the remote branch 'simple-redux-setup'. Pretty much all of the redux infrastructure is housed in the `src/Redux` dir. The component `PageReduxDemo` can be viewed at `/redux-demo` to see soem simple exemplification of the store being read/written to.

### Side Effects with Redux-Thunk

So far (i.e. up to remote branch `simple-redux-setup`), our redux setup only uses so-called 'pure functions'. I.e. when we dispatch an action to update the store, it does that and nothing else in a near-instantaneous manner. These actions are said to have no 'side effects'.

However, we'll need to be able to run sequences of actions in order to implement async events. The most common such case is where you need to dispatch an action that fetches data from an api and then, when that data is ready, dispatch an action to save that data to our store. Actions that cause other actions to be triggered are said to cause 'side effects'.

The simplest library for performing side effects is the one recommended by redux called 'redux-thunk'. A 'thunk' is like an action-creator function, except instead of returning an action it returns a function. That function has the redux dispatch function as its argument, and the function body provides us with space to carry out async tasks and then to dispatch further actions once those async tasks are complete.

An example has been implemented, which can be seen in the remote branch `simple-redux-thunk-setup`, that turns our simple counter into a counter of quotes fetched from a random api (one for random Trump quotes). Having fetched the quote from the api, a further action is dispatched to save the quote to the store, which is then displayed in the demo-redux page (`/redux-demo`).

Redux thunk is super simple to implement, but limited in features. If/when this app requires more complexity (such as the ability to throttle api calls), then we can look to using a different approach to side effects, such as redux-observable. (See [here](https://sandstorm.de/de/blog/post/async-redux-middleware-comparison.html) for good overview.)
