import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout({
  children,
  title = 'É Top Salgados',
}) {
    return (
        <div>
            <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <Image src="/logo.png" alt="E top salgados" className="logo" width="170" height="116" />
                <div class="info">
                    <div class="info_box_location">
                        <i class="fa fa fa-map-marker fa-3x info_img" aria-hidden="true"></i>
                        <div class="info_text">
                            <strong>LOCALIZAÇÃO</strong>
                            <p>Rua: Dom Saraiva, N 345, São Vicente, Chapeco-SC</p>
                        </div>
                    </div>
                    <div class="info_box_email">
                            <i class="fa fa-envelope fa-3x info_img" aria-hidden="true"></i>                
                        <div class="info_text">
                            <strong>EMAIL</strong>
                            <p>contato@etopsalgados.com.br</p>
                        </div>
                    </div>
                    <div class="info_box_contact">
                        <i class="fa fa-phone-square fa-3x info_img" aria-hidden="true"></i>
                        <div class="info_text">
                            <strong>CONTATO</strong>
                            <p>(49) 99999-8888</p>
                        </div>
                    </div>
                </div>
            </header>

            <div class="menu">
                <div class="menubar">
                    <ul>
                        <a href="#"><li class="item_list">INÍCIO</li></a>
                        <a href="#"><li>QUEM SOMOS</li></a>
                        <a href="#"><li>PRODUTOS</li></a>
                        <a href="#"><li>ONDE ESTAMOS</li></a>
                        <a href="#"><li>FALE CONOSCO</li></a>
                    </ul>
                </div>
            </div>
    

            {children}

            <footer>
                <div class="footer_content">
                    <div class="footer_contact fl">
                        <p><strong>É TOP SALGADOS</strong></p>
                        <p>contato@contato.com.br - (49) 98659-9685</p>
                        <p>Rua: Dom Saraiva, N 345, São Vicente, Chapeco-SC</p>
                        <p class="developer_by">Desenvolvido por <a href="http://www.dionialves.com.br" target="_blank"><strong>Dioni Alves</strong></a>, Web Developer</p>
                    </div>

                    <div class="footer_social_links fr">
                        <Image src="/facebook.svg" width="36" height="36" />
                        <Image src="/instagram.svg" width="36" height="36" />
                        <Image src="/twitter.svg" width="36" height="36" />
                    </div>
                </div>
            </footer>

            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=+5549999640273&text=Gostaria de fazer um pedido!" target="_blank">
                    <Image src="/whatsapp.png" width="64" height="64" />
                </a>
            </div>

        </div>
    )
}
