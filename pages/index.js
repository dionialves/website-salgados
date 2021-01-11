import Layout from '../components/layout'
import Image from 'next/image'


function Home() {
    return (
        <Layout>
            <div className="banner"></div>

            <div className="content">
                <section className="promotion">
                    <h1>PRODUTOS EM DESTAQUE</h1>

                    <div className="card_super_promo">
                        <Image src="/promo_coxinha.jpg" alt="Promoção Coxinha" width="300" height="180" />
                        <h4 className="nameItemSuperPromotion">OFERTA - Bolinha de Queijo</h4>
                        <span className="valueItemSuperPromotion">R$ 19,90</span>
                        <a href="#"><button class="buttonItemPromotion">EU QUERO</button></a>
                    </div>

                    <div className="card_promo fl">
                        <Image src="/promo_bolinhadequeijo.jpg" alt="Promoção Bolinha de Queijo" width="500" height="440" />
                        <h4 className="nameItemPromotion">Promoção Coxinha</h4>
                        <span className="valueItemPromotion">R$ 39,90</span>
                        <a href="#"><button class="buttonItemPromotion">EU QUERO</button></a>
                    </div>

                    <div className="card_promo fl">
                        <Image src="/promo_bolinhadequeijo.jpg" alt="Promoção Bolinha de Queijo" width="300" height="180" />
                        <h4 className="nameItemPromotion">Promoção Bolinha de Queijo</h4>
                        <span className="valueItemPromotion">R$ 39,90</span>
                        <a href="#"><button class="buttonItemPromotion">EU QUERO</button></a>
                    </div>

                    <div className="card_promo card_hide fl">
                        <Image src="/promo_kibe.jpg" alt="Promoção Quibe" width="300" height="180" />
                        <h4 className="nameItemPromotion">Promoção Quibe</h4>
                        <span className="valueItemPromotion">R$ 39,90</span>
                        <a href="#"><button class="buttonItemPromotion">EU QUERO</button></a>
                    </div>

                    <div className="card_promo card_hide fl">
                        <Image src="/promo_pastelzinho.jpg" alt="Promoção Coxinha" width="300" height="180" />
                        <h4 className="nameItemPromotion">Promoção Pastelzinho</h4>
                        <span className="valueItemPromotion">R$ 39,90</span>
                        <a href="#"><button class="buttonItemPromotion">EU QUERO</button></a>
                    </div>
                </section>

                <section className="depoiments">
                    <h1>DEPOIMENTOS</h1>

                    <div className="card_depoiment fl">
                        <Image className="img_depoiments" src="/face_depoiment_01.jpeg" width="120" height="120" />
                        <p className="text_depoiment">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.
                        </p>
                        <p className="name_depoiment">
                            LAURA DA SILVA
                        </p>
                    </div>
                    <div className="card_depoiment fr">
                        <Image className="img_depoiments" src="/face_depoiment_02.jpeg" width="120" height="120" />
                        <p className="text_depoiment">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.
                        </p>
                        <p className="name_depoiment">
                            ROZANA DA SILVA
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home