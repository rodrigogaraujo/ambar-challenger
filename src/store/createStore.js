import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleware) => {
  const enhacer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middleware))
      : applyMiddleware(...middleware);

  return createStore(reducers, enhacer);
};
