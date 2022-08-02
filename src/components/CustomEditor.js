import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";

import { Button } from '@aws-amplify/ui-react';

import '../styles/CustomEditor.css'
import '@aws-amplify/ui-react/styles.css';

const CustomEditor = (props) => {
    const [editorState, setEditorState] = useState(props.contentState ? EditorState.createWithContent(convertFromRaw(props.contentState)) : EditorState.createEmpty())
    
    // useState(props.contentState ? EditorState.createWithContent(convertFromRaw(props.contentState)) : EditorState.createEmpty())
    
    const [emojiPlugin, setEmojiPlugin] = useState(createEmojiPlugin())
    const { EmojiSuggestions } = emojiPlugin

    // const updatePost = () => {
    //     const contentState = convertToRaw(this.state.editorState.getCurrentContent())
    //     console.log('content state', contentState);
    // }

    const onChange = (editorState) => {
        setEditorState(editorState)
        if (props.onChange) {
            props.onChange(convertToRaw(editorState.getCurrentContent()))
        }
        
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            onChange(newState);
            return 'handled';
        }

        return 'not handled';
    }

    const onUnderlineClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }

    const onToggleCode = () => {
        onChange(RichUtils.toggleCode(editorState));
    }

    useEffect(() => {
        console.log(props.contentState)
    },[])


    return (
        <div>
            <button onClick={onToggleCode}>Code Block</button>
            <button onClick={onUnderlineClick}>Underline</button>
            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={onChange}
                plugins={[emojiPlugin]}
                readOnly={props.readOnly}
            />
            <EmojiSuggestions warn />
        </div>
    )
}

export default CustomEditor