# React Native Tooltip Progress Bar

This React Native Package is developed by Ayush Khade. A simple library for progress bar with a tooltip option and fully customisable.

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

### Properties for all progress components

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`animated`**                       | Whether or not to animate changes to `progress`.                             | `true`                 |
| **`indeterminate`**                  | If set to true, the indicator will spin and `progress` prop will be ignored. | `false`                |
| **`indeterminateAnimationDuration`** | Sets animation duration in milliseconds when indeterminate is set.           | `1000`                 |
| **`progress`**                       | Progress of whatever the indicator is indicating. A number between 0 and 1.  | `0`                    |
| **`color`**                          | Fill color of the indicator.                                                 | `rgba(0, 122, 255, 1)` |
| **`unfilledColor`**                  | Color of the remaining progress.                                             | _None_                 |
| **`borderWidth`**                    | Width of outer border, set to `0` to remove.                                 | `1`                    |
| **`borderColor`**                    | Color of outer border.                                                       | `color`                |

