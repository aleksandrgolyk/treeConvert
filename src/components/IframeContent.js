import React from 'react';
import {Avatar, Button, Col, Container, Row, Title} from "@qonsoll/react-design";

export const IframeContent = ()=>{
  return (
      <Container>
        <Row>
          <Col cw={[6, 8, 12]} style={{backgroundColor: 'pink', color: 'gray'}}>
            Col cw={3}
          </Col>
          <p className='ant-avatar'>Avatar</p>
          <Avatar size='large'>Qonsoll avatar</Avatar>
          <Button type='primary' danger>QButton</Button>
          <Title variant="3">Title 2</Title>
        </Row>
      </Container>
  )
}
