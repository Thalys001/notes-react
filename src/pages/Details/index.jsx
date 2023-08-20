import { Container } from './styles';
import { Button } from '../../components/Button';
export function Details() {
  return (
    <Container>
      <div>Hello World!</div>
      <span>good night</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}