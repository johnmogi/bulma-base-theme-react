import React, { Component } from "react";
import "./thumbnail.css";

interface ThumbnailProps {
    imageSource: string;
    imageWidth: number;
    imageHeight?: number;
    enter?(imageSource: string): void; // Parent-פונקציה שאנו מצפים לקבל מה
}

export class Thumbnail extends Component<ThumbnailProps> {

    public userEntersMe = () => {
        // הביא לנו פונקציה, אנו קוראים לה ושולחים את התמונה Parent-אם ה
        if (this.props.enter) {
            this.props.enter(this.props.imageSource); // הביא לנו Parent-קריאה לפונקציה שה
        }
    };

    public render(): JSX.Element {
        return (
            <div className="thumbnail" onMouseEnter={this.userEntersMe}>
                {/* אם המשתמש נכנס עם העכבר, אנו קוראים לפונקציה הנ"ל */}

                <img
                    src={this.props.imageSource}
                    width={this.props.imageWidth}
                    height={this.props.imageHeight || 50} />

            </div>
        );
    }
}