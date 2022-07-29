import React, { Component } from "react";
import {EditorState, RichUtils, convertToRaw} from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";

import { Button } from '@aws-amplify/ui-react';
import '../styles/CustomEditor.css'

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

class CustomEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    updatePost = () => {
        const contentState = convertToRaw(this.state.editorState.getCurrentContent())
        console.log('content state', contentState);
        // this.props.handleSubmit(this.state.contentState)
    }

    onChange = (editorState) => {
        
        this.setState({
            editorState,
            contentState: convertToRaw(editorState.getCurrentContent())
        })
    }

    handleChange = (editorState) => {
        this.setState({
            editorState
        })
        console.log()
    }
 
    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not handled';
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,'UNDERLINE'))
    }

    onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    }
    
    render() {
        return(
            <div className="editorContainer">
                <button onClick={this.onToggleCode}>Code Block</button>
                <button onClick={this.onUnderlineClick}>Underline</button>
                <Editor 
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.handleChange}
                plugins={[emojiPlugin]}
                />
                <EmojiSuggestions />
                <Button onClick={this.updatePost}>Save</Button>
            </div>
        )
    }    
}

export default CustomEditor
