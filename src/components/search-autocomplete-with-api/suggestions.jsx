
export default function Suggestions({ data, handleClick }) {
  return (
    <ul style={{ listStyle: 'none'}}>
      {
        data && data.length ?
          data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
          : null
      }
    </ul>
  );
}