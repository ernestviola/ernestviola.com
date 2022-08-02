import React, { useEffect, useState } from 'react'

import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';

import '../styles/CustomEditor.css'
import '@aws-amplify/ui-react/styles.css';

const CustomEditor = (props) => {
    const [editorState, setEditorState] = useState(props.contentState ? EditorState.createWithContent(convertFromRaw(props.contentState)) : EditorState.createEmpty())
    const [emojiPlugin, setEmojiPlugin] = useState(createEmojiPlugin())
    const [inlineToolbarPlugin, setInlineToolbarPlugin] = useState(createInlineToolbarPlugin())
    const { EmojiSuggestions } = emojiPlugin

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

    useEffect(() => {
        console.log(props.contentState)
    },[])


    return (
        <div>
            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={onChange}
                plugins={[emojiPlugin,inlineToolbarPlugin]}
                readOnly={props.readOnly}
            />
            <EmojiSuggestions warn />
        </div>
    )
}

export default CustomEditor