import "@qonsoll/react-design/dist/styles/styles.css";
import "@qonsoll/react-design/dist/styles/vars/index.css";
import '@qonsoll/next-landing-components/dist/styles/vars.css'
import {useState, useRef, useEffect} from "react";
import {Avatar, Button, Title, Col, Row, Container} from "@qonsoll/react-design";
// import {Col, Row, Container} from '@qonsoll/next-landing-components'
// const Block = () => {
//   return (
//       <Container>
//         <Row>
//           <Col  bg='red' cw={9} style={{backgroundColor:'pink', color:'gray'}}>Col cw={3}</Col>
//           <p className='ant-avatar'>Avatar</p>
//           <Avatar size='large'>Qonsoll avatar</Avatar>
//           <Button  type='primary' danger>QButton</Button>
//           <Title variant="2">Title 2</Title>
//         </Row></Container>
//
//   )
// };

export default function Test() {
  const [currentStyle, setCurrentStyle] = useState(null)
  const [wrapperHeight, setWrapperHeight] = useState("")
  const [wrapperWidth, setWrapperWidth] = useState("")
  const [scaleNum, setScaleNum] = useState(1)
  const inputRef = useRef()
  // Render iframe content
  const wrapperRef = useRef();
  const [node, setNode] = useState(null);

  useEffect(() => {
    setNode(wrapperRef.current);
    checkBlockOverLimit()

  }, [wrapperHeight, wrapperWidth]);

  const getStyles = () => {
    let css = [];
    for (let i = 0; i < document.styleSheets.length; i++) {
      let sheet = document.styleSheets[i];
      let rules = ('cssRules' in sheet) ? sheet.cssRules : sheet.rules;
      if (rules) {
        css.push('\n/* Stylesheet : ' + (sheet.href || '[inline styles]') + ' */');
        for (let j = 0; j < rules.length; j++) {
          let rule = rules[j];
          if ('cssText' in rule)
            css.push(rule.cssText);
          else
            css.push(rule.selectorText + ' {\n' + rule.style.cssText + '\n}\n');
        }
      }
    }
    setCurrentStyle(css.join('\n') + '\n')
  }

  const handleSizeChange = async (w, h, e) => {
    setWrapperHeight(h)
    setWrapperWidth(w)
    await checkBlockOverLimit()
    await getStyles()
  }

  const windowWidth = window.outerWidth
  const windowHeight = window.outerHeight

  const frameWidthLimit =()=>{
    if (wrapperWidth > windowWidth-10)
      return windowWidth
    else return wrapperWidth
  }
  const frameHeightLimit =()=>{
    if (wrapperHeight > windowHeight-10)
      return windowHeight
    else return wrapperHeight
  }

  const frameContentWidthLimit =()=>{
    if (wrapperWidth > windowWidth-10)
      return windowWidth
    else return wrapperWidth
  }
  const frameContentHeightLimit =()=>{
    if (wrapperHeight > windowHeight-10)
      return windowHeight
    else return wrapperHeight
  }
  console.log(wrapperWidth, windowWidth);
  const checkBlockOverLimit = () => {
    if (wrapperWidth > windowWidth) {
      setScaleNum(windowWidth / wrapperWidth * 0.8)
      // setScaleNum(0.5)
    }
    if (wrapperWidth < windowWidth + 1) {
      setScaleNum(1)
      // setScaleNum(0.5)
    }
        // if (wrapperHeight > windowHeight) {
        //   setScaleNum(windowHeight / wrapperHeight * 0.9)
        //   // setScaleNum(0.5)
        // }
        // if (wrapperHeight < windowHeight) {
        //   setScaleNum(1)
        //   // setScaleNum(0.5)
    // }
    else return 1
  }

  const handleHeightChange = (e) => {
    setWrapperHeight(e.target.value);
  };
  const handleWidthChange = (e) => {
    setWrapperWidth(e.target.value);
  };

  return (
      <div className="App" style={{/*overflowX:'hidden', */backgroundColor:'pink'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => handleSizeChange(600, 600)}>600*600</button>
          <button onClick={() => handleSizeChange(375, 812)}>iPhone X</button>
          <button onClick={() => handleSizeChange(1024, 1366)}>iPad</button>
          <button onClick={() => handleSizeChange(1920, 1080)}>Full HD</button>
          <button onClick={() => handleSizeChange(4096, 2160)}>4K</button>
          <div>
            <p>Dimensions: Responsive</p>
            <input type="number" value={wrapperWidth} placeholder='width' onChange={handleWidthChange}/>x
            <input ref={inputRef} type="number" placeholder='height' value={wrapperHeight}
                   onChange={handleHeightChange}/>
          </div>
        </div>
        {node ? (
            <iframe
                title="page"
                width={frameWidthLimit()}
                height={frameHeightLimit()}

                style={{
                                    boxSizing: "border-box",
                  // transform: `scale(${scaleNum})`, transformOrigin: "0 0"
                }}

                srcDoc={`<html>
          <head>
            <link rel="stylesheet" href="styles.css" />
            <style>
            ${currentStyle};

            </style>
          </head>
          <body 
          style={{
            boxSizing: "border-box",
           transform: \`scale(${scaleNum})\`, 
           transformOrigin: "0 0",
            width:"500px"
                }}>
            ${node ? node.innerHTML : "Loading"}
          </body>
          <script>
              console.log('>>>', window.location)
          </script>
        </html>`}
            />
        ) : null}

        <div ref={wrapperRef} style={{display:'none', width:{frameWidthLimit},
          height:{frameHeightLimit}}} >
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
        </div>
        {/* <div className="w400"></div> */}
      </div>
  );
}
export const IframeContent = ()=>{

}
