'use strict';
import  '../styles/edit.css';
import React ,{Component} from 'react';
import showdown from 'showdown';
import {Input,Row,Col,Divider,Icon,Button,message} from 'antd';
import {insertAfterText} from '../utils/focus';
import SimpleMDEEditor from 'yt-simplemde-editor';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import loadLanguages  from 'prismjs/components/index';
import cookie from 'cookie';

const {TextArea} = Input;

loadLanguages([
    'css',
    'javascript',
    'bash',
    'git',
    'ini',
    'java',
    'json',
    'less',
    'markdown',
    'php',
    'php-extras',
    'python',
    'jsx',
    'tsx',
    'scss',
    'sql',
    'vim',
    'yaml',
]);
export default class edit extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         shtml:'',
    //         titile:'',
    //         desc:'',
    //     };
    //
    //     this.converter = new showdown.Converter({
    //         simpleLineBreaks:true
    //     });
    // }
    //
    // componentDidMount(){
    //
    //     this.converter.setFlavor('github');
    //
    //
    //
    // }
    //
    // changeValues(data){
    //     this.setState({
    //         shtml:data
    //     })
    //
    //     this.resethljs();
    //
    // }
    // resethljs = () => {
    //     $('.markdown-body')
    //         .find('pre code')
    //         .each(function(i, block) {
    //             hljs.highlightBlock(block);
    //         });
    // };
    // render(){
    //     let {shtml} = this.state;
    //     return(
    //         <div className="edit">
    //
    //             <Divider/>
    //
    //             <div className="editbox">
    //
    //                 <div className="item">
    //                     <TextArea className="markdowntext"
    //                               autosize = {true}
    //                               onChange={e => {this.changeValues(e.target.value)}}
    //                     />
    //                 </div>
    //                 <div className="item">
    //                     <div className="markdown-body" dangerouslySetInnerHTML={{__html:shtml}}/>
    //                 </div>
    //             </div>
    //
    //         </div>
    //     )
    // }


    state = {
        value: '',
    };

    renderMarkdown = text => {
        const html = marked(text, { breaks: true });
        if (/language-/.test(html)) {
            const container = document.createElement('div');
            container.innerHTML = html;
            Prism.highlightAllUnder(container);
            return container.innerHTML;
        }

        return html;
    };

    render () {
        const editorProps = {
            value: this.state.value,
            getMdeInstance: simplemde => {
                this.simplemde = simplemde;
            },
            onChange: value => {
                this.setState({ value })
            },
            options: {
                // see https://github.com/sparksuite/simplemde-markdown-editor#configuration
                spellChecker: false,
                forceSync: true,
                autosave: {
                    enabled: true,
                    delay: 5000,
                    uniqueId: 'article_content',
                },
                renderingConfig: {
                    // codeSyntaxHighlighting: true,
                },
                previewRender: this.renderMarkdown, // 自定义预览渲染
                tabSize: 4,
                toolbar: [
                    'bold',
                    'italic',
                    'heading',
                    '|',
                    'quote',
                    'code',
                    'table',
                    'horizontal-rule',
                    'unordered-list',
                    'ordered-list',
                    '|',
                    'link',
                    'image',
                    '|',
                    'side-by-side',
                    'fullscreen',
                    '|',
                    {
                        name: 'guide',
                        action () {
                            const win = window.open(
                                'https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md',
                                '_blank',
                            );
                            if (win) {
                                // Browser has allowed it to be opened
                                win.focus();
                            }
                        },
                        className: 'fa fa-info-circle',
                        title: 'Markdown 语法！',
                    },
                ],
            },
            uploadOptions: {
                uploadUrl: '/api/attachment/upload',
                jsonFieldName: 'data.filename',
                extraHeaders: {
                    Accept: 'application/x.sheng.v1+json',
                    'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'],
                },
            },
        };

        return (
            <div>
                <SimpleMDEEditor {...editorProps} />
            </div>
        )
    }

}