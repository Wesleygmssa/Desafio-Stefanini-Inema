import React, { useCallback, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import About from '../../components/About';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Nav from '../../components/nav';
import ConvertBase64 from '../../config/ConverteBase64';
import api from '../../services/api';
import { Container } from '../../styles/global';
import { useToast } from '../../hooks/ToastContext';
import {
  Content,
  Title,
  ContentInt,
  BoxContent,
  Box,
  Form,
  ModalInt,
} from './styles';

const Home: React.FC = () => {
  const [nome, setNome] = useState('');
  const [nome_foto, setNome_foto] = useState('');
  const [local_foto, setLocal_foto] = useState('');
  const [data_foto, setData_foto] = useState('');
  const [img_base64, setImg_base64] = useState(undefined);
  const [termos, setTermos] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { addToast } = useToast(); // hooks de toast

  const handleSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();

      if (termos) {
        const newBase64 = await ConvertBase64(img_base64 as never);
        const [, base64String] = (newBase64 as string).split(',');

        const data = {
          nome,
          nome_foto,
          local_foto,
          data_foto,
          img_base64: base64String,
          foto: nome_foto,
          termos,
        };

        await api.post('/participante', data);

        addToast({
          type: 'success',
          title: 'Sua mensagem foi enviada com sucesso!',
          description: 'Agora só aguardar, Obrigado!',
        });

        setNome('');
        setNome_foto('');
        setLocal_foto('');
        setData_foto('');
        setImg_base64(undefined);
        setTermos(false);
        setModalIsOpen(false);
      } else {
        addToast({
          type: 'error',
          title: 'Favor aceitar o termo',
          description: 'Favor ler o termo para envio da mensagem.',
        });
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error ao enviar mensagem',
        description: 'Ocorreu um erro no sistema',
      });
    }
  }, [nome, nome_foto, local_foto, data_foto, img_base64, termos, addToast]);

  const handleModalClose = useCallback(() => {
    setNome('');
    setNome_foto('');
    setLocal_foto('');
    setData_foto('');
    setImg_base64(undefined);
    setTermos(false);
    setModalIsOpen(false);
  }, []);

  return (

    <>
      <div id="inital" />
      <Container>
        <Nav />
        <Banner />
        <Content>
          <ContentInt>
            <BoxContent>
              <div id="id_concurso" />
              <Title>O CONCURSO </Title>
              <p>
                Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água
                (os desafios e as belezas encontradas em campo) pelos colaboradores.
                Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água.
              </p>
            </BoxContent>
            <BoxContent>
              <Box>
                <Title> EXPOSIÇÃO DE FOTOS</Title>
                <span>
                  20 á 24/03/2017 na
                  <br />
                  divisórias da Ouvidoria
                  <br />
                  (em frente ao elevador)
                </span>
                <div id="inscricao" />
                <Title> APRESENTAÇÃO </Title>
                <span>
                  20/03/2017 das 16:30h
                  <br />
                  ás 17:30h.
                </span>
              </Box>
              <Button onClick={() => { setModalIsOpen(true); }}>FAÇA SUA INSCRIÇÃO</Button>
              <Modal isOpen={modalIsOpen}>
                <ModalInt>
                  <FaRegTimesCircle size={30} onClick={handleModalClose} />
                  <Form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome do colaborador"
                      value={nome}
                      onChange={(e) => { setNome(e.target.value); }}
                    />

                    <input
                      type="text"
                      name="nome_foto"
                      placeholder="Nome da foto"
                      value={nome_foto}
                      onChange={(e) => { setNome_foto(e.target.value); }}
                    />

                    <input
                      type="text"
                      name="local_foto"
                      placeholder="Local da foto"
                      value={local_foto}
                      onChange={(e) => { setLocal_foto(e.target.value); }}
                    />

                    <input
                      type="date"
                      name="data_foto"
                      placeholder="Data de registro"
                      value={data_foto}
                      onChange={(e) => { setData_foto(e.target.value); }}
                    />

                    <input
                      type="file"
                      accept="image/*"
                      id="image"
                      onChange={(e) => {
                        const { files } = e.target;
                        const filesArr = Array.prototype.slice.call(files);
                        setImg_base64(filesArr[0]);
                      }}
                    />

                    <label className="terms-agreement-label">
                      <input
                        type="checkbox"
                        name="terms-agreement-checkbox"
                        onChange={(e) => { setTermos(e.target.checked); }}
                        defaultChecked={false} // inicia como não aceito
                      />
                      <span>Aceito os termos</span>
                    </label>

                    <Button type="submit">Enviar</Button>
                  </Form>
                </ModalInt>
              </Modal>
            </BoxContent>
          </ContentInt>
          <div id="about" />
          <About>

            <Title>SOBRE</Title>
            <p>Objetivos</p>

            <p>
              Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água,
              que será elaborado um mural de fotos denominado de “Varal das Águas”.

            </p>

            <p>
              Dos participante
            </p>

            <p>
              Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos -
              INEMA e Secretaria do Meio Ambiente -SEMA.

            </p>

            <p>Das especificações das fotografias participantes</p>

            <p>
              As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA,
              devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.

            </p>

            <p>Premiação final do concurso</p>

            <p>
              As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.

            </p>
            <div id="regra" />
          </About>
          <About>
            <Title>REGRAS</Title>

            <p>
              {' '}
              Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos,
              as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.

            </p>
            <p> • As fotos devem ser originais e sem alterações.</p>
            <p>• As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</p>
            <p>• Fotografias que incluam pessoas serão desclassificadas.</p>
            <p> • As fotos devem ser enviadas com um formulário de inscrição preenchido.</p>
            <p>• As fotografias do concurso se tornarão publicas.</p>
            <p>• O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</p>
            <p>• Cada pessoa só poderá cadastrar uma única foto.</p>
            <p>• A votação será por meio das redes sociais do INEMA.</p>
            <p> • As vagas serão limitadas apenas 50.</p>

            <p>A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).</p>
          </About>

        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
