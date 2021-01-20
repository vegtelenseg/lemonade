import MuiTypography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useHeadingStyles = makeStyles({
  heading: {
    fontFamily: "'Caveat Brush', cursive;",
  },
})

function Heading({children}) {
  const classes = useHeadingStyles()
  return (
    <MuiTypography variant="h4" component="h1" className={classes.heading}>
      {children}
    </MuiTypography>
  )
}

export default Heading
