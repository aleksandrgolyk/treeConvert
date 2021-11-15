import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Tree} from 'antd';
import 'antd/dist/antd.css';


const oldTree = {
  "1_hVtrKfXCHdKpSW0D6du": {
    "id": "1_hVtrKfXCHdKpSW0D6du",
    "children": ["Ni26lcEaDHPt3Rdqjsvj5", "Ni26lcEaDHPt3Rdqjsvj5"],
    "name": "Container",
    "isContainer": true,
    "params": [{"name": "bounded", "property": "bounded", "value": true}, {
      "name": "gutters",
      "property": "gutters",
      "value": true
    }]
  },
  "Ni26lcEaDHPt3Rdqjsvj5": {
    "id": "Ni26lcEaDHPt3Rdqjsvj5",
    "children": ["75x1wQLiswhHN8Y6sDmis", "6q3fk_cmFJ9mXbRzUz4sh", "R07V8ITu6JNMxm-8_p8Ya"],
    "name": "Row",
    "isContainer": true,
    "params": [{
      "name": "noGutters",
      "property": "noGutters",
      "value": true,
      "description": ""
    }, {
      "name": "noInnerGutters",
      "property": "noInnerGutters",
      "value": true,
      "description": ""
    }, {"name": "noOuterGutters", "property": "noOuterGutters", "value": true, "description": ""}, {
      "name": "top",
      "property": "v",
      "value": "top",
      "description": ""
    }, {"name": "center", "property": "v", "value": "center", "description": ""}, {
      "name": "bottom",
      "property": "v",
      "value": "bottom",
      "description": ""
    }, {"name": "left", "property": "h", "value": "left", "description": ""}, {
      "name": "center",
      "property": "h",
      "value": "center",
      "description": ""
    }, {"name": "right", "property": "h", "value": "right", "description": ""}, {
      "name": "around",
      "property": "h",
      "value": "around",
      "description": ""
    }, {"name": "between", "property": "h", "value": "between", "description": ""}, {
      "name": "evenly",
      "property": "h",
      "value": "evenly",
      "description": ""
    }],
    "parentId": "1_hVtrKfXCHdKpSW0D6du"
  },
  "75x1wQLiswhHN8Y6sDmis": {
    "id": "75x1wQLiswhHN8Y6sDmis",
    "children": ["670V5zs3pVFJztJ2JhrXo"],
    "name": "Col",
    "isContainer": true,
    "params": [{"name": "cw", "property": "cw", "value": "custom", "description": ""}, {
      "name": "top",
      "property": "v",
      "value": "top",
      "description": ""
    }, {"name": "center", "property": "v", "value": "center", "description": ""}, {
      "name": "bottom",
      "property": "v",
      "value": "bottom",
      "description": ""
    }, {"name": "left", "property": "h", "value": "left", "description": ""}, {
      "name": "center",
      "property": "h",
      "value": "center",
      "description": ""
    }, {"name": "right", "property": "h", "value": "right", "description": ""}, {
      "name": "around",
      "property": "h",
      "value": "around",
      "description": ""
    }, {"name": "between", "property": "h", "value": "between", "description": ""}, {
      "name": "evenly",
      "property": "h",
      "value": "evenly",
      "description": ""
    }],
    "parentId": "Ni26lcEaDHPt3Rdqjsvj5"
  },
  "6q3fk_cmFJ9mXbRzUz4sh": {
    "id": "6q3fk_cmFJ9mXbRzUz4sh",
    "children": ["UGZXl5aZW-xadO3rhJmum"],
    "name": "Col",
    "isContainer": true,
    "params": [{"name": "cw", "property": "cw", "value": "custom", "description": ""}, {
      "name": "top",
      "property": "v",
      "value": "top",
      "description": ""
    }, {"name": "center", "property": "v", "value": "center", "description": ""}, {
      "name": "bottom",
      "property": "v",
      "value": "bottom",
      "description": ""
    }, {"name": "left", "property": "h", "value": "left", "description": ""}, {
      "name": "center",
      "property": "h",
      "value": "center",
      "description": ""
    }, {"name": "right", "property": "h", "value": "right", "description": ""}, {
      "name": "around",
      "property": "h",
      "value": "around",
      "description": ""
    }, {"name": "between", "property": "h", "value": "between", "description": ""}, {
      "name": "evenly",
      "property": "h",
      "value": "evenly",
      "description": ""
    }],
    "parentId": "Ni26lcEaDHPt3Rdqjsvj5"
  },
  "R07V8ITu6JNMxm-8_p8Ya": {
    "id": "R07V8ITu6JNMxm-8_p8Ya",
    "children": [],
    "name": "Col",
    "isContainer": true,
    "params": [{"name": "cw", "property": "cw", "value": "custom", "description": ""}, {
      "name": "top",
      "property": "v",
      "value": "top",
      "description": ""
    }, {"name": "center", "property": "v", "value": "center", "description": ""}, {
      "name": "bottom",
      "property": "v",
      "value": "bottom",
      "description": ""
    }, {"name": "left", "property": "h", "value": "left", "description": ""}, {
      "name": "center",
      "property": "h",
      "value": "center",
      "description": ""
    }, {"name": "right", "property": "h", "value": "right", "description": ""}, {
      "name": "around",
      "property": "h",
      "value": "around",
      "description": ""
    }, {"name": "between", "property": "h", "value": "between", "description": ""}, {
      "name": "evenly",
      "property": "h",
      "value": "evenly",
      "description": ""
    }],
    "parentId": "Ni26lcEaDHPt3Rdqjsvj5"
  },
  "670V5zs3pVFJztJ2JhrXo": {
    "id": "670V5zs3pVFJztJ2JhrXo",
    "children": [],
    "name": "Button",
    "isContainer": false,
    "params": [{"name": "danger", "property": "variant", "value": "danger", "description": ""}, {
      "name": "dark",
      "property": "variant",
      "value": "dark",
      "description": ""
    }, {"name": "info", "property": "variant", "value": "info", "description": ""}, {
      "name": "primary",
      "property": "variant",
      "value": "primary",
      "description": ""
    }, {"name": "success", "property": "variant", "value": "success", "description": ""}, {
      "name": "warning",
      "property": "variant",
      "value": "warning",
      "description": ""
    }, {"name": "white", "property": "variant", "value": "white", "description": ""}, {
      "name": "sm",
      "property": "size",
      "value": "sm",
      "description": ""
    }, {"name": "lg", "property": "size", "value": "lg", "description": ""}, {
      "name": "rippleOff",
      "property": "rippleOff",
      "value": true,
      "description": ""
    }],
    "parentId": "75x1wQLiswhHN8Y6sDmis"
  },
  "UGZXl5aZW-xadO3rhJmum": {
    "id": "UGZXl5aZW-xadO3rhJmum",
    "children": [],
    "name": "Button",
    "isContainer": false,
    "params": [{"name": "danger", "property": "variant", "value": "danger", "description": ""}, {
      "name": "dark",
      "property": "variant",
      "value": "dark",
      "description": ""
    }, {"name": "info", "property": "variant", "value": "info", "description": ""}, {
      "name": "primary",
      "property": "variant",
      "value": "primary",
      "description": ""
    }, {"name": "success", "property": "variant", "value": "success", "description": ""}, {
      "name": "warning",
      "property": "variant",
      "value": "warning",
      "description": ""
    }, {"name": "white", "property": "variant", "value": "white", "description": ""}, {
      "name": "sm",
      "property": "size",
      "value": "sm",
      "description": ""
    }, {"name": "lg", "property": "size", "value": "lg", "description": ""}, {
      "name": "rippleOff",
      "property": "rippleOff",
      "value": true,
      "description": ""
    }],
    "parentId": "6q3fk_cmFJ9mXbRzUz4sh"
  }
}

