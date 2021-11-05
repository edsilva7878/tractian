import React from 'react'

import './home.css'

import Background from '../images/backgroundTractian.png'
import Logo from '../images/logoTractian.png'

export default function Home(){
    return(
        <div className='wrapper'>
            <img src={Background} className='fundo' alt='fundo'/>
            <div className='top'>
                <img src={Logo} className='logo' alt='logo'/>
            </div>
            <div className='top2'>
                <h1 className='textContent'>ACOMPANHE O DESENVOLVIMENTO DO SEU PROJETO</h1>
                <div className='controll'>
                    <button className='btn-top'>CADASTRE-SE</button>
                    <button className='btn-top'>ENTRAR</button>
                </div>
            </div>
            <div className='content'>
                <h1 className='textContent2'>SOFTWARE DE MANUTENÇÃO</h1>
            </div>
            <div className='footer'>
                <div className='card'>
                    <p className='textCard'>
                        CLIQUE PARA VOLTAR AO INICIO
                    </p>
                    <button>INICIO</button>
                </div>
                <div className='card'>
                    <p className='textCard'>
                        SAIBA MAIS SOBRE NOSSA ORGANIZAÇÃO
                    </p>
                    <button>SOBRE</button>
                </div>
                <div className='card'>
                <p className='textCard'>
                        CONHECA OS SERVIÇOS OFERECIDOS
                    </p>
                    <button>SERVIÇOS</button>
                </div>
                <div className='card'>
                <p className='textCard'>
                        VERIFIQUE TODOS OS NOSSOS PROJETOS
                    </p>
                    <button>PORTIFÓLIO</button>
                </div>
            </div>
        </div>
        
    )
}