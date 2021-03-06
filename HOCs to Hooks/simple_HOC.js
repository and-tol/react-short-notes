// const withMyHook = Comp => () => {
//   const hookData = useMyHook();
 
//   return <Comp ...{hookData} {...props} />;
// }


// If your hook implementation requires static data, you can pass it in as an argument:
const withMyHook = hookArgs => Comp => () => {
  const hookData = useMyHook(hookArgs);
  return <Comp {...hookData} {...props} />;
};

// const MyDecoratedComponent = withMyHook({ 
//   some: ‘value’ 
// })(MyComponent);


// If your hook needs data based on props, 
// you might want to consider using the render prop pattern instead:
const MyHook = props => {
  const hookData = useMyHook(props.relevantData);
  return props.children(hookData);
};

// You would use these HOCs the same way you’d use any HOC — 
// wrap the component you want to enhance with it.
class MyComponent extends React.Component {
//  …
};
const MyEnhancedComponent = withMyHook(MyComponent);
