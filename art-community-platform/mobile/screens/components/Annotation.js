import React from "react";
import {Component} from 'react';  
import { StyleSheet, Text, View, Image, Dimensions, Mark } from "react-native";
import Colors from "../constants/Colors";
import { TextAnnotator } from "react-text-annotate";
const dimensions = Dimensions.get("window");

const TAG_COLORS = {
  desc: "#00ffa2"
};
export default class Annotation extends React.Component {
    state = {
      value: [
        {
          start: 5,
          end: 20,
          tag: "desc"
        },
        { start: 15, end: 20, tag: "desc" },
        { start: 71, end: 75, tag: "desc" }
      ],
      tag: "desc"
    };
    constructor(props) {
        super(props);  
        this.TEXT = props.content
    }  
    handleChange = value => {
      this.setState({ value });
    };
  
    handleTagChange = e => {
      this.setState({ tag: e.target.value });
    };

    render() {
        return (
            <View>
            <Text>Character Text Annotator</Text>
            
            <TextAnnotator
            style={{
                maxWidth: 500,
                lineHeight: 1.5
            }}
            content={this.TEXT.split()}
            value={this.state.value}
            onChange={this.handleChange}
            getSpan={span => ({
                ...span,
                tag: "desc",
                color: TAG_COLORS[desc]
            })}
            renderMark={props => (
                <Mark
                key={props.key}
                onClick={() =>
                    props.onClick({
                    start: props.start,
                    end: props.end,
                    text: props.text,
                    tag: "desc",
                    color: props.color
                    })
                }
                style={{
                    padding: ".2em .3em",
                    margin: "0 .25em",
                    lineHeight: "1",
                    display: "inline-block",
                    borderRadius: ".25em",
                    background: "#a6e22d"
                }}
                >
                {props.content}
                <Text
                    style={{
                    fontSize: "0.7em",
                    fontWeight: "500",
                    marginLeft: "6px"
                    }}
                >
                    {" "}
                    {props.tag}
                </Text>
                </Mark>
            )}
            />
        </View>
)}}

