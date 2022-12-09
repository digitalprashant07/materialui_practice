import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
container:{
  backgroundColor:theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6)
},
icon:{
    marginRight:'20px',
},
buttons:{
    marginTop:'40px'
},

cardGrid:{
 padding:'20px 0',
 marginLeft:'1000px'
 
},
card:{
    height:'100%',
    display:'flex',
    flexDirection:'column',
    marginTop:"50px"
    
    },
cardMedia:{
    paddingTop:'56.25%',
},
cardContent:{
    flexGrow:1,
},
footer:{
    backgroundColor: theme.palette.background.paper,
    padding:'50px 0px'
}
}))

export default useStyles;