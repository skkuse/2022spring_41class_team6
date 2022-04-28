import {Form} from "react-bootstrap";

export default function Editor()
{


    return (
        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Code</Form.Label>
                    <Form.Control as="textarea" rows={20} />
                </Form.Group>
        </Form>);
}