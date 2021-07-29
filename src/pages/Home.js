import React, { Component } from 'react'
import './pages.css'
import { Redirect } from 'react-router';
import { DropzoneArea } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import axios from "axios";
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            path: '',

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {

        this.setState({
            file: e[0]
        });


    }

    onSubmit(e) {
        e.preventDefault();
        const Api = axios.create({
            baseURL: "http://127.0.0.1:8000/api/"
        });
        console.log(this.state.file);

        let formData = new FormData();
        formData.append("file", this.state.file);
        formData.append("title", "hammad");
        Api.post("uploadfile", formData)
            .then(response => {
                this.setState({
                    path: response.data.File
                });

                console.log(response.data.Type);
            })
            .catch(err => console.log(err));
    }



    render() {
        const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />
        return (
            <div id="h1">
                <h1 >Home Page</h1>
                <br />
                <br />
                <form
                    onSubmit={this.onSubmit}
                >
                    <DropzoneArea
                        name="file"
                        onChange={this.onChange}
                        maxFileSize={1024*1024*1024}
                    />

                    <br />
                    <br />

                    <Button variant="contained" color="secondary" type="submit">
                        Upload
                        </Button>
                </form>
                <br/>
                <br/>
                 {(() => {
                            if (this.state.path) {
                                return (
                                    <Example data={this.state.path} />
                                )
                            }
                        })()}
            </div>
        )

    }
}

export default Home
