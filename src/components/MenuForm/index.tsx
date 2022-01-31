import React from "react"
import { Container, Navigation, DropboxLogo, Form } from "./styles"

export const MenuForm = () => {

    function handleToggle () {
        if(window.handleToogleActive){
            window.handleToogleActive()
        }
    }

    return (
        <Container>

                <Navigation>
                    <h1>
                        <DropboxLogo/>
                        <span>
                            Dropbox
                        </span>
                    </h1>

                    <button onClick={handleToggle} className="action--close">×</button>
                </Navigation>

                <Form>

                    <span className="title">
                        Registre-se
                    </span>

                    <span className="subTitle">
                        Preencha o formulário abaixo
                    </span>

                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Sobrenome" />
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />

                    <button>Prosseguir</button>

                    <span className="terms">
                        Está página está sujeita aos termos de privacidade e aos termos de serviço.
                    </span>

                </Form>
                
        </Container>
    )
}