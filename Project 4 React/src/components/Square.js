// define function Square with parameter props
  function Square(props)
 {
    // declare constant isEvenRow set equal to props property row % 2 === 0 (result is true or false)
    const isEvenRow = props.row % 2 === 0;
    // declare constant isEvenColumn set equal to props property column, method charCodeAt() % 2 !== 0 (result is true or false)
    const isEvenColumn = props.column.charCodeAt() % 2 !== 0;
    // declare constant isLight set equal to the logic checker board logic:
    const isLight =
    //     1. the row is even and the column is even OR
    //     2. the row is odd and the column is odd (result is true or false)
    (props.row % 2 === 0 && props.column.charCodeAt() % 2 === 0) ||
    (props.row % 2 !== 0 && props.column.charCodeAt() % 2 !== 0);
    return (

          <td className={'square ' + (isLight ? 'light' : 'dark')}>

            {props.children}
        </td>
    )
}

// include the export default statement
export default Square
