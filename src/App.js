import {Title, Col, Container, Row, Box} from "@qonsoll/react-design";
import {useEffect, useRef, useState} from "react";
import {FunctionalIFrameComponent} from "./components/functional";
import styled from "styled-components";
import Frame from 'react-frame-component';
import MyComponent, {OuterComponent} from "./components/test";


function App() {
  const [wrapperHeight, setWrapperHeight] = useState(300)
  const [wrapperWidth, setWrapperWidth] = useState(300)
  const [currentSize, setCurrentSize] = useState('original container is 300 x 300')
  const [scaleNum, setScaleNum] = useState(1)
  const wrapRef = useRef()
  const inputRef = useRef()

  // const x = document.querySelector({window})
  // console.log(x);


  const windowWidth = window.outerWidth

  const checkBlockOverLimit = () => {
    if (wrapperWidth > windowWidth) {
      setScaleNum(windowWidth / wrapperWidth)
      // setScaleNum(0.5)
    }
  }
  const handleSizeChange = (w, h, e) => {
    setWrapperHeight(h)
    setWrapperWidth(w)
  }


  const handleHeightChange = (e) => {
    setWrapperHeight(e.target.value);
  };
  const handleWidthChange = (e) => {
    setWrapperWidth(e.target.value);
  };
  useEffect(() => {
    setCurrentSize(`current container is ${wrapperHeight}px * ${wrapperWidth}px`)
    checkBlockOverLimit()

  }, [wrapperHeight, wrapperWidth])

  // window.addEventListener('keydown', (e) => {
  //   console.log(e)
  // })
  // window.dispatchEvent(new KeyboardEvent('keydown', {
  //   key: "m",
  //   keyCode: 77,
  //   code: "KeyM",
  //   which: 77,
  //   shiftKey: true,
  //   ctrlKey: true,
  //   metaKey: false
  // }));

  return (
      <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => handleSizeChange(600, 600)}>Set to 600*600</button>
          <button onClick={() => handleSizeChange(375, 812)}>Set to iPhone X</button>
          <div>
            <p>Dimensions: Responsive</p>
            <input ref={inputRef} type="number" value={wrapperHeight} onChange={handleHeightChange}/>x
            <input type="number" value={wrapperWidth} onChange={handleWidthChange}/>
          </div>
        </div>
        {/*<iframe title='iframe' src="../public/index.html"*/}
        {/*//         src={*/}
        {/*//   <Container*/}
        {/*//       ref={wrapRef}*/}
        {/*//       style={{gap: '1 rem', backgroundColor: 'pink', transform: `scale(${scaleNum}) translateX(0)`}}*/}
        {/*//       height={`${wrapperHeight}px`}*/}
        {/*//       width={`${wrapperWidth}px`}>*/}
        {/*//     <Row>*/}
        {/*//       <Col bg='red' cw={[8, 3]}>Col 8,3</Col>*/}
        {/*//       <Col bg='blue' cw={[8, 3]}> cw={[8, 3]}</Col>*/}
        {/*//     </Row>*/}
        {/*//     <p>{currentSize}</p>*/}
        {/*//   </Container>*/}
        {/*// }*/}
        {/*        width={`${wrapperWidth}px`} height={`${wrapperHeight}px`}>*/}
        {/*  <Container*/}
        {/*      ref={wrapRef}*/}
        {/*      style={{gap: '1 rem', backgroundColor: 'pink', transform: `scale(${scaleNum}) translateX(0)`}}*/}
        {/*      height={`${wrapperHeight}px`}*/}
        {/*      width={`${wrapperWidth}px`}>*/}
        {/*    <Row>*/}
        {/*      <Col bg='red' cw={[8, 3]}>Col 8,3</Col>*/}
        {/*      <Col bg='blue' cw={[8, 3]}> cw={[8, 3]}</Col>*/}
        {/*    </Row>*/}
        {/*    <p>{currentSize}</p>*/}
        {/*  </Container>*/}
        {/*</iframe>*/}
        {/*<FunctionalIFrameComponent width={`${wrapperWidth}px`} height={`${wrapperHeight}px`} title="functional-iframe">*/}
          <iframe title='iframe' srcDoc={"qqqqqqqqq"} width={`${wrapperWidth}px`} height={`${wrapperHeight}px`}>
        {/*  /!*<!doctype html>*!/*/}

        {/*<html lang="en">*/}
        {/*<head>*/}
        {/*  <meta charset="UTF-8"/>*/}
        {/*  <meta name="viewport"*/}
        {/*        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>*/}
        {/*  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>*/}
        {/*  <title>Document</title>*/}
        {/*  <link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>*/}
        {/*  <link rel="stylesheet" href="../node_modules/@qonsoll/react-design/dist/styles/styles.css"/>*/}
        {/*  <link rel="stylesheet" href="../node_modules/@qonsoll/react-design/dist/styles/vars/index.css"/>*/}


        {/*</head>*/}
        {/*<body>*/}
        <Container
            ref={wrapRef}
            style={{gap: '1 rem', backgroundColor: 'pink', transform: `scale(${scaleNum}) translateX(0)`}}
            // height={`${wrapperHeight}px`}
            // width={`${wrapperWidth}px`}
            height="100%"
            width="100%"
        >
          <Row noGutters>
            <Col style={{backgroundColor: 'blue'}}
                        bg='red' cw={3}>
              Qonsoll Col [8,3]
            </Col>
            <Col bg='blue' cw={[8, 3]}> cw=[8, 3]</Col>
            <p>{currentSize}</p>
          </Row>
        </Container>
        {/*</body>*/}
        {/*</html>*/}
          </iframe>
        {/*</FunctionalIFrameComponent>*/}

        {/*<Frame width={`${wrapperWidth}px`} height={`${wrapperHeight}px`}>*/}
          {/*<link rel="Col" href="../node_modules/@qonsoll/react-design/dist/styles"/>*/}
          {/*<link rel="stylesheet" href="../node_modules/antd/dist/antd.css"/>*/}
          {/*<link rel="stylesheet" href="../node_modules/@qonsoll/react-design/dist/styles/styles.css"/>*/}
          {/*<link rel="stylesheet" href="../node_modules/@qonsoll/react-design/dist/styles/vars/index.css"/>*/}
          {/*<Container*/}
          {/*    ref={wrapRef}*/}
          {/*    style={{gap: '1 rem', backgroundColor: 'pink', transform: `scale(${scaleNum}) translateX(0)`}}*/}
          {/*    // height={`${wrapperHeight}px`}*/}
          {/*    // width={`${wrapperWidth}px`}*/}
          {/*    height="100%"*/}
          {/*    width="100%"*/}
          {/*>*/}
          {/*  <Row noGutters>*/}
          {/*    <Col style={{backgroundColor: 'blue'}}*/}
          {/*         bg='red' cw={3}>*/}
          {/*      Qonsoll Col [8,3]*/}
          {/*    </Col>*/}
          {/*    <Col bg='blue' cw={[8, 3]}> cw=[8, 3]</Col>*/}
          {/*    <p>{currentSize}</p>*/}
          {/*  </Row>*/}
          {/*</Container>*/}

        {/*</Frame>*/}

      </>
  );
}

export default App;
