import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/deposit.css"
import "../css/setting.css"
import "../css/responsive.css"
import Layout from '../layout';


const FourNumber = () => {

    return (

        <Layout>

            <div className='main-fournumber'>
                <div className="main-content">
                    <div className="banner-main">
                        <img src="./images/4number/main-four1.png" alt="" />
                    </div>


                    <section className="four-number">
                        <div className="row gx-3" style={{ width: "80%", margin: "auto" }}>
                            <div
                                className="ticket-item d-flex flex-column align-items-center justify-content-end col-12 col-sm-3">
                                <img src="./images/4number/ticket1.png" alt="" />
                                <div className="ticket-info d-flex justify-content-center flex-column align-items-center">
                                    <h4 className="ticket-title">
                                        Only 67 tickets left
                                    </h4>
                                    <button className="btn__prize-buy">2$</button>
                                </div>
                            </div>
                            <div
                                className="ticket-item d-flex flex-column align-items-center justify-content-end col-12 col-sm-6">
                                <img src="./images/4number/ticket2.png" alt="" />
                                <div className="ticket-info d-flex justify-content-center flex-column align-items-center">
                                    <h4 className="ticket-title">
                                        Only 67 tickets left
                                    </h4>
                                    <button className="btn__prize-buy">2$</button>
                                </div>
                            </div>
                            <div
                                className="ticket-item d-flex flex-column align-items-center justify-content-end col-12 col-sm-3">
                                <img src="./images/4number/ticket3.png" alt="" />
                                <div className="ticket-info d-flex justify-content-center flex-column align-items-center">
                                    <h4 className="ticket-title">
                                        Only 67 tickets left
                                    </h4>
                                    <button className="btn__prize-buy">2$</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="instruction">
                        <h4>Lottery Instructions</h4>
                        <ul className="instruction-guide">
                            <li className="item-guide">A provably fair algorithm is used to draw the lottery prizes.</li>
                            <li className="item-guide">Prizes are drawn every 8 hours, at 00:00, 08:00, 16:00 UTC+0.</li>
                            <li className="item-guide">You can buy a ticket for $0.1. The sale of tickets stops at 14:55
                                UTC+0 every day.</li>
                            <li className="item-guide">The player chooses six numbers for each ticket, the first five are
                                from 1 to 36, And
                            </li>
                            <li className="item-guide">the last one is from 1 to 10.</li>
                            <li className="item-guide">You can choose numbers manually or automatically.
                            </li>
                            <li className="item-guide">Each draw produces six numbers.
                            </li>
                            <li className="item-guide">The more numbers you match in the first five numbers, greater prize
                                you will win.</li>
                        </ul>
                    </section>
                    <div className="spacer-instruction"></div>
                </div>
            </div>

        </Layout>


    );
}

export default FourNumber;