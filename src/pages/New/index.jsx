import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>
              Criar nota
            </h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="observações" />
          <Section title="Links úteis">
            <NoteItem value="https://github.com/Thalys001" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}