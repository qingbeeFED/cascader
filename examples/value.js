import 'rc-cascader/assets/index.less';
import Cascader from 'rc-cascader';
import React from 'react';
import ReactDOM from 'react-dom';

const addressOptions = [{
  'label': '福建',
  'value': 'fj',
  'options': [{
    'label': '福州',
    'value': 'fuzhou',
    'options': [{
      'label': '马尾',
      'value': 'mawei',
    }],
  }, {
    'label': '泉州',
    'value': 'quanzhou',
  }],
}, {
  'label': '浙江',
  'value': 'zj',
  'options': [{
    'label': '杭州',
    'value': 'hangzhou',
    'options': [{
      'label': '余杭',
      'value': 'yuhang',
    }],
  }],
}, {
  'label': '北京',
  'value': 'bj',
  'options': [{
    'label': '朝阳区',
    'value': 'chaoyang',
  }, {
    'label': '海淀区',
    'value': 'haidian',
  }],
}];

const Demo = React.createClass({
  getInitialState() {
    return {
      value: [],
    };
  },
  onSelect(value, label) {
    console.log('onSelect', value, label);
    this.setState({ value });
  },
  onChange(value, label) {
    console.log(value, label);
    this.setState({
      inputValue: label.join(', '),
    });
  },
  render() {
    return (
      <Cascader value={this.state.value} options={addressOptions}
        onSelect={this.onSelect} onChange={this.onChange}>
        <input value={this.state.inputValue} readOnly />
      </Cascader>
    );
  },
});

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
