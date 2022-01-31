import React from "react";
import { MenuForm } from "../../components/MenuForm";

import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";

import data from '../../data'

export const Home = () => {


    return (

        <>
        
        <Section
             variant="blue"
             title={'Concentre-se apenas no trabalho importante'}
             description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
             }   
        />

        <Section
             variant="beige"
             title={'Diga adeus ao trabalho maçante'}
             description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
             }   
        />

        <Section
             variant="blue"
             title={'Armazenamento e compartilhamento de arquivos são só o começo'}
             description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis. Quisque et elit ut eros ultrices mollis.'
             }   
        />

        <Section
             variant="white"
             title={'Para todos'}
             description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
             }   
        />

        <Section
             variant="black"
             title={'Parte inferior da página'}
             description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.'
             }
        />

        <SideMenu>

        <MenuForm/>                 

        </SideMenu>

        </>
    )
}