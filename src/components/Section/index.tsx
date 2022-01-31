import React from "react";
import { Container, Content, HeaderWrapper, Header, DropboxLogo } from "./styles";

interface Props {

    variant: 'blue' | 'beige' | 'white' | 'black'
    title: string;
    description: string;


}

export const Section: React.FC<Props> = ({
    description,
    title,
    variant,
}) => {


    function handleToggle () {
        if(window.handleToogleActive){
            window.handleToogleActive()
        }
    }

    return (
        <Container className={variant}>

            <HeaderWrapper>
                <Header>
                    <h1>
                    <DropboxLogo/>
                    <span>
                        Dropbox
                    </span>
                    </h1>
                    <button onClick={handleToggle}>
                        Acessar
                    </button>
                </Header>
            </HeaderWrapper>

            <Content>
                <h2>
                     {title}
                </h2>
                <p>
                    {description}
                </p>
            </Content>

        </Container>
    )
}