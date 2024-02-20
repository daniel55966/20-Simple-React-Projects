import useResponsive from ".";

export default function UseWindowResponsiveTest() {
  const windowSize = useResponsive();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Window Responsive Hook</h1>
      <p>
        Width is {width}
      </p>
      <p>
        Height is {height}
      </p>
    </div>
  )
}