const myData = [{
  key: 'item1-key',
  title: 'item1-title',
  children: [{key: "item1-children1", title: "item1-children1"}, {key: "item1-children2", title: "item1-children2"}]
}, {
  key: 'item2-key',
  title: 'item2-title',
  children: [{key: "item2-children1", title: "item2-children1"}, {key: "item2-children2", title: "item2-children2"}]
}]

export function Demo() {
  const builderToTree = (tree, res) => {

    console.log('tree', tree)
    if (!tree?.children?.length) {
      console.log('res:', res)
      return res
    }
    res.key = tree?.id
    res.title = tree?.name
    res.children = tree?.children?.map((item, index) => builderToTree(oldTree?.[item], res?.children[index]))
    // res.children = tree?.children.map((item) => ({key: item}))
    // console.log('res.children',
    //     res.children
    // )
    // res.children?.forEach((item, index) => {
    //   res.children.push(builderToTree(oldTree?.[item?.key], {}))
    // })
  }

  const test =
      (tree) => {
        return {
          key: tree?.id,
          title: tree?.name,
          children: []
        }
      }

  // const testFunc =
  //     (tree, startId) => {
  //       let children = tree?.[startId]?.children
  //       let resObj = test(tree?.[startId])
  //       let objCopy = resObj
  //       while (!!children.length) {
  //         children.forEach((item) => {
  //           objCopy.children?.push(test(tree?.[item]))
  //         })
  //         objCopy
  //       }
  //     }

  const [state, setState] = useState({
    myData: [builderToTree(oldTree?.['1_hVtrKfXCHdKpSW0D6du'], {})
    ],
    expandedKeys: []
  })

  const testObj = builderToTree(oldTree?.['1_hVtrKfXCHdKpSW0D6du'], {})

  console.log('oldToNew:', testObj)

  const
      onDragEnter = info => {
        console.log(info);
      };

  const onDrop = info => {
    //item before dropped item
    const dropKey = info.node.key;
    //item what is dragged
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    console.log('dropKey=', dropKey);
    console.log('dragKey=', dragKey);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...state.myData];
    console.log(data);
    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
        (info.node.props.children || []).length > 0 && // Has children
        info.node.props.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
        // item to the tail of the children
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setState({
      myData: data
    });
  };
  return (
      <Tree
          functionName="draggable-tree"
          defaultExpandedKeys={state.expandedKeys}
          draggable
          blockNode
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          treeData={state.myData}
      />
  );
}


ReactDOM.render(
    <React.StrictMode>
      <Demo/>
    </React.StrictMode>,
    document.getElementById('root')
);

