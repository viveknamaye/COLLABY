import "./Markdown.css"
import {marked} from 'marked';
import React from 'react';
import hljs from 'highlight.js';
import ReactDOM from 'react-dom';
import { useContext } from "react";
import { GlobalContext } from "../../globalstate";

let initialMarkdown = `
\`\`\`
print("Hello w")
\`\`\`
`
var renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  renderer,
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  },
  breaks: true
})

class Markdown extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      markdown: initialMarkdown
    }
  }


  
  handleChange = e => this.setState({ markdown: e.target.value })
  
  render() {
    return (
      <div>
        
        <div className='markdown_container'>
         
          <div className='markdown_left'>
          <h3 className="markdown_title">Add Code Snippet</h3>
            <textarea id='editor' value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className='markdown_right'>
            <h3 className="markdown_title">Preview</h3>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
          </div>
        </div>
      </div>
    )
  }
}


// ReactDOM.render(<App/>, document.getElementById('root'));
export default Markdown;