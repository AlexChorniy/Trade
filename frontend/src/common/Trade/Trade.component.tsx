import { Form, Input, Section, Title } from './Trade.styles';

const TradeComponent = () => {
  return (
    <Form>
      <Section>
        <Title>Amount:</Title>
        <Input type="number" />
      </Section>
      <Section>
        <Title type="text">Currency:</Title>
        <Input />
      </Section>
    </Form>
  );
};

export default TradeComponent;
