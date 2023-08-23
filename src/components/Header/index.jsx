import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Thalys001.png"
          alt="user photo" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Thalys Leite</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}