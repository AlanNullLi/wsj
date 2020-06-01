import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import StockBar from './Components/StockBar.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  render() {

    return (
      <div>
        <StockBar />
        <Header />
        <div style={{ margin: 40 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Enim ut sem viverra aliquet eget sit amet tellus. Mauris nunc congue nisi vitae suscipit tellus. At augue eget arcu dictum varius duis at. Morbi tincidunt augue interdum velit euismod in. Aliquam vestibulum morbi blandit cursus risus. At varius vel pharetra vel. Ullamcorper dignissim cras tincidunt lobortis feugiat. Enim blandit volutpat maecenas volutpat. A lacus vestibulum sed arcu non odio euismod lacinia. Eu turpis egestas pretium aenean pharetra magna ac. Netus et malesuada fames ac turpis egestas maecenas. Adipiscing at in tellus integer. Leo integer malesuada nunc vel risus commodo viverra. Non blandit massa enim nec.

        Tincidunt augue interdum velit euismod. Risus nec feugiat in fermentum posuere urna nec. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Eget gravida cum sociis natoque penatibus et magnis. Phasellus egestas tellus rutrum tellus pellentesque eu. Semper eget duis at tellus at urna condimentum mattis pellentesque. Viverra maecenas accumsan lacus vel facilisis volutpat. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Urna molestie at elementum eu facilisis sed odio morbi quis.
        <br></br><br></br>
        Elementum nisi quis eleifend quam. Tristique magna sit amet purus gravida quis blandit turpis. Eleifend mi in nulla posuere. Molestie ac feugiat sed lectus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Scelerisque viverra mauris in aliquam sem fringilla ut. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Faucibus in ornare quam viverra orci. Quam pellentesque nec nam aliquam sem et tortor. At elementum eu facilisis sed.

        Leo urna molestie at elementum eu facilisis. Sit amet tellus cras adipiscing enim eu. Sit amet consectetur adipiscing elit duis. Lacus sed viverra tellus in hac habitasse platea. Lectus nulla at volutpat diam ut venenatis tellus in metus. Etiam erat velit scelerisque in dictum non consectetur a. Scelerisque purus semper eget duis. Natoque penatibus et magnis dis parturient montes nascetur. Aliquam id diam maecenas ultricies mi eget. Sit amet mattis vulputate enim nulla.

        Amet nisl suscipit adipiscing bibendum est ultricies. Massa enim nec dui nunc mattis enim ut tellus. Sit amet consectetur adipiscing elit duis. Placerat duis ultricies lacus sed turpis tincidunt id. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Sit amet est placerat in egestas. Augue eget arcu dictum varius duis. Tristique risus nec feugiat in. Sit amet risus nullam eget felis eget nunc. Amet aliquam id diam maecenas ultricies mi.
    </div>
      </div >
    )
  }
}

export default App;
