import { AppBar, Toolbar , styled} from "@mui/material"
import logo from '../assets/logo-black.png'

const Container = styled(AppBar)`
background : white;
height : 65px ;
`

const Header = () => {
  return (
      <Container position="static">
          <Toolbar>
        <img src={logo} style={{ width: 40}} />
          </Toolbar>
    </Container>
  )
}

export default Header