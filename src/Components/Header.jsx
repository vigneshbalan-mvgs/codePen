import { AppBar, Toolbar , styled} from "@mui/material"

const Container = styled(AppBar)`
background : black;
height : 9vh ;
`

const Header = () => {
  return (
      <Container>
          <Toolbar>
              <img src="./assets/logo-black.png" alt="logo" />
          </Toolbar>
    </Container>
  )
}

export default Header