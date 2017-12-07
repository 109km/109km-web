const React =  require('react');
const Component = React.Component;
export default class Home extends Component {
  componentDidMount() {
    console.log('----componentDidMount-----');
  }

  render() {
    return <div>
      <div className="main">
        <div className="page-container page-component">
          123123
        </div>
      </div>
    </div>;
  }
}