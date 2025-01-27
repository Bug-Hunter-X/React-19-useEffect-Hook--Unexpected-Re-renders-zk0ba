```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered');
    // Cleanup function (optional, for side effects)
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Only re-render when count changes

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); //Functional update prevents unexpected behavior
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```