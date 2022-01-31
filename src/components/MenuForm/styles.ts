import styled from "styled-components";

import {FaDropbox} from 'react-icons/fa'

export const Container = styled.div`

display: flex;
flex-direction: column;
height: 100%;


@media (min-width: 1024px){
    max-width: 480px;
}

`

export const Navigation = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
padding: 16px 32px;
min-height: 61px;

> h1 {

    display: flex;
    align-items: center;

    > span {
        margin-left: 10px;
        color: var(--color-quaternary);
    }

}

> button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 24px;
    outline: 0;
    cursor: pointer;

}

@media (min-width: 1024px){
        > h1 {
            display: none;
        }
    }

`


export const DropboxLogo = styled(FaDropbox)`

width: 46px;
height: 32px;
fill: var(--color-blue);

`


export const Form = styled.form`

max-width: 480px;
margin: 0 auto;
height: 100%;


display: flex;
flex-direction: column;
justify-content: center;

padding: 0 32px;

> .title {
    font-size: 25px;
    font-weight: 500;
}

> .subtitle {
    font-size: 12px;
    margin-top: 3px;
}


> input {

    padding: 13px 18px;
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    font-size: 14px;
    margin-top: 18px;
}

> button {
    margin-top: 18px;
    padding: 13px 18px;
    font-size: 16px;
    background: var(--color-blue);
    color: var(--color-tertiary);
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.87;
    }
}

> .terms {

    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;

}

`

