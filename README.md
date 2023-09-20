# React Native Tooltip Progress Bar

This React Native Package is developed by Ayush Khade. A simple library for progress bar with a tooltip option and fully customisable.
<img src='./Screenshot_1695249524.png' width='200'>
## Installation

- Go to your project's root folder and run `npm install react-native-tooltip-progress-bar` or `yarn add react-native-tooltip-progress-bar`.
- Run `npm run ios` or `npm run android` to start your application!
(Using yarn: `yarn ios` or `yarn android`)

## Usage

```js
import RNProgressBar from 'react-native-tooltip-progress-bar';

//------------
<RNProgressBar
  low={10}// number 
  high={200}// number
  value={98}// number
  options={{/*properties*/}}
  type={'vertical'}// 'vertical' or 'horizontal'
  showTooltip={true}// true or false
/>
//------------

```

### Properties for RNProgressBar

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`low`**                            | Lower limit of a `Progress Bar`.                                             | `0`                    |
| **`high`**                           | Higher limit of a `Progress Bar`.                                            | `100`                  |
| **`value`**                          | Progres value.                                                               | `Random`               |
| **`type`**                           | Progress Bar type `horizontal` or `vertical`.                                | `horizontal`           |
| **`showTooltip`**                    | Tooltip is `visible` when `true`.                                            | `true`                 |
| **`options`**                        | Options for the Progress Bar                                                 | `{ leftColor:"#008b91", rightColor:"#b53636", barThickness:10 }` |

