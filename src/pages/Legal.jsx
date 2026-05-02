import {useEffect} from "react";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import HeaderSecondary from "../components/Header/HeaderSecondary";
import Footer from "../components/Footer/Footer";

const Legal = () => {
  useEffect(() => {
    document.title = "Legal | Once Upon A Time";
  }, []);
  return (
    <>
      <ReactLenis root>
        <HeaderSecondary></HeaderSecondary>
        <main className="top-spacing">
          <div className="legal-page">
              <h2>Refund Policy</h2>
              <p className="date">Last modified : February 2024</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc cras lacus aliquet
                posuere facilisis. Amet pellentesque viverra eu faucibus justo
                diam. Condimentum auctor ipsum urna pharetra eget. Ultrices
                suscipit amet felis sit non egestas. Pellentesque risus in
                egestas maecenas varius nascetur sit. Turpis amet enim justo
                purus. Velit vulputate integer in enim vitae diam feugiat.
                Venenatis rhoncus id non odio elementum tempor. Pulvinar fames
                imperdiet nisi pharetra pellentesque pellentesque tortor lorem.
                Libero velit dictum viverra quis purus et venenatis ac.
                Venenatis vestibulum molestie morbi faucibus diam diam
                scelerisque sit turpis. Scelerisque mattis aliquet eget quis
                enim tellus vitae at. In sed ipsum nisi magna. Eu urna euismod
                porta aliquet turpis arcu morbi posuere. Morbi proin magna
                tortor auctor quis magna lectus pretium convallis. Ornare quam
                quis habitasse nam enim vitae. Ornare consequat nisl sed risus
                urna morbi id.
              </p>
              <h3>Title</h3>
              <p>
                Feugiat in erat accumsan <a href="#!">quis</a> ornare posuere adipiscing aliquam ligula. Elementum vulputate eu fermentum
                platea fringilla. Leo massa congue convallis tortor gravida.
              </p>
              <ul>
                <li>
                  Magna amet ac adipiscing fames. Viverra nec volutpat sed eget
                  sit venenatis. Nulla dolor massa urna congue duis a faucibus
                  mi in. In posuere sit elementum elit pellentesque sagittis et
                  lectus. Sagittis fusce facilisi id nunc amet sit in. Ut
                  imperdiet aliquet congue sagittis. Eu in nibh venenatis risus
                  lectus leo pellentesque mauris condimentum. Sed in adipiscing
                  consectetur adipiscing massa erat auctor morbi amet. Pretium
                  pellentesque vivamus.
                </li>
                <li>
                  Turpis laoreet porttitor arcu vivamus. Commodo tincidunt
                  blandit integer lorem scelerisque. Vestibulum cursus integer
                  urna ultrices auctor quis aliquet. Eget sed tortor ut purus
                  tellus. Sagittis diam quam quis molestie. Nec ipsum in massa
                  faucibus amet bibendum mattis integer. Auctor dictumst a
                  tincidunt consectetur amet id arcu diam. Tincidunt tincidunt
                  nisi quisque tortor nisl egestas elementum.
                </li>
                <li>
                  Turpis laoreet porttitor arcu vivamus. Commodo tincidunt
                  blandit integer lorem scelerisque. Vestibulum cursus integer
                  urna ultrices auctor quis aliquet. Eget sed tortor ut purus
                  tellus. Sagittis diam quam quis molestie. Nec ipsum in massa
                  faucibus amet bibendum mattis integer. Auctor dictumst a
                  tincidunt consectetur amet.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Nunc cras lacus
                  aliquet posuere facilisis. Amet pellentesque viverra eu
                  faucibus justo diam. Condimentum auctor ipsum urna pharetra
                  eget. Ultrices suscipit amet felis sit non egestas.
                  Pellentesque risus in egestas maecenas varius nascetur sit.
                  Turpis amet enim justo purus. Velit vulputate integer in enim
                  vitae diam feugiat. Venenatis rhoncus id non odio elementum
                  tempor. Pulvinar fames imperdiet nisi pharetra pellentesque
                  pellentesque tortor lorem. Libero velit dictum viverra quis
                  purus et venenatis ac. Venenatis vestibulum molestie morbi
                  faucibus diam diam scelerisque sit turpis. Scelerisque mattis
                  aliquet eget quis enim tellus vitae at. In sed ipsum nisi
                  magna. Eu urna euismod porta aliquet turpis arcu morbi
                  posuere. Morbi proin magna tortor auctor quis magna lectus
                  pretium convallis. Ornare quam quis habitasse nam enim vitae.
                  Ornare consequat nisl sed risus urna morbi id.
                </li>
              </ul>
              <ol>
                <li>
                  Turpis laoreet porttitor arcu vivamus. Commodo tincidunt
                  blandit integer lorem scelerisque. Vestibulum cursus integer
                  urna ultrices auctor quis aliquet. Eget sed tortor ut purus
                  tellus. Sagittis diam quam quis molestie. Nec ipsum in massa
                  faucibus amet bibendum mattis integer. Auctor dictumst a
                  tincidunt consectetur amet.
                </li>
                <li>
                  Turpis laoreet porttitor arcu vivamus. Commodo tincidunt
                  blandit integer lorem scelerisque. Vestibulum cursus integer
                  urna ultrices auctor quis aliquet. Eget sed tortor ut purus
                  tellus. Sagittis diam quam quis molestie. Nec ipsum in massa
                  faucibus amet bibendum mattis integer. Auctor dictumst a
                  tincidunt consectetur amet.
                </li>
              </ol>
            </div>
        </main>
        <div className="spacer"></div>
        <Footer></Footer>
      </ReactLenis>
    </>
  );
};

export default Legal;
