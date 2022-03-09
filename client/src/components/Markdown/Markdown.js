import "./Markdown.css"
import {marked} from 'marked';
import React from 'react';
import hljs from 'highlight.js';
import ReactDOM from 'react-dom';

let initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://image.shutterstock.com/image-photo/pitbull-dog-alway-smile-260nw-629627696.jpg 'Cute Pitbull')

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
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
          <h3 className="markdown_title">Edit New File</h3>
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