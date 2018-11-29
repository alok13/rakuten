import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Table} from 'antd';



const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

}, {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
}, {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
}, {
    title: 'Salary',
    key: 'salary',
    dataIndex: 'salary',
}, {
    title: 'Joining Date',
    key: 'joiningDate',
    dataIndex: 'joiningDate',
}];


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);


        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: data,
        }).then(function (response) {
            if (response.ok) {
                alert("Perfect! File Uploaded");
            } else {
                alert("Oops! Status for upload " + response.status);
            }
        });
    }


    render() {
        return (
            <form >
                <div>
                   <UploadFile/>
                </div>
                <div>

                    <hr/>
                    <TableExp/>
                </div>
                <div>
                    <hr/>
                    <Example/>
                </div>
            </form>
        )
    }
}

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);


        fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: data,
        }).then(function (response) {
            if (response.ok) {
                alert("Perfect! File Uploaded");
            } else {
                alert("Oops! Status for upload " + response.status);
            }
        });
    }


    render() {
        return (
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <input ref={(ref) => {
                        this.uploadInput = ref;
                    }} type="file"/>
                </div>

                <br/>
                <div>
                    <button>Upload</button>
                </div>
            </form>
        )
    }
}

class TableExp extends React.Component {
    constructor(props) {
        super(props);
        const tableData = [];
        this.state = {
            tableData: {},
            finalData: {}
        };
    }

    componentWillMount() {
        var data = {};
        fetch('http://localhost:8080/employee', {
                //mode: "no-cors",
                method: "GET",
                headers: {
                    Accept: 'application/json'
                },
            },
        ).then(response => {
            return response.json();
            //this.setState({ tableData: response.data });
        }).then((response) => {
            var i = 0;
            var res = response;
            console.log(res);
            var tempData = [];
            res.map((item) => {
                tempData.push(item);
            });
            return tempData;
        }).then(finalResult => {
            this.setState({finalData: finalResult});
        });

    }


    render() {
        const con = [];
        let stateVar = this.state.finalData;
        for (var value in stateVar) {
            con.push(stateVar[value]);
        }
        console.log(con);
        return (
            <Table columns={columns} dataSource={con}/>
        );
    }
};

class Example extends React.Component {
    download() {
        setTimeout(() => {
            const response = {
                file: 'http://localhost:8080/download',
            };
            window.location.href = response.file;

        }, 100);
    }

    render() {
        return (
            <button onClick={this.download}>Download error report </button>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'))

export default Main;