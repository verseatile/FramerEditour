import React, { Component } from 'react'
import '../styles/main.css'
import AceEditor from 'react-ace'
import Dragbar from './Dragbar.jsx'
import Button from './Button.jsx'
//import brace from 'brace'
import fs from 'fs'

import 'brace/mode/coffee'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

let content = ""

export default class App extends Component {
    constructor() {
        super()
  
    }

    onChange(eventBuffer) {
        console.log('shit changed!')
        content = eventBuffer

        console.log(content)
        
    }

    genFile() {
        let reddit = fs.createReadStream('./project/data-test.framer/app.coffee')
        let fileDest = fs.createWriteStream('./wrotedoe.js')

        reddit.on('data', (buff) => {
            console.log("returned data: " + buff)
        })

        reddit.pipe(fileDest)

        console.log('we readin b')

        console.log(reddit)
    }

    saveFile() {
        let fileDest = fs.createWriteStream('./project/data-test.framer/app.coffee', {encoding: "utf-8"})
        fileDest.write(content)
        
        console.log('wrote dat')


    }

    readFile() {
        //let fileDest = fs.createReadStream('./project/data-test.framer/app.coffee')
        let fileDest = fs.readFileSync('./project/data-test.framer/app.coffee')

        // fileDest.on("data", (buff) => {
        //     payload = buff
        // })
        //return payload
        return fileDest

    }

    render() {
        
        

        return (
            <div>
                <Dragbar />

                <div style={{ display:'inline-block', paddingTop: 40 }}>
                    <img className="logo" onClick={() => this.readFile()} src="./assets/beatbox.svg" />

                </div>

                <div onClick={() => this.saveFile()} style={{display:'inline-block', margin: "20px 60px", width: 110, backgroundColor: 'white'}}>
                    <Button weight={400} textColor="white" padding="8px 40px" height="30" text="SAVE" bgColor="#799069"/>
                </div>

                <div style={{  }}>
                    <AceEditor
                    mode="coffee"
                    theme="monokai"
                    onChange={this.onChange}
                    name="trill"
                    editorProps={{$blockScrolling: true}}
                    value={`${this.readFile()}`}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={false}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        }}
                    />
                </div>
            </div>
        )
    }

}