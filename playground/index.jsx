import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import {Table} from '../src/index'
import ColorPicker from '../src/color-picker'
import Markdown from '../src/markdown'

BraftEditor.use(Table({
  defaultColumns: 4,
  defaultRows: 5,
  withDropdown: true,
  exportAttrString: 'border="1" style="border-collapse: collapse"'
}))

BraftEditor.use(Markdown())

BraftEditor.use(ColorPicker())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(null)
    }

  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo-editor" id="demo">
          <BraftEditor
            
            onChange={this.handleChange}
            value={editorState}
            contentStyle={{height: 700}}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))