// import Checkers.css
import  './Checkers.css'

// import component Row
import Row from  './Row.js'
// import component BlackChecker
import BlackChecker from './pieces/BlackChecker'
// import component WhiteChecker
import WhiteChecker from './pieces/WhiteChecker'
// define function Checkers
  function Checkers()
 {
    // declare constant data set equal to literal array
    const data = [
[null, WhiteChecker, null, WhiteChecker, null, WhiteChecker, null, WhiteChecker],
[WhiteChecker, null, WhiteChecker, null, WhiteChecker, null, WhiteChecker, null],
[null, WhiteChecker, null, WhiteChecker, null, WhiteChecker, null, WhiteChecker],
[null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null],
[BlackChecker, null, BlackChecker, null, BlackChecker, null, BlackChecker, null],
[null, BlackChecker, null, BlackChecker, null, BlackChecker, null, BlackChecker],
[BlackChecker, null, BlackChecker, null, BlackChecker, null, BlackChecker, null],
];
  return (
    /* table element with class 'no-border' */
    <table class='no-border'>
      {/* this is a comment in JSX! */}
      {/* expression to populate table with associated components BlackChecker and WhiteChecker
          based on the data set */}
        {data.map((rowData, index) => {
          const number = data.length - index

          return <Row key={number.toString()} number={number} data={rowData} />
        })}
    </table>
  );
}

// include the export default statement
export default Checkers
