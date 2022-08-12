import { Col, Container, Row} from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eos voluptates corrupti qui veniam quia doloremque unde tenetur dolores deleniti blanditiis eaque fugit sint, recusandae aspernatur tempore sequi provident velit.</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                </Row>
            </container>
        </section>
    )
}